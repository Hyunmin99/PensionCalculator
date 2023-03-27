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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ChatGPT; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chatscope/chat-ui-kit-styles/dist/default/styles.min.css */ \"./node_modules/@chatscope/chat-ui-kit-styles/dist/default/styles.min.css\");\n/* harmony import */ var _chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chatscope_chat_ui_kit_styles_dist_default_styles_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chatscope/chat-ui-kit-react */ \"./node_modules/@chatscope/chat-ui-kit-react/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst API_KEY = \"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\";\nfunction ChatGPT() {\n    _s();\n    const [typing, setTyping] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            message: \"투자에 대한 고민을 말해주세요.\",\n            sender: \"ChatGPT\"\n        }\n    ]);\n    const handleSend = async (message)=>{\n        const newMessage = {\n            message: message,\n            sender: \"user\",\n            direction: \"outgoing\"\n        };\n        // all the old messages, + the new message\n        const newMessages = [\n            ...messages,\n            newMessage\n        ];\n        // update our messages state\n        setMessages(newMessages);\n        // set a typing indicator (chatGPT is typing)\n        setTyping(true);\n        // process message to chatGPT (send it over and see the response)\n        await processMessageToChatGPT(newMessages);\n    };\n    async function processMessageToChatGPT(chatMessages) {\n        // chatMessages { sender: \"user\" or \"ChatGPT\", message: \"The message content here\"}\n        // apiMessages { role: \"user\" or \"assistant\", content: \"The message content here\"}\n        let apiMessages = chatMessages.map((messageObject)=>{\n            let role = \"\";\n            if (messageObject.sender === \"ChatGPT\") {\n                role = \"assistant\";\n            } else {\n                role = \"user\";\n            }\n            return {\n                role: role,\n                content: messageObject.message\n            };\n        });\n        // role: \"user\" -> a message from the user, \"assistant\" -> a response from chatGPT\n        // \"system\" -> generally one initial message defining HOW we want chatGPT to talk\n        const systemMessage = {\n            role: \"system\",\n            content: \"투자에 대해 잘 모르는 사람도 쉽게 이해할 수 있게 풀어서 설명해줘\"\n        };\n        const apiRequestBody = {\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                systemMessage,\n                ...apiMessages\n            ]\n        };\n        await fetch(\"https://api.openai.com/v1/chat/completions\", {\n            method: \"POST\",\n            headers: {\n                Authorization: \"Bearer \" + API_KEY,\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(apiRequestBody)\n        }).then((data)=>{\n            return data.json();\n        }).then((data)=>{\n            setMessages([\n                ...chatMessages,\n                {\n                    message: data.choices[0].message.content,\n                    sender: \"ChatGPT\"\n                }\n            ]);\n            setTyping(false);\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                position: \"relative\",\n                height: \"90vh\",\n                width: \"500px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.MainContainer, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.ChatContainer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.MessageList, {\n                            scrollBehavior: \"smooth\",\n                            typingIndicator: typing ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.TypingIndicator, {\n                                content: \"ChatGPT is typing\"\n                            }, void 0, false, void 0, void 0) : null,\n                            children: messages.map((message, i)=>{\n                                console.log(i, message);\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.Message, {\n                                    model: message\n                                }, i, false, {\n                                    fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 24\n                                }, this);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chatscope_chat_ui_kit_react__WEBPACK_IMPORTED_MODULE_3__.MessageInput, {\n                            placeholder: \"Type message here\",\n                            onSend: handleSend\n                        }, void 0, false, {\n                            fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                            lineNumber: 109,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                    lineNumber: 97,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n                lineNumber: 96,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/kwonhyunmin/Documents/GitHub/PensionCalculator/src/pages/chatGPT.js\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_s(ChatGPT, \"i0i8astWPLCvG6qz7ixSZcy29SA=\");\n_c = ChatGPT;\nvar _c;\n$RefreshReg$(_c, \"ChatGPT\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY2hhdEdQVC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQzJCO0FBUTdCO0FBRXRDLE1BQU1RLFVBQVVDLHFEQUF1QztBQUV4QyxTQUFTRyxVQUFVOztJQUNoQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR2IsK0NBQVFBLENBQUMsS0FBSztJQUMxQyxNQUFNLENBQUNjLFVBQVVDLFlBQVksR0FBR2YsK0NBQVFBLENBQUM7UUFDdkM7WUFDRWdCLFNBQVM7WUFDVEMsUUFBUTtRQUNWO0tBQ0Q7SUFFRCxNQUFNQyxhQUFhLE9BQU9GLFVBQVk7UUFDcEMsTUFBTUcsYUFBYTtZQUNqQkgsU0FBU0E7WUFDVEMsUUFBUTtZQUNSRyxXQUFXO1FBQ2I7UUFDQSwwQ0FBMEM7UUFDMUMsTUFBTUMsY0FBYztlQUFJUDtZQUFVSztTQUFXO1FBRTdDLDRCQUE0QjtRQUM1QkosWUFBWU07UUFFWiw2Q0FBNkM7UUFDN0NSLFVBQVUsSUFBSTtRQUVkLGlFQUFpRTtRQUNqRSxNQUFNUyx3QkFBd0JEO0lBQ2hDO0lBRUEsZUFBZUMsd0JBQXdCQyxZQUFZLEVBQUU7UUFDbkQsbUZBQW1GO1FBQ25GLGtGQUFrRjtRQUVsRixJQUFJQyxjQUFjRCxhQUFhRSxHQUFHLENBQUMsQ0FBQ0MsZ0JBQWtCO1lBQ3BELElBQUlDLE9BQU87WUFDWCxJQUFJRCxjQUFjVCxNQUFNLEtBQUssV0FBVztnQkFDdENVLE9BQU87WUFDVCxPQUFPO2dCQUNMQSxPQUFPO1lBQ1QsQ0FBQztZQUNELE9BQU87Z0JBQUVBLE1BQU1BO2dCQUFNQyxTQUFTRixjQUFjVixPQUFPO1lBQUM7UUFDdEQ7UUFFQSxrRkFBa0Y7UUFDbEYsaUZBQWlGO1FBRWpGLE1BQU1hLGdCQUFnQjtZQUNwQkYsTUFBTTtZQUNOQyxTQUNFO1FBQ0o7UUFFQSxNQUFNRSxpQkFBaUI7WUFDckJDLE9BQU87WUFDUGpCLFVBQVU7Z0JBQUNlO21CQUFrQkw7YUFBWTtRQUMzQztRQUVBLE1BQU1RLE1BQU0sOENBQThDO1lBQ3hEQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1BDLGVBQWUsWUFBWTVCO2dCQUMzQixnQkFBZ0I7WUFDbEI7WUFDQTZCLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQ1I7UUFDdkIsR0FDR1MsSUFBSSxDQUFDLENBQUNDLE9BQVM7WUFDZCxPQUFPQSxLQUFLQyxJQUFJO1FBQ2xCLEdBQ0NGLElBQUksQ0FBQyxDQUFDQyxPQUFTO1lBQ2R6QixZQUFZO21CQUNQUTtnQkFDSDtvQkFDRVAsU0FBU3dCLEtBQUtFLE9BQU8sQ0FBQyxFQUFFLENBQUMxQixPQUFPLENBQUNZLE9BQU87b0JBQ3hDWCxRQUFRO2dCQUNWO2FBQ0Q7WUFDREosVUFBVSxLQUFLO1FBQ2pCO0lBQ0o7SUFFQSxxQkFDRSw4REFBQzhCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlFLE9BQU87Z0JBQUVDLFVBQVU7Z0JBQVlDLFFBQVE7Z0JBQVFDLE9BQU87WUFBUTtzQkFDakUsNEVBQUMvQyx1RUFBYUE7MEJBQ1osNEVBQUNDLHVFQUFhQTs7c0NBQ1osOERBQUNDLHFFQUFXQTs0QkFDVjhDLGdCQUFlOzRCQUNmQyxpQkFDRXRDLHVCQUFTLDhEQUFDTix5RUFBZUE7Z0NBQUNzQixTQUFRO2dFQUF5QixJQUFJO3NDQUdoRWQsU0FBU1csR0FBRyxDQUFDLENBQUNULFNBQVNtQyxJQUFNO2dDQUM1QkMsUUFBUUMsR0FBRyxDQUFDRixHQUFHbkM7Z0NBQ2YscUJBQU8sOERBQUNaLGlFQUFPQTtvQ0FBUzJCLE9BQU9mO21DQUFWbUM7Ozs7OzRCQUN2Qjs7Ozs7O3NDQUVGLDhEQUFDOUMsc0VBQVlBOzRCQUFDaUQsYUFBWTs0QkFBb0JDLFFBQVFyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxFLENBQUM7R0FyR3VCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvY2hhdEdQVC5qcz9hODExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiQGNoYXRzY29wZS9jaGF0LXVpLWtpdC1zdHlsZXMvZGlzdC9kZWZhdWx0L3N0eWxlcy5taW4uY3NzXCI7XG5pbXBvcnQge1xuICBNYWluQ29udGFpbmVyLFxuICBDaGF0Q29udGFpbmVyLFxuICBNZXNzYWdlTGlzdCxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZUlucHV0LFxuICBUeXBpbmdJbmRpY2F0b3IsXG59IGZyb20gXCJAY2hhdHNjb3BlL2NoYXQtdWkta2l0LXJlYWN0XCI7XG5cbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEFUR1BUX0FQSV9LRVk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXRHUFQoKSB7XG4gIGNvbnN0IFt0eXBpbmcsIHNldFR5cGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW1xuICAgIHtcbiAgICAgIG1lc3NhZ2U6IFwi7Yis7J6Q7JeQIOuMgO2VnCDqs6Drr7zsnYQg66eQ7ZW07KO87IS47JqULlwiLFxuICAgICAgc2VuZGVyOiBcIkNoYXRHUFRcIixcbiAgICB9LCBcbiAgXSk7XG5cbiAgY29uc3QgaGFuZGxlU2VuZCA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XG4gICAgY29uc3QgbmV3TWVzc2FnZSA9IHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgICBzZW5kZXI6IFwidXNlclwiLFxuICAgICAgZGlyZWN0aW9uOiBcIm91dGdvaW5nXCIsXG4gICAgfTtcbiAgICAvLyBhbGwgdGhlIG9sZCBtZXNzYWdlcywgKyB0aGUgbmV3IG1lc3NhZ2VcbiAgICBjb25zdCBuZXdNZXNzYWdlcyA9IFsuLi5tZXNzYWdlcywgbmV3TWVzc2FnZV07XG5cbiAgICAvLyB1cGRhdGUgb3VyIG1lc3NhZ2VzIHN0YXRlXG4gICAgc2V0TWVzc2FnZXMobmV3TWVzc2FnZXMpO1xuXG4gICAgLy8gc2V0IGEgdHlwaW5nIGluZGljYXRvciAoY2hhdEdQVCBpcyB0eXBpbmcpXG4gICAgc2V0VHlwaW5nKHRydWUpO1xuXG4gICAgLy8gcHJvY2VzcyBtZXNzYWdlIHRvIGNoYXRHUFQgKHNlbmQgaXQgb3ZlciBhbmQgc2VlIHRoZSByZXNwb25zZSlcbiAgICBhd2FpdCBwcm9jZXNzTWVzc2FnZVRvQ2hhdEdQVChuZXdNZXNzYWdlcyk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gcHJvY2Vzc01lc3NhZ2VUb0NoYXRHUFQoY2hhdE1lc3NhZ2VzKSB7XG4gICAgLy8gY2hhdE1lc3NhZ2VzIHsgc2VuZGVyOiBcInVzZXJcIiBvciBcIkNoYXRHUFRcIiwgbWVzc2FnZTogXCJUaGUgbWVzc2FnZSBjb250ZW50IGhlcmVcIn1cbiAgICAvLyBhcGlNZXNzYWdlcyB7IHJvbGU6IFwidXNlclwiIG9yIFwiYXNzaXN0YW50XCIsIGNvbnRlbnQ6IFwiVGhlIG1lc3NhZ2UgY29udGVudCBoZXJlXCJ9XG5cbiAgICBsZXQgYXBpTWVzc2FnZXMgPSBjaGF0TWVzc2FnZXMubWFwKChtZXNzYWdlT2JqZWN0KSA9PiB7XG4gICAgICBsZXQgcm9sZSA9IFwiXCI7XG4gICAgICBpZiAobWVzc2FnZU9iamVjdC5zZW5kZXIgPT09IFwiQ2hhdEdQVFwiKSB7XG4gICAgICAgIHJvbGUgPSBcImFzc2lzdGFudFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcm9sZSA9IFwidXNlclwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHsgcm9sZTogcm9sZSwgY29udGVudDogbWVzc2FnZU9iamVjdC5tZXNzYWdlIH07XG4gICAgfSk7XG5cbiAgICAvLyByb2xlOiBcInVzZXJcIiAtPiBhIG1lc3NhZ2UgZnJvbSB0aGUgdXNlciwgXCJhc3Npc3RhbnRcIiAtPiBhIHJlc3BvbnNlIGZyb20gY2hhdEdQVFxuICAgIC8vIFwic3lzdGVtXCIgLT4gZ2VuZXJhbGx5IG9uZSBpbml0aWFsIG1lc3NhZ2UgZGVmaW5pbmcgSE9XIHdlIHdhbnQgY2hhdEdQVCB0byB0YWxrXG5cbiAgICBjb25zdCBzeXN0ZW1NZXNzYWdlID0ge1xuICAgICAgcm9sZTogXCJzeXN0ZW1cIixcbiAgICAgIGNvbnRlbnQ6XG4gICAgICAgIFwi7Yis7J6Q7JeQIOuMgO2VtCDsnpgg66qo66W064qUIOyCrOuejOuPhCDsib3qsowg7J207ZW07ZWgIOyImCDsnojqsowg7ZKA7Ja07IScIOyEpOuqhe2VtOykmFwiLFxuICAgIH07XG5cbiAgICBjb25zdCBhcGlSZXF1ZXN0Qm9keSA9IHtcbiAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAgIG1lc3NhZ2VzOiBbc3lzdGVtTWVzc2FnZSwgLi4uYXBpTWVzc2FnZXNdLFxuICAgIH07XG5cbiAgICBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9uc1wiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIEFQSV9LRVksXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGFwaVJlcXVlc3RCb2R5KSxcbiAgICB9KVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHNldE1lc3NhZ2VzKFtcbiAgICAgICAgICAuLi5jaGF0TWVzc2FnZXMsXG4gICAgICAgICAge1xuICAgICAgICAgICAgbWVzc2FnZTogZGF0YS5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudCxcbiAgICAgICAgICAgIHNlbmRlcjogXCJDaGF0R1BUXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgICAgIHNldFR5cGluZyhmYWxzZSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwicmVsYXRpdmVcIiwgaGVpZ2h0OiBcIjkwdmhcIiwgd2lkdGg6IFwiNTAwcHhcIiB9fT5cbiAgICAgICAgPE1haW5Db250YWluZXI+XG4gICAgICAgICAgPENoYXRDb250YWluZXI+XG4gICAgICAgICAgICA8TWVzc2FnZUxpc3RcbiAgICAgICAgICAgICAgc2Nyb2xsQmVoYXZpb3I9XCJzbW9vdGhcIlxuICAgICAgICAgICAgICB0eXBpbmdJbmRpY2F0b3I9e1xuICAgICAgICAgICAgICAgIHR5cGluZyA/IDxUeXBpbmdJbmRpY2F0b3IgY29udGVudD1cIkNoYXRHUFQgaXMgdHlwaW5nXCIgLz4gOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGksIG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiA8TWVzc2FnZSBrZXk9e2l9IG1vZGVsPXttZXNzYWdlfSAvPjtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L01lc3NhZ2VMaXN0PlxuICAgICAgICAgICAgPE1lc3NhZ2VJbnB1dCBwbGFjZWhvbGRlcj1cIlR5cGUgbWVzc2FnZSBoZXJlXCIgb25TZW5kPXtoYW5kbGVTZW5kfSAvPlxuICAgICAgICAgIDwvQ2hhdENvbnRhaW5lcj5cbiAgICAgICAgPC9NYWluQ29udGFpbmVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTWFpbkNvbnRhaW5lciIsIkNoYXRDb250YWluZXIiLCJNZXNzYWdlTGlzdCIsIk1lc3NhZ2UiLCJNZXNzYWdlSW5wdXQiLCJUeXBpbmdJbmRpY2F0b3IiLCJBUElfS0VZIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0NIQVRHUFRfQVBJX0tFWSIsIkNoYXRHUFQiLCJ0eXBpbmciLCJzZXRUeXBpbmciLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibWVzc2FnZSIsInNlbmRlciIsImhhbmRsZVNlbmQiLCJuZXdNZXNzYWdlIiwiZGlyZWN0aW9uIiwibmV3TWVzc2FnZXMiLCJwcm9jZXNzTWVzc2FnZVRvQ2hhdEdQVCIsImNoYXRNZXNzYWdlcyIsImFwaU1lc3NhZ2VzIiwibWFwIiwibWVzc2FnZU9iamVjdCIsInJvbGUiLCJjb250ZW50Iiwic3lzdGVtTWVzc2FnZSIsImFwaVJlcXVlc3RCb2R5IiwibW9kZWwiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwiZGF0YSIsImpzb24iLCJjaG9pY2VzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJwb3NpdGlvbiIsImhlaWdodCIsIndpZHRoIiwic2Nyb2xsQmVoYXZpb3IiLCJ0eXBpbmdJbmRpY2F0b3IiLCJpIiwiY29uc29sZSIsImxvZyIsInBsYWNlaG9sZGVyIiwib25TZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/chatGPT.js\n"));

/***/ })

});