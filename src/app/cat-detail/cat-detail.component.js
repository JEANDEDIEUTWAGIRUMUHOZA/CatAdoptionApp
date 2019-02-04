"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var cat_service_1 = require("~/app/services/cat.service");
var page_1 = require("tns-core-modules/ui/page");
var dialogs = require("tns-core-modules/ui/dialogs");
var CatDetailComponent = /** @class */ (function () {
    function CatDetailComponent(catService, page, route) {
        this.catService = catService;
        this.page = page;
        this.route = route;
    }
    CatDetailComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        var id = parseInt(this.route.snapshot.paramMap.get('id'), 10);
        this.cat = this.catService.getOne(id);
    };
    CatDetailComponent.prototype.showDialog = function () {
        dialogs.confirm({
            title: 'Merci ! ',
            message: 'Pour nous contacter, appuyez juste sur le bon bouton !',
            okButtonText: 'Celui-là !',
            cancelButtonText: 'Pas celui-là',
            neutralButtonText: 'Heu....'
        }).then(function (result) {
            console.log('Dialog result: ' + result);
        });
    };
    CatDetailComponent = __decorate([
        core_1.Component({
            selector: 'ns-cat-detail',
            templateUrl: './cat-detail.component.html',
            styleUrls: ['./cat-detail.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [cat_service_1.CatService,
            page_1.Page,
            router_1.ActivatedRoute])
    ], CatDetailComponent);
    return CatDetailComponent;
}());
exports.CatDetailComponent = CatDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXQtZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwQ0FBK0M7QUFFL0MsMERBQXNEO0FBQ3RELGlEQUE4QztBQUM5QyxxREFBdUQ7QUFRdkQ7SUFJSSw0QkFBbUIsVUFBc0IsRUFDdEIsSUFBVSxFQUNWLEtBQXFCO1FBRnJCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFVBQUssR0FBTCxLQUFLLENBQWdCO0lBQ3hDLENBQUM7SUFFRCxxQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ2pDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxFQUFFLFVBQVU7WUFDakIsT0FBTyxFQUFFLHdEQUF3RDtZQUNqRSxZQUFZLEVBQUUsWUFBWTtZQUMxQixnQkFBZ0IsRUFBRSxjQUFjO1lBQ2hDLGlCQUFpQixFQUFFLFNBQVM7U0FDL0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpCUSxrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7eUNBS2lDLHdCQUFVO1lBQ2hCLFdBQUk7WUFDSCx1QkFBYztPQU4vQixrQkFBa0IsQ0EyQjlCO0lBQUQseUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7QWN0aXZhdGVkUm91dGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge0NhdH0gZnJvbSAnfi9hcHAvbW9kZWxzL0NhdCc7XG5pbXBvcnQge0NhdFNlcnZpY2V9IGZyb20gJ34vYXBwL3NlcnZpY2VzL2NhdC5zZXJ2aWNlJztcbmltcG9ydCB7UGFnZX0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1jYXQtZGV0YWlsJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2F0LWRldGFpbC5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vY2F0LWRldGFpbC5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0RGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNhdDogQ2F0O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIGNhdFNlcnZpY2U6IENhdFNlcnZpY2UsXG4gICAgICAgICAgICAgICAgcHVibGljIHBhZ2U6IFBhZ2UsXG4gICAgICAgICAgICAgICAgcHVibGljIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludCh0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtTWFwLmdldCgnaWQnKSwgMTApO1xuICAgICAgICB0aGlzLmNhdCA9IHRoaXMuY2F0U2VydmljZS5nZXRPbmUoaWQpO1xuICAgIH1cblxuICAgIHNob3dEaWFsb2coKTogdm9pZCB7XG4gICAgICAgIGRpYWxvZ3MuY29uZmlybSh7XG4gICAgICAgICAgICB0aXRsZTogJ01lcmNpICEgJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdQb3VyIG5vdXMgY29udGFjdGVyLCBhcHB1eWV6IGp1c3RlIHN1ciBsZSBib24gYm91dG9uICEnLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiAnQ2VsdWktbMOgICEnLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogJ1BhcyBjZWx1aS1sw6AnLFxuICAgICAgICAgICAgbmV1dHJhbEJ1dHRvblRleHQ6ICdIZXUuLi4uJ1xuICAgICAgICB9KS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRGlhbG9nIHJlc3VsdDogJyArIHJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19