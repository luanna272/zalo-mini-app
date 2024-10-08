declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*' {
  const content: string;
  export default content;
}

declare interface Window {
  ZaloJavaScriptInterface?: {
    getStatusBarHeight: () => number;
  };
}
