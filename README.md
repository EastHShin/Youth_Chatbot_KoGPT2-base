# 청년 공감 챗봇

---

## Overview
---

청소년과 20대 청년이 마음 터놓고 고민을 말하고, 공감을 얻어 힐링할 수 있는 챗봇을 만들고자 하였습니다. 귀여운 미니언즈와 대화하며 힐링해보세요!

**Demo web Github** : [Github](https://github.com/EastHShin/Youth_Chatbot_KoGPT2-base)
<br>
**Model API**: [Ainize](https://ainize.ai/EastHShin/Youth_Chatbot_KoGPT2-base?branch=main)
<br>
**huggingface** : [EasthShin/Youth_Chatbot_Kogpt2-base](https://huggingface.co/EasthShin/Youth_Chatbot_Kogpt2-base)
<br>

## Usage
---
**Endpoint** : [endpoint](https://main-youth-chatbot-ko-gpt2-base-east-h-shin.endpoint.ainize.ai/)
<br><br>

## With CLI
---
Using Curl on the terminal

### Post Parameter

```
    user = "text"
```
<br>

### Input Format
```
    {
        "user" : "string"
    }
```

### Output Format

```
{
    "string"
}
```

### API Prediction Test

```
curl -X POST "https://main-youth-chatbot-ko-gpt2-base-east-h-shin.endpoint.ainize.ai/chat" -H "accept: application/json" -H "Content-Type: multipart/form-data" -F "question={취업은 할 수 있을까?}"

{
    "취업을 위해 어떤 노력을 하고 있나요?"
}
```

### Healthy Check

```
curl --request GET "https://main-youth-chatbot-ko-gpt2-base-east-h-shin.endpoint.ainize.ai/healthz"

{
    Health OK
}
```
