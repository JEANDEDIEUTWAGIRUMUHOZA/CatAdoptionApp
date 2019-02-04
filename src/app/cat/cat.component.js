"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Cat_1 = require("~/app/models/Cat");
var CatComponent = /** @class */ (function () {
    function CatComponent() {
    }
    CatComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Cat_1.Cat)
    ], CatComponent.prototype, "cat", void 0);
    CatComponent = __decorate([
        core_1.Component({
            selector: 'ns-cat',
            templateUrl: './cat.component.html',
            styleUrls: ['./cat.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], CatComponent);
    return CatComponent;
}());
exports.CatComponent = CatComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBdUQ7QUFDdkQsd0NBQXFDO0FBUXJDO0lBSUk7SUFDQSxDQUFDO0lBRUQsK0JBQVEsR0FBUjtJQUNBLENBQUM7SUFOUTtRQUFSLFlBQUssRUFBRTtrQ0FBTSxTQUFHOzZDQUFDO0lBRlQsWUFBWTtRQU54QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQztZQUNsQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzs7T0FDVyxZQUFZLENBVXhCO0lBQUQsbUJBQUM7Q0FBQSxBQVZELElBVUM7QUFWWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0fSBmcm9tICd+L2FwcC9tb2RlbHMvQ2F0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1jYXQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYXQuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2NhdC5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIEBJbnB1dCgpIGNhdDogQ2F0O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgfVxuXG59XG4iXX0=