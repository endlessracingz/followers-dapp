/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "./app.module";
import * as i2 from "./app.component";
import * as i3 from "../../node_modules/@angular/router/router.ngfactory";
import * as i4 from "./home/home.component.ngfactory";
import * as i5 from "./github-followers/github-followers.component.ngfactory";
import * as i6 from "./app.component.ngfactory";
import * as i7 from "@angular/common";
import * as i8 from "@angular/platform-browser";
import * as i9 from "@angular/common/http";
import * as i10 from "@angular/router";
import * as i11 from "./github-followers/github-followers.service";
import * as i12 from "./home/home.component";
import * as i13 from "./github-followers/github-followers.component";
import * as i14 from "./app-routing.module";
var AppModuleNgFactory = i0.ɵcmf(i1.AppModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵangular_packages_router_router_lNgFactory, i4.HomeComponentNgFactory, i5.GithubFollowersComponentNgFactory, i6.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_p, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i7.NgLocalization, i7.NgLocaleLocalization, [i0.LOCALE_ID, [2, i7.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.ɵangular_packages_core_core_ba, i0.ɵangular_packages_core_core_r, [i0.NgZone]), i0.ɵmpd(5120, i0.APP_ID, i0.ɵangular_packages_core_core_f, []), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_n, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_o, []), i0.ɵmpd(4608, i8.DomSanitizer, i8.ɵDomSanitizerImpl, [i7.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i8.DomSanitizer]), i0.ɵmpd(4608, i8.HAMMER_GESTURE_CONFIG, i8.HammerGestureConfig, []), i0.ɵmpd(5120, i8.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new i8.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i8.ɵKeyEventsPlugin(p1_0), new i8.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3)]; }, [i7.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i7.DOCUMENT, i7.DOCUMENT, i8.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i8.HAMMER_LOADER]]), i0.ɵmpd(4608, i8.EventManager, i8.EventManager, [i8.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i8.ɵDomSharedStylesHost, i8.ɵDomSharedStylesHost, [i7.DOCUMENT]), i0.ɵmpd(4608, i8.ɵDomRendererFactory2, i8.ɵDomRendererFactory2, [i8.EventManager, i8.ɵDomSharedStylesHost, i0.APP_ID]), i0.ɵmpd(6144, i0.RendererFactory2, null, [i8.ɵDomRendererFactory2]), i0.ɵmpd(6144, i8.ɵSharedStylesHost, null, [i8.ɵDomSharedStylesHost]), i0.ɵmpd(4608, i0.Testability, i0.Testability, [i0.NgZone]), i0.ɵmpd(4608, i9.HttpXsrfTokenExtractor, i9.ɵangular_packages_common_http_http_g, [i7.DOCUMENT, i0.PLATFORM_ID, i9.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i9.ɵangular_packages_common_http_http_h, i9.ɵangular_packages_common_http_http_h, [i9.HttpXsrfTokenExtractor, i9.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i9.HTTP_INTERCEPTORS, function (p0_0) { return [p0_0]; }, [i9.ɵangular_packages_common_http_http_h]), i0.ɵmpd(4608, i9.ɵangular_packages_common_http_http_d, i9.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(6144, i9.XhrFactory, null, [i9.ɵangular_packages_common_http_http_d]), i0.ɵmpd(4608, i9.HttpXhrBackend, i9.HttpXhrBackend, [i9.XhrFactory]), i0.ɵmpd(6144, i9.HttpBackend, null, [i9.HttpXhrBackend]), i0.ɵmpd(4608, i9.HttpHandler, i9.ɵHttpInterceptingHandler, [i9.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i9.HttpClient, i9.HttpClient, [i9.HttpHandler]), i0.ɵmpd(5120, i10.ActivatedRoute, i10.ɵangular_packages_router_router_g, [i10.Router]), i0.ɵmpd(4608, i10.NoPreloading, i10.NoPreloading, []), i0.ɵmpd(6144, i10.PreloadingStrategy, null, [i10.NoPreloading]), i0.ɵmpd(135680, i10.RouterPreloader, i10.RouterPreloader, [i10.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i10.PreloadingStrategy]), i0.ɵmpd(4608, i10.PreloadAllModules, i10.PreloadAllModules, []), i0.ɵmpd(5120, i10.ɵangular_packages_router_router_o, i10.ɵangular_packages_router_router_c, [i10.Router, i7.ViewportScroller, i10.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i10.ROUTER_INITIALIZER, i10.ɵangular_packages_router_router_j, [i10.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i10.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i11.GithubFollowersService, i11.GithubFollowersService, [i9.HttpClient]), i0.ɵmpd(1073742336, i7.CommonModule, i7.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i8.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i10.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i10.ɵangular_packages_router_router_h, i10.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0) { return [i8.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i10.ɵangular_packages_router_router_i(p1_0)]; }, [[2, i0.NgProbeToken], i10.ɵangular_packages_router_router_h]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i8.BrowserModule, i8.BrowserModule, [[3, i8.BrowserModule]]), i0.ɵmpd(1073742336, i9.HttpClientXsrfModule, i9.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i9.HttpClientModule, i9.HttpClientModule, []), i0.ɵmpd(1024, i10.ɵangular_packages_router_router_a, i10.ɵangular_packages_router_router_e, [[3, i10.Router]]), i0.ɵmpd(512, i10.UrlSerializer, i10.DefaultUrlSerializer, []), i0.ɵmpd(512, i10.ChildrenOutletContexts, i10.ChildrenOutletContexts, []), i0.ɵmpd(256, i10.ROUTER_CONFIGURATION, {}, []), i0.ɵmpd(1024, i7.LocationStrategy, i10.ɵangular_packages_router_router_d, [i7.PlatformLocation, [2, i7.APP_BASE_HREF], i10.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i7.Location, i7.Location, [i7.LocationStrategy, i7.PlatformLocation]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i10.ROUTES, function () { return [[{ path: "", component: i12.HomeComponent }, { path: "followers", component: i13.GithubFollowersComponent }]]; }, []), i0.ɵmpd(1024, i10.Router, i10.ɵangular_packages_router_router_f, [i0.ApplicationRef, i10.UrlSerializer, i10.ChildrenOutletContexts, i7.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i10.ROUTES, i10.ROUTER_CONFIGURATION, [2, i10.UrlHandlingStrategy], [2, i10.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i10.RouterModule, i10.RouterModule, [[2, i10.ɵangular_packages_router_router_a], [2, i10.Router]]), i0.ɵmpd(1073742336, i14.AppRoutingModule, i14.AppRoutingModule, []), i0.ɵmpd(1073742336, i1.AppModule, i1.AppModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i9.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i9.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", [])]); });
export { AppModuleNgFactory as AppModuleNgFactory };
//# sourceMappingURL=app.module.ngfactory.js.map