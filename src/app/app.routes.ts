import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { PostComponent } from "./components/post/post.component";
import { PostsComponent } from "./components/posts/posts.component";
import { SearchComponent } from "./components/search/search.component";

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'posts', component: PostsComponent},
    {path: 'post/:id', component: PostComponent},
    {path: 'search/:param', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

