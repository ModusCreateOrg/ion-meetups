/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
Ionic.loadBundle("etodjmap",["exports","./chunk-4d7345d3.js"],function(t,e){var n=window.Ionic.h,o=function(){function t(){}return t.prototype.onClick=function(t){var n=this.el.closest("ion-nav");n&&n.canGoBack()?(t.preventDefault(),n.pop()):this.defaultHref&&e.openURL(this.win,this.defaultHref,t,"back")},t.prototype.hostData=function(){return{class:{"show-back-button":!!this.defaultHref}}},t.prototype.render=function(){var t=this,o=this.icon||this.config.get("backButtonIcon","arrow-back"),i=null!=this.text?this.text:this.config.get("backButtonText","Back"),r=e.createThemedClasses(this.mode,this.color,"back-button"),c=Object.assign({},r,e.getElementClassMap(this.el.classList));return n("button",{class:c,onClick:function(e){return t.onClick(e)}},n("span",{class:"back-button-inner"},o&&n("ion-icon",{name:o}),"ios"===this.mode&&i&&n("span",{class:"button-text"},i),"md"===this.mode&&n("ion-ripple-effect",{tapClick:!0})))},Object.defineProperty(t,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"back-button"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".back-button{display:none}.back-button.show-back-button,.can-go-back>ion-header .back-button{display:inline-block}.back-button button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.back-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.back-button-md{margin:1px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-toolbar-md-text-color,var(--ion-toolbar-text-color,#424242));background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.back-button-md.activated{opacity:.4}.back-button-md ion-icon{padding-right:.3em;margin:0;padding:0 6px;text-align:left;text-align:start;font-size:24px;font-weight:400;line-height:.67;pointer-events:none}.back-button-md-primary{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.back-button-md-secondary{color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.back-button-md-tertiary{color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.back-button-md-success{color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.back-button-md-warning{color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.back-button-md-danger{color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.back-button-md-light{color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.back-button-md-medium{color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.back-button-md-dark{color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();t.IonBackButton=o,Object.defineProperty(t,"__esModule",{value:!0})});