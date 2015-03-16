describe("starter.helper.f unctional", function() {
    beforeEach(function() {
        var moduleName = "starter.helper.f" + "unctional";
        module(moduleName);
    });

    describe("Pluck()", function() {
        var Pluck;

        beforeEach(inject(function(_Pluck_) {
            Pluck = _Pluck_;
        }));

        it("should be a function", function() {
            expect(Pluck).toEqual(jasmine.any(Function));
        });

        it("should accept a label", function() {
            expect(function() {
                Pluck("Foo");
            }).not.toThrow();
        });

        it("should return a function", function() {
            expect(Pluck("Foo")).toEqual(jasmine.any(Function));
        });

        it("should pluck the given label from an object when passed", function() {
            expect(Pluck("Foo")({Foo: "Bar"})).toBe("Bar");
        });
    });

    describe("Concat()", function() {
        var Concat;

        beforeEach(inject(function(_Concat_) {
            Concat = _Concat_;
        }));

        it("should be a function", function() {
            expect(Concat).toEqual(jasmine.any(Function));
        });

        it("should return an array of inputs", function() {
            expect(Concat(1,2)).toEqual([1,2]);
        });

        it("should handle being passed arrays", function() {
            expect(Concat([1,2],[3,4])).toEqual([1,2,3,4]);
        });
    });
});
