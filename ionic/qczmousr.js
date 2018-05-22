/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:t}=window.Ionic;import{d as e,f as i}from"./chunk-770a6cdb.js";class n{constructor(){this.isPane=!1,this._isOpen=!1,this.lastOnEnd=0,this.isAnimating=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeEnabled=!0,this.persistent=!1,this.maxEdgeStart=50}typeChanged(t,e){const i=this.contentEl;i&&e&&(i.classList.remove(`menu-content-${e}`),i.classList.add(`menu-content-${t}`),i.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(t){this.updateState(),this.ionMenuChange.emit({disabled:t,open:this._isOpen})}sideChanged(){this.isEndSide=i(this.win,this.side)}swipeEnabledChanged(){this.updateState()}async componentWillLoad(){null==this.type&&(this.type="ios"===this.mode?"reveal":"overlay"),this.isServer?this.disabled=!0:this.menuCtrl=await this.lazyMenuCtrl.componentOnReady()}componentDidLoad(){if(this.isServer)return;const t=this.el.parentNode,e=this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]");if(!e||!e.tagName)return void console.error('Menu: must have a "content" element to listen for drag events on.');this.contentEl=e,e.classList.add("menu-content"),this.typeChanged(this.type,null),this.sideChanged();let i=!this.disabled;!0!==i&&void 0!==i||(i=!this.menuCtrl.getMenus().some(t=>t.side===this.side&&!t.disabled)),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!i,open:this._isOpen}),this.disabled=!i}componentDidUnload(){this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}splitPaneChanged(t){this.isPane=t.target.isPane(this.el),this.updateState()}onBackdropClick(t){!t.target.closest(".menu-inner")&&this.lastOnEnd<t.timeStamp-100&&(t.preventDefault(),t.stopPropagation(),this.close())}isOpen(){return this._isOpen}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,e=!0){return this.menuCtrl._setOpen(this,t,e)}async _setOpen(t,e=!0){return!this.isActive()||this.isAnimating||t===this._isOpen?this._isOpen:(this.beforeAnimation(),await this.loadAnimation(),await this.startAnimation(t,e),this.afterAnimation(t),t)}isActive(){return!this.disabled&&!this.isPane}async loadAnimation(){const t=this.menuInnerEl.offsetWidth;t===this.width&&void 0!==this.animation||(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await this.menuCtrl.createAnimation(this.type,this))}async startAnimation(t,e){const i=this.animation.reverse(!t);e?await i.playAsync():i.playSync()}canSwipe(){return this.swipeEnabled&&!this.isAnimating&&this.isActive()}canStart(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpen()&&(e=this.win,i=t.currentX,n=this.isEndSide,s=this.maxEdgeStart,n?i>=e.innerWidth-s:i<=s));var e,i,n,s}onWillStart(){return this.beforeAnimation(),this.loadAnimation()}onDragStart(){this.isAnimating&&this.animation&&this.animation.reverse(this._isOpen).progressStart()}onDragMove(t){if(!this.isAnimating||!this.animation)return;const e=s(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(e)}onDragEnd(t){if(!this.isAnimating||!this.animation)return;const e=this._isOpen,i=this.isEndSide,n=s(t.deltaX,e,i),o=this.width,a=n/o,r=t.velocityX,d=o/2,h=r>=0&&(r>.2||t.deltaX>d),l=r<=0&&(r<-.2||t.deltaX<-d),c=e?i?h:l:i?l:h;let m=!e&&c;e&&!c&&(m=!0);const u=(c?1-a:a)*o;let p=0;if(u>5){const t=u/Math.abs(r);p=Math.min(t,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(()=>this.afterAnimation(m),{clearExistingCallacks:!0}).progressEnd(c,a,p)}beforeAnimation(){this.isAnimating,this.el.classList.add(o),this.backdropEl&&this.backdropEl.classList.add(a),this.isAnimating=!0}afterAnimation(t){this.isAnimating,this._isOpen=t,this.isAnimating=!1,this.enableListener(this,"body:click",t),t?(this.contentEl&&this.contentEl.classList.add(r),this.ionOpen.emit()):(this.el.classList.remove(o),this.contentEl&&this.contentEl.classList.remove(r),this.backdropEl&&this.backdropEl.classList.remove(a),this.ionClose.emit())}updateState(){!this.isActive()&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),this.isAnimating}forceClosing(){this._isOpen,this.isAnimating=!0,this.startAnimation(!1,!1),this.afterAnimation(!1)}hostData(){const t=this.isEndSide;return{role:"complementary",class:{[`menu-type-${this.type}`]:!0,"menu-enabled":!this.disabled,"menu-side-right":t,"menu-side-left":!t}}}render(){return[t("div",{class:"menu-inner",ref:t=>this.menuInnerEl=t},t("slot",null)),t("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1}),t("ion-gesture",{canStart:this.canStart.bind(this),onWillStart:this.onWillStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:!this.isActive()||!this.swipeEnabled,gestureName:"menu-swipe",gesturePriority:10,direction:"x",threshold:10,attachTo:"window",disableScroll:!0})]}static get is(){return"ion-menu"}static get host(){return{theme:"menu"}}static get properties(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},persistent:{type:Boolean,attr:"persistent"},setOpen:{method:!0},side:{type:String,attr:"side",watchCallbacks:["sideChanged"]},swipeEnabled:{type:Boolean,attr:"swipe-enabled",watchCallbacks:["swipeEnabledChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"body:ionSplitPaneVisible",method:"splitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]}static get style(){return"ion-menu{left:0;right:0;top:0;bottom:0;position:absolute;display:none;contain:strict}ion-menu.show-menu{display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:304px;height:100%;contain:strict}.menu-side-left>.menu-inner{right:auto;left:0}.menu-side-right>.menu-inner{right:0;left:auto}ion-menu ion-backdrop{z-index:-1;display:none;opacity:.01}.menu-content{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation}.menu-content-open .ion-pane,.menu-content-open .toolbar,.menu-content-open ion-content,.menu-content-open ion-pane{pointer-events:none}\@media (max-width:340px){.menu-inner{width:264px}}ion-menu.menu-type-reveal{z-index:0}ion-menu.menu-type-reveal.show-menu .menu-inner{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}ion-menu.menu-type-overlay{z-index:80}ion-menu.menu-type-overlay .show-backdrop{display:block;cursor:pointer}.menu-md .menu-inner{background:var(--ion-background-md-color,var(--ion-background-color,#fff))}.menu-md.menu-type-overlay .menu-inner{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}.app-md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}.app-md .menu-content-push{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"}static get styleMode(){return"md"}}function s(t,e,i){return Math.max(0,e!==i?-t:t)}const o="show-menu",a="show-backdrop",r="menu-content-open";class d{constructor(){this.autoHide=!0}render(){const e=this.config.get("menuIcon","menu");return t("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},t("ion-button",null,t("slot",null,t("ion-icon",{slot:"icon-only",name:e}))))}static get is(){return"ion-menu-button"}static get host(){return{theme:"menu-button"}}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},config:{context:"config"},menu:{type:String,attr:"menu"}}}static get style(){return".menu-button button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;-webkit-font-kerning:none;font-kerning:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.menu-button-md .menu-button-inner{margin:2px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-toolbar-md-text-color,var(--ion-toolbar-text-color,#424242));background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.menu-button-md .menu-button-inner.activated{opacity:.4}.menu-button-md ion-icon{padding-right:.3em;margin:0;padding:0 6px;text-align:left;text-align:start;font-size:24px;font-weight:400;line-height:.67;pointer-events:none}"}static get styleMode(){return"md"}}function h(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}const l=8;function c(t,e,i){let n,s;const o=i.width+l;i.isEndSide?(n=o+"px",s="0px"):(n=-o+"px",s="0px");const a=(new t).addElement(i.menuInnerEl).fromTo("translateX",n,s),r=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.3);return h(t).then(t=>t.add(a).add(r))}function m(t,e,i){let n,s;const o=i.width;i.isEndSide?(n=-o+"px",s=o+"px"):(n=o+"px",s=-o+"px");const a=(new t).addElement(i.menuInnerEl).fromTo("translateX",s,"0px"),r=(new t).addElement(i.contentEl).fromTo("translateX","0px",n),d=(new t).addElement(i.backdropEl).fromTo("opacity",.01,.2);return h(t).then(t=>t.add(a).add(d).add(r))}function u(t,e,i){const n=i.width*(i.isEndSide?-1:1)+"px",s=(new t).addElement(i.contentEl).fromTo("translateX","0px",n);return h(t).then(t=>t.add(s))}class p{constructor(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",u),this.registerAnimation("push",m),this.registerAnimation("overlay",c)}open(t){const e=this.get(t);return e?e.open():Promise.resolve(!1)}close(t){const e=t?this.get(t):this.getOpen();return e?e.close():Promise.resolve(!1)}toggle(t){const e=this.get(t);return e?e.toggle():Promise.resolve(!1)}enable(t,e){const i=this.get(e);return i&&(i.disabled=!t),i}swipeEnable(t,e){const i=this.get(e);return i&&(i.swipeEnabled=t),i}isOpen(t){if(t){const e=this.get(t);return e&&e.isOpen()||!1}return!!this.getOpen()}isEnabled(t){const e=this.get(t);return!!e&&!e.disabled}get(t){if("left"===t)return console.error('menu.side=left is deprecated, use "start" instead'),null;if("right"===t)return console.error('menu.side=right is deprecated, use "end" instead'),null;if("start"===t||"end"===t){return this.find(e=>e.side===t&&!e.disabled)||this.find(e=>e.side===t)||null}if(t)return this.find(e=>e.menuId===t)||null;return this.find(t=>!t.disabled)||(this.menus.length>0?this.menus[0].el:null)}getOpen(){return this.find(t=>t.isOpen())}getMenus(){return this.menus.map(t=>t.el)}isAnimating(){return this.menus.some(t=>t.isAnimating)}_register(t){this.menus.indexOf(t)<0&&this.menus.push(t)}_unregister(t){const e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)}_setActiveMenu(t){const e=t.side;this.menus.filter(i=>i.side===e&&i!==t).forEach(t=>t.disabled=!0)}_setOpen(t,e,i){if(this.isAnimating())return Promise.resolve(!1);if(e){const e=this.getOpen();e&&t.el!==e&&e.setOpen(!1,!1)}return t._setOpen(e,i)}createAnimation(t,e){const i=this.menuAnimations.get(t);return i?this.animationCtrl.create(i,null,e):Promise.reject("animation not registered")}registerAnimation(t,e){this.menuAnimations.set(t,e)}find(t){const e=this.menus.find(t);return e?e.el:null}static get is(){return"ion-menu-controller"}static get properties(){return{_register:{method:!0},_setActiveMenu:{method:!0},_setOpen:{method:!0},_unregister:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},createAnimation:{method:!0},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeEnable:{method:!0},toggle:{method:!0}}}}class g{constructor(){this.visible=!1,this.autoHide=!0}componentDidLoad(){this.updateVisibility()}async onClick(){const t=await b(this.doc);if(t){const e=t.get(this.menu);if(e&&e.isActive())return t.toggle(this.menu)}return!1}async updateVisibility(){const t=await b(this.doc);if(t){const e=t.get(this.menu);if(e&&e.isActive())return void(this.visible=!0)}this.visible=!1}hostData(){return{class:{"menu-toggle-hidden":this.autoHide&&!this.visible}}}static get is(){return"ion-menu-toggle"}static get properties(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}}static get listeners(){return[{name:"child:click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]}static get style(){return"ion-menu-toggle.menu-toggle-hidden{display:none}"}}function b(t){const e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}export{n as IonMenu,d as IonMenuButton,p as IonMenuController,g as IonMenuToggle};