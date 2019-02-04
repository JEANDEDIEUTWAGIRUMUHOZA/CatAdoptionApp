"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var cat_service_1 = require("~/app/services/cat.service");
var CatsComponent = /** @class */ (function () {
    function CatsComponent(catService) {
        this.catService = catService;
    }
    CatsComponent.prototype.ngOnInit = function () {
        this.cats = this.catService.getAll();
    };
    CatsComponent = __decorate([
        core_1.Component({
            selector: 'ns-cats',
            templateUrl: './cats.component.html',
            styleUrls: ['./cats.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [cat_service_1.CatService])
    ], CatsComponent);
    return CatsComponent;
}());
exports.CatsComponent = CatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRDtBQUNoRCwwREFBc0Q7QUFTdEQ7SUFJSSx1QkFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUN6QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBVFEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDdEIsQ0FBQzt5Q0FLaUMsd0JBQVU7T0FKaEMsYUFBYSxDQVd6QjtJQUFELG9CQUFDO0NBQUEsQUFYRCxJQVdDO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2F0U2VydmljZX0gZnJvbSAnfi9hcHAvc2VydmljZXMvY2F0LnNlcnZpY2UnO1xuaW1wb3J0IHtDYXR9IGZyb20gJ34vYXBwL21vZGVscy9DYXQnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25zLWNhdHMnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9jYXRzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jYXRzLmNvbXBvbmVudC5jc3MnXSxcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNhdHM6IEFycmF5PENhdD47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY2F0U2VydmljZTogQ2F0U2VydmljZSkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNhdHMgPSB0aGlzLmNhdFNlcnZpY2UuZ2V0QWxsKCk7XG4gICAgfVxuXG59XG4iXX0=