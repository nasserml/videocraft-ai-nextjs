import {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} from "@google/generative-ai";

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

// TODO Make these files available on the local file system
// You may need to update the file paths

export const GenerateAIVideoData_AiModel = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: '{\n    "totalDuration": 10,\n    "frameList": [\n      {\n        "image": "/footage.png",\n        "text": "Exciting",\n        "textColor": "rgba(0,0,0,1)",\n        "fontSize": 34,\n        "duration": 0.5,\n        "fontFamily": "Bungee",\n        "animation": "slideLeft",\n        "bgColor": "#FFFFFF",\n        "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f389/512.gif",\n        "stickerSize": 0\n      }],\n  "selectedFrame": 0,\n    "music": "audio1.mp3"\n  }, Depends on providerr JSON data, generate Text Promo with emoji video on topic : Healthy Eating Tips , duration of video is 60 seconds and and add emojis to text and set image as "image": "/footage.png", keep 1 to 2 words  and 0.5 or 1 seconds of duration for each frame and give do not add same bgColor and textColor and fontFamily select between (Outfit, Bungee,Anton,Rowdies) Also Can add gradientColor to bgColor field when needed , Select the animation option from (zoomIn,zoomOut,slideIn,slideOut,slideUp,slideDown,wobble,bounce,fadeIn,fadeOut)  . Give me response in JSON format only',
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "totalDuration": 60,\n  "frameList": [\n    {\n      "image": "/footage.png",\n      "text": "Eat 🍎",\n      "textColor": "#FFFFFF",\n      "fontSize": 40,\n      "duration": 1,\n      "fontFamily": "Outfit",\n      "animation": "zoomIn",\n      "bgColor": "#4CAF50",\n        "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f34e/512.gif",\n        "stickerSize": 10\n    },\n    {\n      "image": "/footage.png",\n      "text": "More 🥗",\n      "textColor": "#000000",\n      "fontSize": 42,\n      "duration": 0.5,\n      "fontFamily": "Bungee",\n        "animation":"slideIn",\n      "bgColor": "#FFC107",\n      "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f957/512.gif",\n        "stickerSize": 10\n    },\n    {\n      "image": "/footage.png",\n      "text": "Veggies 🥕",\n      "textColor": "#FFFFFF",\n      "fontSize": 44,\n      "duration": 1,\n      "fontFamily": "Anton",\n        "animation":"fadeIn",\n       "bgColor": "linear-gradient(to right, #3498db, #2ecc71)",\n       "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f952/512.gif",\n        "stickerSize": 10\n\n    },\n    {\n      "image": "/footage.png",\n      "text": "Hydrate 💧",\n      "textColor": "#000000",\n       "fontSize": 40,\n      "duration": 0.5,\n      "fontFamily": "Rowdies",\n        "animation":"bounce",\n        "bgColor": "#95a5a6",\n        "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4a7/512.gif",\n        "stickerSize": 10\n    },\n     {\n      "image": "/footage.png",\n      "text": "Fruits 🍓",\n      "textColor": "#FFFFFF",\n      "fontSize": 46,\n      "duration": 1,\n      "fontFamily": "Outfit",\n       "animation":"slideLeft",\n      "bgColor": "#e74c3c",\n        "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f353/512.gif",\n        "stickerSize": 10\n    },\n     {\n      "image": "/footage.png",\n      "text": "Balance ⚖️",\n       "textColor": "#000000",\n      "fontSize": 44,\n      "duration": 0.5,\n      "fontFamily": "Bungee",\n        "animation":"wobble",\n      "bgColor": "#f1c40f",\n        "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/2696/512.gif",\n        "stickerSize": 10\n    },\n    {\n      "image": "/footage.png",\n      "text": "Whole 🍞",\n      "textColor": "#FFFFFF",\n      "fontSize": 42,\n      "duration": 1,\n      "fontFamily": "Anton",\n        "animation":"slideOut",\n      "bgColor": "#777777",\n      "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f35e/512.gif",\n      "stickerSize": 10\n    },\n    {\n      "image": "/footage.png",\n      "text": "Lean 💪",\n        "textColor": "#000000",\n       "fontSize": 40,\n      "duration": 0.5,\n      "fontFamily": "Rowdies",\n        "animation":"fadeOut",\n       "bgColor": "linear-gradient(to right, #9b59b6, #34495e)",\n      "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f4aa/512.gif",\n        "stickerSize": 10\n    },\n      {\n      "image": "/footage.png",\n      "text": "Snack 🥨",\n      "textColor": "#FFFFFF",\n       "fontSize": 46,\n      "duration": 1,\n      "fontFamily": "Outfit",\n      "animation": "zoomOut",\n      "bgColor": "#e67e22",\n          "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f968/512.gif",\n        "stickerSize": 10\n    },\n     {\n      "image": "/footage.png",\n      "text": "Nourish ✨",\n        "textColor": "#000000",\n       "fontSize": 44,\n      "duration": 0.5,\n      "fontFamily": "Bungee",\n        "animation":"slideDown",\n       "bgColor": "#bdc3c7",\n       "sticker":"https://fonts.gstatic.com/s/e/notoemoji/latest/2728/512.gif",\n        "stickerSize": 10\n    },\n     {\n      "image": "/footage.png",\n      "text": "Live 💚",\n        "textColor": "#FFFFFF",\n       "fontSize": 42,\n      "duration": 1,\n      "fontFamily": "Anton",\n      "animation": "zoomIn",\n     "bgColor": "#27ae60",\n         "sticker": "https://fonts.gstatic.com/s/e/notoemoji/latest/1f49a/512.gif",\n        "stickerSize": 10\n    }\n  ],\n  "selectedFrame": 0,\n  "music": "audio1.mp3"\n}\n```\n',
        },
      ],
    },
  ],
});
// const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
// console.log(result.response.text());
