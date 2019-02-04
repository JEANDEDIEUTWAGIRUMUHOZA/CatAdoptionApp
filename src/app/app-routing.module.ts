import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import {CatsComponent} from '~/app/cats/cats.component';
import {CatDetailComponent} from '~/app/cat-detail/cat-detail.component';


const routes: Routes = [
    { path: "", redirectTo: "/cats", pathMatch: "full" },
    { path: "cats", component: CatsComponent },
    { path: "cat-detail/:id", component: CatDetailComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }