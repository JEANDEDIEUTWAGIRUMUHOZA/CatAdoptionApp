"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Race_1 = require("~/app/models/Race");
var RaceService = /** @class */ (function () {
    function RaceService() {
        this.races = [];
        this.idCounter = 0;
        var coon = new Race_1.Race(++this.idCounter, 'Coon');
        var angora = new Race_1.Race(++this.idCounter, 'Angora');
        var european = new Race_1.Race(++this.idCounter, 'Européen');
        var bengal = new Race_1.Race(++this.idCounter, 'Bengal');
        var sphynx = new Race_1.Race(++this.idCounter, 'Sphynx');
        this.races = [coon, angora, european, bengal, sphynx];
    }
    RaceService.prototype.getAll = function () {
        return this.races;
    };
    RaceService.prototype.getOne = function (id) {
        return this.races.filter(function (race) { return race.id === id; })[0];
    };
    RaceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RaceService);
    return RaceService;
}());
exports.RaceService = RaceService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFjZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFjZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUF1QztBQUt2QztJQUtJO1FBSEEsVUFBSyxHQUFnQixFQUFFLENBQUM7UUFDeEIsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUdWLElBQU0sSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoRCxJQUFNLE1BQU0sR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ3hELElBQU0sTUFBTSxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUNwRCxJQUFNLE1BQU0sR0FBRyxJQUFJLFdBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQsNEJBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQXBCUSxXQUFXO1FBSHZCLGlCQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDOztPQUNXLFdBQVcsQ0FxQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7UmFjZX0gZnJvbSAnfi9hcHAvbW9kZWxzL1JhY2UnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWNlU2VydmljZSB7XHJcblxyXG4gICAgcmFjZXM6IEFycmF5PFJhY2U+ID0gW107XHJcbiAgICBpZENvdW50ZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnN0IGNvb24gPSBuZXcgUmFjZSgrK3RoaXMuaWRDb3VudGVyLCAnQ29vbicpO1xyXG4gICAgICAgIGNvbnN0IGFuZ29yYSA9IG5ldyBSYWNlKCsrdGhpcy5pZENvdW50ZXIsICdBbmdvcmEnKTtcclxuICAgICAgICBjb25zdCBldXJvcGVhbiA9IG5ldyBSYWNlKCsrdGhpcy5pZENvdW50ZXIsICdFdXJvcMOpZW4nKTtcclxuICAgICAgICBjb25zdCBiZW5nYWwgPSBuZXcgUmFjZSgrK3RoaXMuaWRDb3VudGVyLCAnQmVuZ2FsJyk7XHJcbiAgICAgICAgY29uc3Qgc3BoeW54ID0gbmV3IFJhY2UoKyt0aGlzLmlkQ291bnRlciwgJ1NwaHlueCcpO1xyXG4gICAgICAgIHRoaXMucmFjZXMgPSBbY29vbiwgYW5nb3JhLCBldXJvcGVhbiwgYmVuZ2FsLCBzcGh5bnhdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbCgpOiBBcnJheTxSYWNlPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmFjZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T25lKGlkOiBudW1iZXIpOiBSYWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yYWNlcy5maWx0ZXIocmFjZSA9PiByYWNlLmlkID09PSBpZClbMF07XHJcbiAgICB9XHJcbn0iXX0=