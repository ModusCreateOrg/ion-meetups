/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("tfb82r8g",["exports","./chunk-4d7345d3.js"],function(t,e){var n=window.Ionic.h,o=function(){function t(){}return t.prototype.onClick=function(t){var n=this.el.closest("ion-nav");n&&n.canGoBack()?(t.preventDefault(),n.pop()):this.defaultHref&&e.openURL(this.win,this.defaultHref,t,"back")},t.prototype.hostData=function(){return{class:{"show-back-button":!!this.defaultHref}}},t.prototype.render=function(){var t=this,o=this.icon||this.config.get("backButtonIcon","arrow-back"),i=null!=this.text?this.text:this.config.get("backButtonText","Back"),r=e.createThemedClasses(this.mode,this.color,"back-button"),c=Object.assign({},r,e.getElementClassMap(this.el.classList));return n("button",{class:c,onClick:function(e){return t.onClick(e)}},n("span",{class:"back-button-inner"},o&&n("ion-icon",{name:o}),"ios"===this.mode&&i&&n("span",{class:"button-text"},i),"md"===this.mode&&n("ion-ripple-effect",{tapClick:!0})))},Object.defineProperty(t,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"back-button"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".back-button{display:none}.back-button.show-back-button,.can-go-back>ion-header .back-button{display:inline-block}.back-button button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.back-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.back-button-ios{padding:0;margin:0;z-index:99;overflow:visible;min-height:32px;border:0;font-size:17px;line-height:1;color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff));background-color:transparent;-webkit-transform:translateZ(0);transform:translateZ(0)}.back-button-ios.activated{opacity:.4}.back-button-ios ion-icon{padding:0;margin:0 -5px 0 -4px;display:inherit;font-size:1.85em;pointer-events:none}.back-button-ios-primary{color:var(--ion-color-ios-primary,var(--ion-color-primary,#3880ff))}.back-button-ios-secondary{color:var(--ion-color-ios-secondary,var(--ion-color-secondary,#0cd1e8))}.back-button-ios-tertiary{color:var(--ion-color-ios-tertiary,var(--ion-color-tertiary,#7044ff))}.back-button-ios-success{color:var(--ion-color-ios-success,var(--ion-color-success,#10dc60))}.back-button-ios-warning{color:var(--ion-color-ios-warning,var(--ion-color-warning,#ffce00))}.back-button-ios-danger{color:var(--ion-color-ios-danger,var(--ion-color-danger,#f04141))}.back-button-ios-light{color:var(--ion-color-ios-light,var(--ion-color-light,#f4f5f8))}.back-button-ios-medium{color:var(--ion-color-ios-medium,var(--ion-color-medium,#989aa2))}.back-button-ios-dark{color:var(--ion-color-ios-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}();t.IonBackButton=o,Object.defineProperty(t,"__esModule",{value:!0})});