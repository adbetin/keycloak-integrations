/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface DemoMicrofrontentAuth {
        "refreshToken": string;
        /**
          * security token
         */
        "token": string;
    }
}
declare global {
    interface HTMLDemoMicrofrontentAuthElement extends Components.DemoMicrofrontentAuth, HTMLStencilElement {
    }
    var HTMLDemoMicrofrontentAuthElement: {
        prototype: HTMLDemoMicrofrontentAuthElement;
        new (): HTMLDemoMicrofrontentAuthElement;
    };
    interface HTMLElementTagNameMap {
        "demo-microfrontent-auth": HTMLDemoMicrofrontentAuthElement;
    }
}
declare namespace LocalJSX {
    interface DemoMicrofrontentAuth {
        "refreshToken"?: string;
        /**
          * security token
         */
        "token"?: string;
    }
    interface IntrinsicElements {
        "demo-microfrontent-auth": DemoMicrofrontentAuth;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "demo-microfrontent-auth": LocalJSX.DemoMicrofrontentAuth & JSXBase.HTMLAttributes<HTMLDemoMicrofrontentAuthElement>;
        }
    }
}
