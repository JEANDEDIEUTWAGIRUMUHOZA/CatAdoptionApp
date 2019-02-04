"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Stat_1 = require("~/app/models/Stat");
var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
    }
    StatsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Stat_1.Stat)
    ], StatsComponent.prototype, "stat", void 0);
    StatsComponent = __decorate([
        core_1.Component({
            selector: 'ns-stats',
            templateUrl: './stats.component.html',
            styleUrls: ['./stats.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());
exports.StatsComponent = StatsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RhdHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVEO0FBQ3ZELDBDQUF1QztBQVF2QztJQUlJO0lBQ0EsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBTlE7UUFBUixZQUFLLEVBQUU7a0NBQU8sV0FBSTtnREFBQztJQUZYLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3RCLENBQUM7O09BQ1csY0FBYyxDQVUxQjtJQUFELHFCQUFDO0NBQUEsQUFWRCxJQVVDO0FBVlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1N0YXR9IGZyb20gJ34vYXBwL21vZGVscy9TdGF0JztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICducy1zdGF0cycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3N0YXRzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zdGF0cy5jb21wb25lbnQuY3NzJ10sXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQElucHV0KCkgc3RhdDogU3RhdDtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgIH1cblxufVxuIl19