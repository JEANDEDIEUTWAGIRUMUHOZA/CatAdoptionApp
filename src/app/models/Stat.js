"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stat = /** @class */ (function () {
    function Stat(id, humanSociability, animalSociability, cleanliness, energy) {
        this._id = id;
        this._humanSociability = humanSociability;
        this._animalSociability = animalSociability;
        this._cleanliness = cleanliness;
        this._energy = energy;
    }
    Object.defineProperty(Stat.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stat.prototype, "humanSociability", {
        get: function () {
            return this._humanSociability;
        },
        set: function (value) {
            this._humanSociability = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stat.prototype, "animalSociability", {
        get: function () {
            return this._animalSociability;
        },
        set: function (value) {
            this._animalSociability = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stat.prototype, "cleanliness", {
        get: function () {
            return this._cleanliness;
        },
        set: function (value) {
            this._cleanliness = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stat.prototype, "energy", {
        get: function () {
            return this._energy;
        },
        set: function (value) {
            this._energy = value;
        },
        enumerable: true,
        configurable: true
    });
    return Stat;
}());
exports.Stat = Stat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlN0YXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQU9JLGNBQVksRUFBVSxFQUFFLGdCQUF3QixFQUFFLGlCQUF5QixFQUFFLFdBQW1CLEVBQUUsTUFBYztRQUM1RyxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxnQkFBZ0IsQ0FBQztRQUMxQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7UUFDNUMsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDMUIsQ0FBQztJQUVELHNCQUFJLG9CQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFnQjthQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFxQixLQUFhO1lBQzlCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDbkMsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxtQ0FBaUI7YUFBckI7WUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUNuQyxDQUFDO2FBRUQsVUFBc0IsS0FBYTtZQUMvQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNkJBQVc7YUFBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBRUQsVUFBZ0IsS0FBYTtZQUN6QixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM5QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHdCQUFNO2FBQVY7WUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzthQUVELFVBQVcsS0FBYTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN6QixDQUFDOzs7T0FKQTtJQUtMLFdBQUM7QUFBRCxDQUFDLEFBdERELElBc0RDO0FBdERZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN0YXQge1xyXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2h1bWFuU29jaWFiaWxpdHk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2FuaW1hbFNvY2lhYmlsaXR5OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9jbGVhbmxpbmVzczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfZW5lcmd5OiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgaHVtYW5Tb2NpYWJpbGl0eTogbnVtYmVyLCBhbmltYWxTb2NpYWJpbGl0eTogbnVtYmVyLCBjbGVhbmxpbmVzczogbnVtYmVyLCBlbmVyZ3k6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5faHVtYW5Tb2NpYWJpbGl0eSA9IGh1bWFuU29jaWFiaWxpdHk7XHJcbiAgICAgICAgdGhpcy5fYW5pbWFsU29jaWFiaWxpdHkgPSBhbmltYWxTb2NpYWJpbGl0eTtcclxuICAgICAgICB0aGlzLl9jbGVhbmxpbmVzcyA9IGNsZWFubGluZXNzO1xyXG4gICAgICAgIHRoaXMuX2VuZXJneSA9IGVuZXJneTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9pZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBodW1hblNvY2lhYmlsaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h1bWFuU29jaWFiaWxpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGh1bWFuU29jaWFiaWxpdHkodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2h1bWFuU29jaWFiaWxpdHkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYW5pbWFsU29jaWFiaWxpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5pbWFsU29jaWFiaWxpdHk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGFuaW1hbFNvY2lhYmlsaXR5KHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hbmltYWxTb2NpYWJpbGl0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjbGVhbmxpbmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jbGVhbmxpbmVzcztcclxuICAgIH1cclxuXHJcbiAgICBzZXQgY2xlYW5saW5lc3ModmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2NsZWFubGluZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGVuZXJneSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbmVyZ3k7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGVuZXJneSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZW5lcmd5ID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iXX0=