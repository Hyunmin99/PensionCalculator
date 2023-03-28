"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chatGPT",{

/***/ "./src/pages/chatGPT.js":
/*!******************************!*\
  !*** ./src/pages/chatGPT.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatGPT; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatscope/chat-ui-kit-styles/dist/default/styles.min.css */ \"./node_modules/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css\");\n/* harmony import */ var _chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chatscope/chat-ui-kit-react */ \"./node_modules/@chatscope/chat-ui-kit-react/dist/es/index.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_4___default().config();\nconst API_KEY = \"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\";\nfunction ChatGPT() {\n    _s();\n    const [typing, setTyping] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            message: \"투자에 대한 고민을 말해주세요.\",\n            sender: \"ChatGPT\"\n        }\n    ]);\n    const handleSend = async (message)=>{\n        const newMessage = {\n            message: message,\n            sender: \"user\",\n            direction: \"outgoing\"\n        };\n        // all the old messages, + the new message\n        const newMessages = [\n            ...messages,\n            newMessage\n        ];\n        // update our messages state\n        setMessages(newMessages);\n        // set a typing indicator (chatGPT is typing)\n        setTyping(true);\n        // process message to chatGPT (send it over and see the response)\n        await processMessageToChatGPT(newMessages);\n    };\n    async function processMessageToChatGPT(chatMessages) {\n        // chatMessages { sender: \"user\" or \"ChatGPT\", message: \"The message content here\"}\n        // apiMessages { role: \"user\" or \"assistant\", content: \"The message content here\"}\n        let apiMessages = chatMessages.map((messageObject)=>{\n            let role = \"\";\n            if (messageObject.sender === \"ChatGPT\") {\n                role = \"assistant\";\n            } else {\n                role = \"user\";\n            }\n            return {\n                role: role,\n                content: messageObject.message\n            };\n        });\n        // role: \"user\" -> a message from the user, \"assistant\" -> a response from chatGPT\n        // \"system\" -> generally one initial message defining HOW we want chatGPT to talk\n        const systemMessage = {\n            role: \"system\",\n            content: \"투자에 대해 잘 모르는 사람도 쉽게 이해할 수 있게 풀어서 설명해줘\"\n        };\n        const apiRequestBody = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                systemMessage,\n                ...apiMessages\n            ]\n        };\n        await fetch(\"https://api.openai.com/v1/chat/completions\", {\n            method: \"POST\",\n            headers: {\n                Authorization: \"Bearer \" + API_KEY,\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(apiRequestBody),\n            cache: \"no-store\"\n        }).then((data)=>{\n            return data.json();\n        })// .catch((err) => {\n        //   console.log({ err });\n        //   console.log(API_KEY);\n        // })\n        .then((data)=>{\n            console.log(data);\n            setMessages([\n                ...chatMessages,\n                {\n                    message: data.choices[0].message.content,\n                    sender: \"ChatGPT\"\n                }\n            ]);\n            setTyping(false);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"relative\",\n                height: \"90vh\",\n                width: \"500px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.MainContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.ChatContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.MessageList, {\n                            scrollBehavior: \"smooth\",\n                            typingIndicator: typing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.TypingIndicator, {\n                                content: \"ChatGPT is typing\"\n                            }, void 0, false, void 0, void 0) : null,\n                            children: messages.map((message, i)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.Message, {\n                                    model: message\n                                }, i, false, {\n                                    fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 24\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                            lineNumber: 107,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.MessageInput, {\n                            placeholder: \"Type message here\",\n                            onSend: handleSend\n                        }, void 0, false, {\n                            fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                            lineNumber: 117,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                    lineNumber: 106,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n            lineNumber: 104,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatGPT, \"i0i8astWPLCvG6qz7ixSZcy29SA=\");\n_c = ChatGPT;\nvar _c;\n$RefreshReg$(_c, \"ChatGPT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Yy9wYWdlcy9jaGF0R1BULmpzP2E4MTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIkBjaGF0c2NvcGUvY2hhdC11aS1raXQtc3R5bGVzL2Rpc3QvZGVmYXVsdC9zdHlsZXMubWluLmNzc1wiO1xuaW1wb3J0IHtcbiAgTWFpbkNvbnRhaW5lcixcbiAgQ2hhdENvbnRhaW5lcixcbiAgTWVzc2FnZUxpc3QsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VJbnB1dCxcbiAgVHlwaW5nSW5kaWNhdG9yLFxufSBmcm9tIFwiQGNoYXRzY29wZS9jaGF0LXVpLWtpdC1yZWFjdFwiO1xuaW1wb3J0IGRvdGVudiBmcm9tIFwiZG90ZW52XCI7XG5kb3RlbnYuY29uZmlnKCk7XG5cbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFUR1BUX0FQSV9LRVk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRHUFQoKSB7XG4gIGNvbnN0IFt0eXBpbmcsIHNldFR5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIG1lc3NhZ2U6IFwi7Yis7J6Q7JeQIOuMgO2VnCDqs6Drr7zsnYQg66eQ7ZW07KO87IS47JqULlwiLFxuICAgICAgc2VuZGVyOiBcIkNoYXRHUFRcIixcbiAgICB9LCBcbiAgXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBzZW5kZXI6IFwidXNlclwiLFxuICAgICAgZGlyZWN0aW9uOiBcIm91dGdvaW5nXCIsXG4gICAgfTtcbiAgICAvLyBhbGwgdGhlIG9sZCBtZXNzYWdlcywgKyB0aGUgbmV3IG1lc3NhZ2VcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFsuLi5tZXNzYWdlcywgbmV3TWVzc2FnZV07XG5cbiAgICAvLyB1cGRhdGUgb3VyIG1lc3NhZ2VzIHN0YXRlXG4gICAgc2V0TWVzc2FnZXMobmV3TWVzc2FnZXMpO1xuXG4gICAgLy8gc2V0IGEgdHlwaW5nIGluZGljYXRvciAoY2hhdEdQVCBpcyB0eXBpbmcpXG4gICAgc2V0VHlwaW5nKHRydWUpO1xuXG4gICAgLy8gcHJvY2VzcyBtZXNzYWdlIHRvIGNoYXRHUFQgKHNlbmQgaXQgb3ZlciBhbmQgc2VlIHRoZSByZXNwb25zZSlcbiAgICBhd2FpdCBwcm9jZXNzTWVzc2FnZVRvQ2hhdEdQVChuZXdNZXNzYWdlcyk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2VUb0NoYXRHUFQoY2hhdE1lc3NhZ2VzKSB7XG4gICAgLy8gY2hhdE1lc3NhZ2VzIHsgc2VuZGVyOiBcInVzZXJcIiBvciBcIkNoYXRHUFRcIiwgbWVzc2FnZTogXCJUaGUgbWVzc2FnZSBjb250ZW50IGhlcmVcIn1cbiAgICAvLyBhcGlNZXNzYWdlcyB7IHJvbGU6IFwidXNlclwiIG9yIFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IFwiVGhlIG1lc3NhZ2UgY29udGVudCBoZXJlXCJ9XG5cbiAgICBsZXQgYXBpTWVzc2FnZXMgPSBjaGF0TWVzc2FnZXMubWFwKChtZXNzYWdlT2JqZWN0KSA9PiB7XG4gICAgICBsZXQgcm9sZSA9IFwiXCI7XG4gICAgICBpZiAobWVzc2FnZU9iamVjdC5zZW5kZXIgPT09IFwiQ2hhdEdQVFwiKSB7XG4gICAgICAgIHJvbGUgPSBcImFzc2lzdGFudFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9sZSA9IFwidXNlclwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgcm9sZTogcm9sZSwgY29udGVudDogbWVzc2FnZU9iamVjdC5tZXNzYWdlIH07XG4gICAgfSk7XG5cbiAgICAvLyByb2xlOiBcInVzZXJcIiAtPiBhIG1lc3NhZ2UgZnJvbSB0aGUgdXNlciwgXCJhc3Npc3RhbnRcIiAtPiBhIHJlc3BvbnNlIGZyb20gY2hhdEdQVFxuICAgIC8vIFwic3lzdGVtXCIgLT4gZ2VuZXJhbGx5IG9uZSBpbml0aWFsIG1lc3NhZ2UgZGVmaW5pbmcgSE9XIHdlIHdhbnQgY2hhdEdQVCB0byB0YWxrXG5cbiAgICBjb25zdCBzeXN0ZW1NZXNzYWdlID0ge1xuICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwi7Yis7J6Q7JeQIOuMgO2VtCDsnpgg66qo66W064qUIOyCrOuejOuPhCDsib3qsowg7J207ZW07ZWgIOyImCDsnojqsowg7ZKA7Ja07IScIOyEpOuqhe2VtOykmFwiLFxuICAgIH07XG5cbiAgICBjb25zdCBhcGlSZXF1ZXN0Qm9keSA9IHtcbiAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAgIG1lc3NhZ2VzOiBbc3lzdGVtTWVzc2FnZSwgLi4uYXBpTWVzc2FnZXNdLFxuICAgIH07XG5cbiAgICBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIEFQSV9LRVksXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFwaVJlcXVlc3RCb2R5KSxcbiAgICAgIGNhY2hlOiBcIm5vLXN0b3JlXCJcbiAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC8vIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHsgZXJyIH0pO1xuICAgICAgLy8gICBjb25zb2xlLmxvZyhBUElfS0VZKTtcbiAgICAgIC8vIH0pXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgc2V0TWVzc2FnZXMoW1xuICAgICAgICAgIC4uLmNoYXRNZXNzYWdlcyxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBtZXNzYWdlOiBkYXRhLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50LFxuICAgICAgICAgICAgc2VuZGVyOiBcIkNoYXRHUFRcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICAgICAgc2V0VHlwaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiQXBwXCI+XG4gICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsIGhlaWdodDogXCI5MHZoXCIsIHdpZHRoOiBcIjUwMHB4XCIgfX0+XG4gICAgICAgIDxNYWluQ29udGFpbmVyPlxuICAgICAgICAgIDxDaGF0Q29udGFpbmVyPlxuICAgICAgICAgICAgPE1lc3NhZ2VMaXN0XG4gICAgICAgICAgICAgIHNjcm9sbEJlaGF2aW9yPVwic21vb3RoXCJcbiAgICAgICAgICAgICAgdHlwaW5nSW5kaWNhdG9yPXtcbiAgICAgICAgICAgICAgICB0eXBpbmcgPyA8VHlwaW5nSW5kaWNhdG9yIGNvbnRlbnQ9XCJDaGF0R1BUIGlzIHR5cGluZ1wiIC8+IDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gPE1lc3NhZ2Uga2V5PXtpfSBtb2RlbD17bWVzc2FnZX0gLz47XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9NZXNzYWdlTGlzdD5cbiAgICAgICAgICAgIDxNZXNzYWdlSW5wdXQgcGxhY2Vob2xkZXI9XCJUeXBlIG1lc3NhZ2UgaGVyZVwiIG9uU2VuZD17aGFuZGxlU2VuZH0gLz5cbiAgICAgICAgICA8L0NoYXRDb250YWluZXI+XG4gICAgICAgIDwvTWFpbkNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJNYWluQ29udGFpbmVyIiwiQ2hhdENvbnRhaW5lciIsIk1lc3NhZ2VMaXN0IiwiTWVzc2FnZSIsIk1lc3NhZ2VJbnB1dCIsIlR5cGluZ0luZGljYXRvciIsImRvdGVudiIsImNvbmZpZyIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQ0hBVEdQVF9BUElfS0VZIiwiQ2hhdEdQVCIsInR5cGluZyIsInNldFR5cGluZyIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJtZXNzYWdlIiwic2VuZGVyIiwiaGFuZGxlU2VuZCIsIm5ld01lc3NhZ2UiLCJkaXJlY3Rpb24iLCJuZXdNZXNzYWdlcyIsInByb2Nlc3NNZXNzYWdlVG9DaGF0R1BUIiwiY2hhdE1lc3NhZ2VzIiwiYXBpTWVzc2FnZXMiLCJtYXAiLCJtZXNzYWdlT2JqZWN0Iiwicm9sZSIsImNvbnRlbnQiLCJzeXN0ZW1NZXNzYWdlIiwiYXBpUmVxdWVzdEJvZHkiLCJtb2RlbCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNhY2hlIiwidGhlbiIsImRhdGEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNob2ljZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsInBvc2l0aW9uIiwiaGVpZ2h0Iiwid2lkdGgiLCJzY3JvbGxCZWhhdmlvciIsInR5cGluZ0luZGljYXRvciIsImkiLCJwbGFjZWhvbGRlciIsIm9uU2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/chatGPT.js\n"));

/***/ })

});