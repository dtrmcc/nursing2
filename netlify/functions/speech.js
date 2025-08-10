// netlify/functions/speech.js
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  console.log('Function called:', event.httpMethod, event.path);
  
  // CORS 预检请求处理
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Max-Age': '86400'
      },
      body: ''
    };
  }

  // 只允许 POST 请求
  if (event.httpMethod !== 'POST') {
    console.error('Method not allowed:', event.httpMethod);
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Method not allowed',
        allowed: ['POST']
      })
    };
  }

  try {
    console.log('Processing TTS request...');
    
    // 解析请求体
    let requestBody;
    try {
      requestBody = JSON.parse(event.body || '{}');
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Invalid JSON in request body',
          details: parseError.message
        })
      };
    }

    const { ssml } = requestBody;
    
    if (!ssml) {
      console.error('No SSML provided');
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'SSML text required',
          received: Object.keys(requestBody)
        })
      };
    }

    console.log('SSML length:', ssml.length);

    // Azure Speech Services 配置
    const AZURE_SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
    const AZURE_REGION = process.env.AZURE_REGION || 'eastasia';
    const AZURE_TTS_ENDPOINT = `https://${AZURE_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`;

    if (!AZURE_SPEECH_KEY) {
      console.error('Azure Speech Key not configured');
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Azure Speech Key not configured',
          hint: 'Set AZURE_SPEECH_KEY environment variable'
        })
      };
    }

    console.log('Calling Azure TTS API...');
    console.log('Endpoint:', AZURE_TTS_ENDPOINT);

    // 调用 Azure TTS API
    const azureResponse = await fetch(AZURE_TTS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': AZURE_SPEECH_KEY,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-16khz-128kbitrate-mono-mp3',
        'User-Agent': 'netlify-function/1.0'
      },
      body: ssml,
      timeout: 30000 // 30 second timeout
    });

    console.log('Azure response status:', azureResponse.status);

    if (!azureResponse.ok) {
      const errorText = await azureResponse.text();
      console.error('Azure TTS failed:', azureResponse.status, errorText);
      
      return {
        statusCode: azureResponse.status,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Azure TTS request failed',
          status: azureResponse.status,
          details: errorText || 'No error details available',
          endpoint: AZURE_TTS_ENDPOINT
        })
      };
    }

    // 获取音频数据
    const audioBuffer = await azureResponse.arrayBuffer();
    const audioBase64 = Buffer.from(audioBuffer).toString('base64');

    console.log('Audio generated successfully, size:', audioBuffer.byteLength, 'bytes');

    // 返回音频作为 base64
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({ 
        audio: audioBase64,
        contentType: 'audio/mpeg',
        size: audioBuffer.byteLength
      })
    };

  } catch (error) {
    console.error('Function error:', error);
    console.error('Error stack:', error.stack);
    
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Internal server error',
        details: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};