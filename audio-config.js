// audio-config.js
// 音频文件系统配置文件

const AUDIO_CONFIG = {
    // 音频文件基础路径
    BASE_PATH: './audio/',
    
    // 支持的音频格式
    SUPPORTED_FORMATS: ['.m4a', '.mp3', '.wav'],
    
    // 音频文件加载策略
    LOADING_STRATEGY: {
        PRELOAD_ALL: 'preload_all',        // 预加载所有文件
        LAZY_LOAD: 'lazy_load',           // 按需加载
        PROGRESSIVE: 'progressive'         // 渐进式加载
    },
    
    // 当前使用的加载策略
    CURRENT_STRATEGY: 'lazy_load',
    
    // 音频文件元数据
    METADATA: {
        "你进来吧，我好痛！.m4a": {
            "filename": "你进来吧，我好痛！.m4a",
            "text": "你进来吧。我好痛啊！",
            "duration": 5.0,
            "conversation_phase": "初次接触",
            "emotions": {
                "primary": "疼痛",
                "intensity": 3,
                "secondary": ["紧张", "寻求帮助"]
            },
            "medical_context": {
                "pain_level": 6,
                "cooperation_level": 6,
                "understanding_level": 7
            },
            "linguistic_features": [
                "广东话为主",
                "语调上扬"
            ],
            "context_tags": {
                "suitable_scenarios": [
                    "陌生人进入",
                    "感到疼痛"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "好啊你帮我洗啦.m4a": {
            "filename": "好啊你帮我洗啦.m4a",
            "text": "好啊，你帮我洗啊。",
            "duration": 2.0,
            "conversation_phase": "程序解释",
            "emotions": {
                "primary": "配合",
                "intensity": 1,
                "secondary": ["配合"]
            },
            "medical_context": {
                "pain_level": 2,
                "cooperation_level": 6,
                "understanding_level": 7
            },
            "context_tags": {
                "suitable_scenarios": [
                    "开始操作"
                ],
                "incompatible_scenarios": [
                    "感到疼痛"
                ]
            }
        },
        "好啊.m4a": {
            "filename": "好啊.m4a",
            "text": "好啊",
            "duration": 1.0,
            "conversation_phase": "初次接触",
            "emotions": {
                "primary": "配合",
                "intensity": 1,
                "secondary": ["配合"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "陌生人进入",
                    "程序解释中"
                ],
                "incompatible_scenarios": [
                    "感到疼痛"
                ]
            }
        },
        "我叫陈小丽.m4a": {
            "filename": "我叫陈小丽.m4a",
            "text": "我叫陈小丽。",
            "duration": 2.0,
            "conversation_phase": "身份确认",
            "emotions": {
                "primary": "配合",
                "intensity": 1,
                "secondary": ["寻求帮助"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "需要身份确认",
                    "关心后续"
                ],
                "incompatible_scenarios": [
                    "操作进行中"
                ]
            }
        },
        "少少痛（平静）.m4a": {
            "filename": "少少痛（平静）.m4a",
            "text": "有少少痛啊。",
            "duration": 1.0,
            "conversation_phase": "程序进行",
            "emotions": {
                "primary": "疼痛",
                "intensity": 1,
                "secondary": ["配合", "寻求帮助"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "操作进行中",
                    "感到疼痛"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "少少痛.m4a": {
            "filename": "少少痛.m4a",
            "text": "哎呀，我有少少痛啊！",
            "duration": 6.0,
            "conversation_phase": "程序进行",
            "emotions": {
                "primary": "疼痛",
                "intensity": 3,
                "secondary": ["配合"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "操作进行中",
                    "感到疼痛"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "很痛（粤语粗口版）.m4a": {
            "filename": "很痛（粤语粗口版）.m4a",
            "text": "屌，咁閪痛噶！",
            "duration": 2.0,
            "conversation_phase": "程序进行",
            "emotions": {
                "primary": "疼痛",
                "intensity": 3,
                "secondary": ["紧张", "寻求帮助"]
            },
            "medical_context": {
                "pain_level": 3,
                "cooperation_level": 6,
                "understanding_level": 7
            },
            "context_tags": {
                "suitable_scenarios": [
                    "操作进行中",
                    "感到疼痛"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "嘩，这么痛，别再弄了！.m4a": {
            "filename": "嘩，这么痛，别再弄了！.m4a",
            "text": "嘩，咁痛噶，唔好再搞我啦！",
            "duration": 3.0,
            "conversation_phase": "程序进行",
            "emotions": {
                "primary": "疼痛",
                "intensity": 3,
                "secondary": ["紧张", "寻求帮助"]
            },
            "medical_context": {
                "pain_level": 3,
                "cooperation_level": 1,
                "understanding_level": 7
            },
            "context_tags": {
                "suitable_scenarios": [
                    "操作进行中",
                    "感到疼痛"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "我很不滿意，我要向你上司投訴你（護士）！.m4a": {
            "filename": "我很不滿意，我要向你上司投訴你（護士）！.m4a",
            "text": "我很不滿意，我要向你上司投訴你（護士）！",
            "duration": 4.0,
            "conversation_phase": "程序完成",
            "emotions": {
                "primary": "愤怒",
                "intensity": 3,
                "secondary": ["不满"]
            },
            "medical_context": {
                "pain_level": 2,
                "cooperation_level": 1,
                "understanding_level": 4
            },
            "context_tags": {
                "suitable_scenarios": [
                    "程序完成",
                    "操作进行中"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "沒有特別不舒服，唔該曬！.m4a": {
            "filename": "沒有特別不舒服，唔該曬！.m4a",
            "text": "哦， okay 吖，冇么特别吾舒服，吾该晒！",
            "duration": 4.0,
            "conversation_phase": "程序完成",
            "emotions": {
                "primary": "安心",
                "intensity": 2,
                "secondary": ["感激", "配合"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "程序完成",
                    "操作进行中"
                ],
                "incompatible_scenarios": [
                    "感到疼痛"
                ]
            }
        },
        "抱怨很痛.m4a": {
            "filename": "抱怨很痛.m4a",
            "text": "哗，姑娘，你得唔得轻手D啊，真系好痛啊！",
            "duration": 5.0,
            "conversation_phase": "程序进行",
            "emotions": {
                "primary": "疼痛",
                "intensity": 3,
                "secondary": ["紧张", "疑问"]
            },
            "medical_context": {
                "pain_level": 3,
                "cooperation_level": 3,
                "understanding_level": 5
            },
            "context_tags": {
                "suitable_scenarios": [
                    "操作进行中",
                    "开始操作"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "抱怨护士大力.m4a": {
            "filename": "抱怨护士大力.m4a",
            "text": "哎呀，么你咁粗鲁噶，好大力啊！",
            "duration": 5.0,
            "conversation_phase": "程序进行",
            "emotions": {
                "primary": "疼痛",
                "intensity": 3,
                "secondary": ["紧张"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "操作进行中",
                    "感到疼痛"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "确定名字（再次观察）.m4a": {
            "filename": "确定名字（再次观察）.m4a",
            "text": "是这个编号和姓名.",
            "duration": 5.0,
            "conversation_phase": "程序完成",
            "emotions": {
                "primary": "配合",
                "intensity": 1,
                "secondary": []
            },
            "context_tags": {
                "suitable_scenarios": [
                    "关心后续"
                ],
                "incompatible_scenarios": [
                    "需要身份确认"
                ]
            }
        },
        "黄色渗液.m4a": {
            "filename": "黄色渗液.m4a",
            "text": "哎呀，哎呀，做么我伤口黄色的？流着出来的是什么？",
            "duration": 6.0,
            "conversation_phase": "程序进行",
            "emotions": {
                "primary": "紧张",
                "intensity": 3,
                "secondary": ["好奇", "困惑"]
            },
            "medical_context": {
                "pain_level": 1,
                "cooperation_level": 4,
                "understanding_level": 2
            },
            "context_tags": {
                "suitable_scenarios": [
                    "操作进行中",
                    "需要安抚"
                ],
                "incompatible_scenarios": [
                    "表达感谢"
                ]
            }
        },
        "冇特别不舒服.m4a": {
            "filename": "冇特别不舒服.m4a",
            "text": "冇啊，冇特别吾舒服。",
            "duration": 3.0,
            "conversation_phase": "程序完成",
            "emotions": {
                "primary": "配合",
                "intensity": 1,
                "secondary": ["配合", "安心"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "关心后续"
                ],
                "incompatible_scenarios": [
                    "感到疼痛"
                ]
            }
        },
        "好啊！你洗得真好！.m4a": {
            "filename": "好啊！你洗得真好！.m4a",
            "text": "好啊，你洗得真好！",
            "duration": 2.0,
            "conversation_phase": "程序完成",
            "emotions": {
                "primary": "感激",
                "intensity": 2,
                "secondary": ["感激", "安心"]
            },
            "context_tags": {
                "suitable_scenarios": [
                    "程序完成",
                    "表达感谢"
                ],
                "incompatible_scenarios": [
                    "感到疼痛"
                ]
            }
        }
    },
    
    // 情境匹配权重配置
    MATCHING_WEIGHTS: {
        PHASE_MATCH: 10,           // 对话阶段匹配权重
        SCENARIO_MATCH: 8,         // 情境匹配权重
        EMOTION_MATCH: 6,          // 情感匹配权重
        PAIN_LEVEL_MATCH: 5,       // 疼痛等级匹配权重
        COOPERATION_MATCH: 4,      // 配合程度匹配权重
        INCOMPATIBLE_PENALTY: -15  // 不兼容情境惩罚权重
    },
    
    // 音频播放设置
    PLAYBACK_SETTINGS: {
        DEFAULT_VOLUME: 0.8,
        FADE_IN_DURATION: 0.1,     // 淡入时长 (秒)
        FADE_OUT_DURATION: 0.1,    // 淡出时长 (秒)
        CROSS_FADE_ENABLED: false,  // 是否启用交叉淡化
        PRELOAD_BUFFER: 3          // 预加载缓冲数量
    },
    
    // 回退策略配置
    FALLBACK_CONFIG: {
        ENABLE_TEXT_FALLBACK: true,    // 启用文本回退
        ENABLE_SIMILAR_AUDIO: true,    // 启用相似音频回退
        SIMILARITY_THRESHOLD: 0.6,     // 相似度阈值
        DEFAULT_RESPONSES: {
            '初次接触': '你进来吧，我好痛！.m4a',
            '身份确认': '我叫陈小丽.m4a',
            '程序解释': '好啊你帮我洗啦.m4a',
            '程序进行': '少少痛（平静）.m4a',
            '程序完成': '沒有特別不舒服，唔該曬！.m4a'
        }
    },
    
    // 调试和监控配置
    DEBUG_CONFIG: {
        ENABLE_MATCHING_LOGS: true,    // 启用匹配日志
        ENABLE_PLAYBACK_LOGS: true,    // 启用播放日志
        ENABLE_PERFORMANCE_LOGS: true, // 启用性能日志
        LOG_LEVEL: 'INFO'              // 日志级别: DEBUG, INFO, WARN, ERROR
    }
};

// 导出配置（如果使用模块系统）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AUDIO_CONFIG;
}

// 全局配置（如果在浏览器中直接使用）
if (typeof window !== 'undefined') {
    window.AUDIO_CONFIG = AUDIO_CONFIG;
}