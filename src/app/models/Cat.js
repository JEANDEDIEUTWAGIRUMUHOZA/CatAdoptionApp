"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat = /** @class */ (function () {
    function Cat(id, name, sex, stat, birthday, race, image, description, fiv) {
        this._id = id;
        this._name = name;
        this._sex = sex;
        this._stat = stat;
        this._birthday = birthday;
        this._race = race;
        this._image = image;
        this._description = description;
        this._fiv = fiv;
    }
    Object.defineProperty(Cat.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "stat", {
        get: function () {
            return this._stat;
        },
        set: function (value) {
            this._stat = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "sex", {
        get: function () {
            return this._sex;
        },
        set: function (value) {
            this._sex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "race", {
        get: function () {
            return this._race;
        },
        set: function (value) {
            this._race = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "birthday", {
        get: function () {
            return this._birthday;
        },
        set: function (value) {
            this._birthday = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "image", {
        get: function () {
            return this._image;
        },
        set: function (value) {
            this._image = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cat.prototype, "fiv", {
        get: function () {
            return this._fiv;
        },
        set: function (value) {
            this._fiv = value;
        },
        enumerable: true,
        configurable: true
    });
    return Cat;
}());
exports.Cat = Cat;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2F0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0E7SUFXSSxhQUFZLEVBQVUsRUFBRSxJQUFZLEVBQUUsR0FBb0IsRUFBRSxJQUFVLEVBQUUsUUFBYyxFQUFFLElBQVUsRUFBRSxLQUFhLEVBQUUsV0FBbUIsRUFBRSxHQUFZO1FBQ2hKLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7UUFDaEMsSUFBSSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELHNCQUFJLG1CQUFFO2FBQU47WUFDSSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQU8sS0FBYTtZQUNoQixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHFCQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsS0FBYTtZQUNsQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHFCQUFJO2FBQVI7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVMsS0FBVztZQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLG9CQUFHO2FBQVA7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVEsS0FBc0I7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxxQkFBSTthQUFSO1lBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3RCLENBQUM7YUFFRCxVQUFTLEtBQVc7WUFDaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSx5QkFBUTthQUFaO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7YUFFRCxVQUFhLEtBQVc7WUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSxzQkFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7YUFFRCxVQUFVLEtBQWE7WUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBSSw0QkFBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7YUFFRCxVQUFnQixLQUFhO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksb0JBQUc7YUFBUDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBUSxLQUFjO1lBQ2xCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUpBO0lBS0wsVUFBQztBQUFELENBQUMsQUE5RkQsSUE4RkM7QUE5Rlksa0JBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1N0YXR9IGZyb20gJ34vYXBwL21vZGVscy9TdGF0JztcclxuaW1wb3J0IHtSYWNlfSBmcm9tICd+L2FwcC9tb2RlbHMvUmFjZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2F0IHtcclxuICAgIHByaXZhdGUgX2lkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIF9zZXg6ICdNJyB8ICdGJyB8ICdOJztcclxuICAgIHByaXZhdGUgX3N0YXQ6IFN0YXQ7XHJcbiAgICBwcml2YXRlIF9iaXJ0aGRheTogRGF0ZTtcclxuICAgIHByaXZhdGUgX3JhY2U6IFJhY2U7XHJcbiAgICBwcml2YXRlIF9pbWFnZTogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBfZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIHByaXZhdGUgX2ZpdjogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHNleDogXCJNXCIgfCBcIkZcIiB8IFwiTlwiLCBzdGF0OiBTdGF0LCBiaXJ0aGRheTogRGF0ZSwgcmFjZTogUmFjZSwgaW1hZ2U6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgZml2OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9zZXggPSBzZXg7XHJcbiAgICAgICAgdGhpcy5fc3RhdCA9IHN0YXQ7XHJcbiAgICAgICAgdGhpcy5fYmlydGhkYXkgPSBiaXJ0aGRheTtcclxuICAgICAgICB0aGlzLl9yYWNlID0gcmFjZTtcclxuICAgICAgICB0aGlzLl9pbWFnZSA9IGltYWdlO1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5fZml2ID0gZml2O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgaWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGF0KCk6IFN0YXQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdGF0KHZhbHVlOiBTdGF0KSB7XHJcbiAgICAgICAgdGhpcy5fc3RhdCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzZXgoKTogJ00nIHwgJ0YnIHwgJ04nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2V4O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXgodmFsdWU6ICdNJyB8ICdGJyB8ICdOJykge1xyXG4gICAgICAgIHRoaXMuX3NleCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCByYWNlKCk6IFJhY2Uge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yYWNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCByYWNlKHZhbHVlOiBSYWNlKSB7XHJcbiAgICAgICAgdGhpcy5fcmFjZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBiaXJ0aGRheSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYmlydGhkYXk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGJpcnRoZGF5KHZhbHVlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fYmlydGhkYXkgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaW1hZ2UoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faW1hZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGltYWdlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICB0aGlzLl9pbWFnZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZXNjcmlwdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGVzY3JpcHRpb24odmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuX2Rlc2NyaXB0aW9uID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZpdigpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZml2O1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBmaXYodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl9maXYgPSB2YWx1ZTtcclxuICAgIH1cclxufSJdfQ==