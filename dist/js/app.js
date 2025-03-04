"use strict";

function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
(function () {
  var smoothLinks = document.querySelectorAll("a[href^='#']");
  var _iterator = _createForOfIteratorHelper(smoothLinks),
    _step;
  try {
    var _loop = function _loop() {
      var smoothLink = _step.value;
      smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        var id = smoothLink.getAttribute("href");
        document.querySelector(id).scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  ;
})();
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcm9sbC5qcyIsIm1haW4uanMiXSwibmFtZXMiOlsic21vb3RoTGlua3MiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsIl9zdGVwIiwiX2xvb3AiLCJzbW9vdGhMaW5rIiwidmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImJsb2NrIiwicyIsIm4iLCJkb25lIiwiZXJyIiwiZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxDQUFDLFlBQVk7RUFDWCxJQUFNQSxXQUFXLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO0VBQUMsSUFBQUMsU0FBQSxHQUFBQywwQkFBQSxDQUN2Q0osV0FBVztJQUFBSyxLQUFBO0VBQUE7SUFBQSxJQUFBQyxLQUFBLFlBQUFBLE1BQUEsRUFBRTtNQUFBLElBQTNCQyxVQUFVLEdBQUFGLEtBQUEsQ0FBQUcsS0FBQTtNQUNqQkQsVUFBVSxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsQ0FBQyxFQUFFO1FBQ2hEQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO1FBQ2xCLElBQU1DLEVBQUUsR0FBR0wsVUFBVSxDQUFDTSxZQUFZLENBQUMsTUFBTSxDQUFDO1FBRTFDWixRQUFRLENBQUNhLGFBQWEsQ0FBQ0YsRUFBRSxDQUFDLENBQUNHLGNBQWMsQ0FBQztVQUN4Q0MsUUFBUSxFQUFFLFFBQVE7VUFDbEJDLEtBQUssRUFBRTtRQUNULENBQUMsQ0FBQztNQUNKLENBQUMsQ0FBQztJQUNKLENBQUM7SUFWRCxLQUFBZCxTQUFBLENBQUFlLENBQUEsTUFBQWIsS0FBQSxHQUFBRixTQUFBLENBQUFnQixDQUFBLElBQUFDLElBQUE7TUFBQWQsS0FBQTtJQUFBO0VBVUMsU0FBQWUsR0FBQTtJQUFBbEIsU0FBQSxDQUFBTyxDQUFBLENBQUFXLEdBQUE7RUFBQTtJQUFBbEIsU0FBQSxDQUFBbUIsQ0FBQTtFQUFBO0VBQUE7QUFDSCxDQUFDLEVBQUUsQ0FBQztBQ2JKIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3Qgc21vb3RoTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYVtocmVmXj0nIyddXCIpO1xyXG4gIGZvciAobGV0IHNtb290aExpbmsgb2Ygc21vb3RoTGlua3MpIHtcclxuICAgIHNtb290aExpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgaWQgPSBzbW9vdGhMaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XHJcblxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKS5zY3JvbGxJbnRvVmlldyh7XHJcbiAgICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCIsXHJcbiAgICAgICAgYmxvY2s6IFwic3RhcnRcIlxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcbn0pKCk7IiwiIl19
