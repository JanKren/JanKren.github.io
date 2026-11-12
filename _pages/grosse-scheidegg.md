---
layout: page
title: Over Grosse Scheidegg
description: A gravel-bike loop from Interlaken over the pass under the Wetterhorn · 30 August 2026
permalink: /rides/grosse-scheidegg/
nav: false
map: true
# Paste the 11-character ID from the YouTube link (youtube.com/watch?v=XXXXXXXXXXX).
# While it is empty, the video section is hidden.
youtube_id:
chapters:
  - { t: "0:00", title: "Cold open" }
  - { t: "0:13", title: "Morning: train to the start" }
  - { t: "0:38", title: "Diego goes full power" }
  - { t: "1:45", title: "Through the valley to Meiringen" }
  - { t: "2:57", title: "The climb begins" }
  - { t: "4:54", title: "Alp meadows and the overtake" }
  - { t: "5:47", title: "Diego's scream and the near-fall" }
  - { t: "6:47", title: "Wetterhorn and the top" }
  - { t: "8:18", title: "Diego's story" }
  - { t: "9:26", title: "Descent and the bus" }
  - { t: "10:36", title: 'Down to Grindelwald: "Let''s catch Diego"' }
  - { t: "11:55", title: "Feet in the lake" }
_styles: >
  .ride-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(7.5rem, 1fr)); gap: 0.75rem; margin: 0 0 1.75rem; }
  .ride-stat { border-left: 3px solid var(--global-accent-color); padding: 0.15rem 0 0.15rem 0.75rem; }
  .ride-stat .v { font-size: 1.35rem; font-weight: 600; line-height: 1.2; font-variant-numeric: tabular-nums; }
  .ride-stat .l { font-size: 0.8rem; color: var(--global-text-color-light); text-transform: uppercase; letter-spacing: 0.04em; }
  .ride-video { position: relative; aspect-ratio: 16 / 9; margin-bottom: 1rem; background: #000; }
  .ride-video iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
  .ride-chapters { list-style: none; padding: 0; margin: 0 0 2rem; columns: 2 16rem; column-gap: 2rem; }
  .ride-chapters li { break-inside: avoid; padding: 0.15rem 0; }
  .ride-chapters button { background: none; border: 0; padding: 0; color: var(--global-text-color); text-align: left; cursor: pointer; }
  .ride-chapters button:hover .ts, .ride-chapters button:focus-visible .ts { background: var(--global-accent-color); color: #000; }
  .ride-chapters .ts { display: inline-block; min-width: 3.2rem; font-variant-numeric: tabular-nums; font-weight: 600; margin-right: 0.4rem; padding: 0 0.25rem; border-radius: 2px; }
  #ride-map { height: 460px; border: 1px solid var(--global-divider-color); }
  #ride-profile { position: relative; height: 190px; margin-top: 0.75rem; touch-action: pan-y; }
  #ride-profile svg { display: block; width: 100%; height: 100%; overflow: visible; }
  #ride-readout { min-height: 1.5rem; font-size: 0.9rem; color: var(--global-text-color-light); font-variant-numeric: tabular-nums; }
  .ride-place-label { background: var(--global-bg-color); color: var(--global-text-color); border: 0; box-shadow: 0 1px 3px rgba(0,0,0,.35); font-weight: 600; padding: 1px 6px; }
  .ride-place-label::before { display: none; }
  .ride-actions { margin: 1rem 0 2rem; }
  .ride-actions a { display: inline-block; padding: 0.4rem 0.9rem; background: var(--global-accent-color); color: #000 !important; font-weight: 600; text-decoration: none; margin-right: 0.5rem; }
  @media (max-width: 576px) { #ride-map { height: 340px; } #ride-profile { height: 160px; } }
---

Train to Interlaken, Diego going full gas from the first metre, the long climb from Meiringen under the Wetterhorn, the descent to Grindelwald, and a well-earned soak in Lake Thun at the end.

<div class="ride-stats">
  <div class="ride-stat"><div class="v">90 km</div><div class="l">Distance</div></div>
  <div class="ride-stat"><div class="v">1,636 m</div><div class="l">Climbing</div></div>
  <div class="ride-stat"><div class="v">1,962 m</div><div class="l">High point</div></div>
  <div class="ride-stat"><div class="v">4:24</div><div class="l">Moving time</div></div>
</div>

{% if page.youtube_id and page.youtube_id != "" %}

## The video

<div class="ride-video">
  <iframe id="ride-iframe" src="https://www.youtube-nocookie.com/embed/{{ page.youtube_id }}?rel=0" title="Over Grosse Scheidegg" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>
</div>

<ol class="ride-chapters">
  {% for c in page.chapters %}
    <li><button type="button" data-t="{{ c.t }}"><span class="ts">{{ c.t }}</span>{{ c.title }}</button></li>
  {% endfor %}
</ol>
{% endif %}

## The route

Interlaken → Brienz → Meiringen → Grosse Scheidegg → Grindelwald → Interlaken → Lake Thun. Hover over the elevation profile (or the line on the map) to follow along.

<div id="ride-map" role="img" aria-label="Map of the route from Interlaken over Grosse Scheidegg and back"></div>
<div id="ride-profile" aria-label="Elevation profile"></div>
<div id="ride-readout">&nbsp;</div>

<div class="ride-actions">
  <a href="{{ '/assets/gpx/grosse-scheidegg.gpx' | relative_url }}" download>Download GPX</a>
</div>

<script>
  (function () {
    var DATA_URL = "{{ '/assets/json/grosse-scheidegg.json' | relative_url }}";

    /* ---- video chapters: seek by reloading the embed at the chapter start ---- */
    document.querySelectorAll(".ride-chapters button").forEach(function (b) {
      b.addEventListener("click", function () {
        var f = document.getElementById("ride-iframe");
        if (!f) return;
        var s = b.dataset.t.split(":").reduce(function (a, x) { return a * 60 + Number(x); }, 0);
        f.src = f.src.split("?")[0] + "?rel=0&autoplay=1&start=" + s;
        f.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    });

    function css(name) {
      return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    }
    function fmt(n) { return n.toLocaleString("en-US", { maximumFractionDigits: 0 }); }

    window.addEventListener("load", function () {
      if (typeof L === "undefined") return;
      fetch(DATA_URL).then(function (r) { return r.json(); }).then(init);
    });

    function init(data) {
      var T = data.track; /* [lat, lon, ele, km] */
      var N = T.length, totalKm = T[N - 1][3];
      var latlngs = T.map(function (p) { return [p[0], p[1]]; });

      /* ---------- map ---------- */
      var map = L.map("ride-map", { scrollWheelZoom: false });
      var swiss = L.tileLayer(
        "https://wmts.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg",
        { maxZoom: 18, attribution: '&copy; <a href="https://www.swisstopo.admin.ch/">swisstopo</a>' }
      ).addTo(map);
      var osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      });
      L.control.layers({ "swisstopo": swiss, "OpenStreetMap": osm }, null, { collapsed: true }).addTo(map);
      L.control.scale({ imperial: false }).addTo(map);

      L.polyline(latlngs, { color: "#111", weight: 8, opacity: 0.85 }).addTo(map);
      var line = L.polyline(latlngs, { color: "#f0f500", weight: 4.5, opacity: 1 }).addTo(map);
      var hit = L.polyline(latlngs, { opacity: 0, weight: 22 }).addTo(map);
      map.fitBounds(line.getBounds(), { padding: [20, 20] });

      data.places.forEach(function (p) {
        L.circleMarker([p.lat, p.lon], { radius: 5, color: "#111", weight: 2, fillColor: "#fff", fillOpacity: 1 })
          .bindTooltip(p.name, {
            permanent: true,
            direction: p.name === "Lake Thun" ? "bottom" : "auto",
            offset: p.name === "Lake Thun" ? [0, 6] : [6, 0],
            className: "ride-place-label",
          })
          .addTo(map);
      });

      var cursor = L.circleMarker(latlngs[0], { radius: 7, color: "#111", weight: 3, fillColor: "#f0f500", fillOpacity: 1, interactive: false });

      /* ---------- elevation profile ---------- */
      var box = document.getElementById("ride-profile");
      var readout = document.getElementById("ride-readout");
      var svgNS = "http://www.w3.org/2000/svg";
      var eMin = 400, eMax = 2100;
      var m = { l: 58, r: 10, t: 26, b: 22 };
      var svg, xS, yS, hair, dot, W, H;

      function el(tag, attrs, parent) {
        var e = document.createElementNS(svgNS, tag);
        for (var k in attrs) e.setAttribute(k, attrs[k]);
        if (parent) parent.appendChild(e);
        return e;
      }

      function draw() {
        box.innerHTML = "";
        W = box.clientWidth; H = box.clientHeight;
        var iw = W - m.l - m.r, ih = H - m.t - m.b;
        xS = function (km) { return m.l + (km / totalKm) * iw; };
        yS = function (e) { return m.t + ih - ((e - eMin) / (eMax - eMin)) * ih; };
        var text = css("--global-text-color") || "#000";
        var light = css("--global-text-color-light") || "#666";
        var grid = css("--global-divider-color") || "rgba(0,0,0,.14)";
        var accent = css("--global-accent-color") || "#f0f500";

        svg = el("svg", { viewBox: "0 0 " + W + " " + H }, box);
        [500, 1000, 1500, 2000].forEach(function (e) {
          el("line", { x1: m.l, x2: W - m.r, y1: yS(e), y2: yS(e), stroke: grid }, svg);
          el("text", { x: m.l - 6, y: yS(e) + 4, "text-anchor": "end", "font-size": 11, fill: light }, svg).textContent = fmt(e) + " m";
        });
        var step = W < 600 ? 20 : 10;
        for (var k = 0; k <= totalKm; k += step) {
          el("text", { x: xS(k), y: H - 6, "text-anchor": "middle", "font-size": 11, fill: light }, svg).textContent = k + (k + step > totalKm ? " km" : "");
        }
        var d = "M" + xS(0) + "," + yS(eMin);
        T.forEach(function (p) { d += "L" + xS(p[3]).toFixed(1) + "," + yS(p[2]).toFixed(1); });
        d += "L" + xS(totalKm) + "," + yS(eMin) + "Z";
        el("path", { d: d, fill: accent, "fill-opacity": 0.45, stroke: "none" }, svg);
        el("path", { d: d.replace(/^M[^L]+L/, "M").replace(/L[^L]+Z$/, ""), fill: "none", stroke: text, "stroke-width": 1.4 }, svg);

        /* label the pass first, then skip any label that would collide with one already drawn */
        var drawn = [], gap = W < 600 ? 70 : 40;
        var order = ["Grosse Scheidegg", "Meiringen", "Grindelwald", "Interlaken", "Lake Thun", "Brienz"];
        data.places.slice().sort(function (a, b) { return order.indexOf(a.name) - order.indexOf(b.name); }).forEach(function (p) {
          var x = xS(p.km);
          if (drawn.some(function (d) { return Math.abs(d - x) < gap; })) return;
          drawn.push(x);
          el("line", { x1: x, x2: x, y1: yS(p.ele) - 4, y2: yS(p.ele) - 14, stroke: light }, svg);
          var anchor = p.km < 3 ? "start" : p.km > totalKm - 3 ? "end" : "middle";
          el("text", { x: x, y: yS(p.ele) - 18, "text-anchor": anchor, "font-size": 11, "font-weight": 600, fill: text }, svg).textContent = p.name;
        });

        hair = el("line", { y1: m.t, y2: H - m.b, stroke: text, "stroke-width": 1, visibility: "hidden" }, svg);
        dot = el("circle", { r: 4.5, fill: accent, stroke: "#111", "stroke-width": 2, visibility: "hidden" }, svg);
      }

      function idxForKm(km) {
        var lo = 0, hi = N - 1;
        while (hi - lo > 1) { var mid = (lo + hi) >> 1; if (T[mid][3] < km) lo = mid; else hi = mid; }
        return km - T[lo][3] < T[hi][3] - km ? lo : hi;
      }

      function show(i) {
        var p = T[i];
        hair.setAttribute("x1", xS(p[3])); hair.setAttribute("x2", xS(p[3]));
        dot.setAttribute("cx", xS(p[3])); dot.setAttribute("cy", yS(p[2]));
        hair.setAttribute("visibility", "visible"); dot.setAttribute("visibility", "visible");
        cursor.setLatLng([p[0], p[1]]);
        if (!map.hasLayer(cursor)) cursor.addTo(map);
        readout.textContent = p[3].toFixed(1) + " km · " + fmt(p[2]) + " m";
      }
      function hide() {
        hair.setAttribute("visibility", "hidden"); dot.setAttribute("visibility", "hidden");
        map.removeLayer(cursor);
        readout.innerHTML = "&nbsp;";
      }

      function onProfile(ev) {
        var r = box.getBoundingClientRect();
        var cx = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
        var km = ((cx - m.l) / (W - m.l - m.r)) * totalKm;
        show(idxForKm(Math.max(0, Math.min(totalKm, km))));
      }
      box.addEventListener("mousemove", onProfile);
      box.addEventListener("touchstart", onProfile, { passive: true });
      box.addEventListener("touchmove", onProfile, { passive: true });
      box.addEventListener("mouseleave", hide);

      hit.on("mousemove", function (e) {
        var best = 0, bd = Infinity, ll = e.latlng;
        for (var i = 0; i < N; i++) {
          var dl = T[i][0] - ll.lat, dn = (T[i][1] - ll.lng) * 0.686;
          var dd = dl * dl + dn * dn;
          if (dd < bd) { bd = dd; best = i; }
        }
        show(best);
      });
      hit.on("mouseout", hide);

      draw();
      new ResizeObserver(function () {
        if (box.clientWidth !== W) {
          draw();
          map.invalidateSize();
          map.fitBounds(line.getBounds(), { padding: [20, 20] });
        }
      }).observe(box);
      new MutationObserver(draw).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    }
  })();
</script>
