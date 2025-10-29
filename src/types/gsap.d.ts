declare module 'gsap' {
  export interface Timeline {
    to(target: any, vars: any): Timeline;
    from(target: any, vars: any): Timeline;
    fromTo(target: any, fromVars: any, toVars: any): Timeline;
  }
  
  export interface TweenVars {
    [key: string]: any;
  }
  
  export const gsap: {
    to(target: any, vars: any): any;
    from(target: any, vars: any): any;
    timeline(vars?: any): Timeline;
    registerPlugin(...plugins: any[]): void;
  };
  
  export default gsap;
}

