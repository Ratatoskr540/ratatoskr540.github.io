(function () {
  var AURORA = [
    { color: '#00e5b0', border: 'rgba(0,229,176,0.3)'   },
    { color: '#00cfff', border: 'rgba(0,207,255,0.3)'   },
    { color: '#38bdf8', border: 'rgba(56,189,248,0.3)'  },
    { color: '#818cf8', border: 'rgba(129,140,248,0.3)' },
    { color: '#a78bfa', border: 'rgba(167,139,250,0.3)' },
    { color: '#34d399', border: 'rgba(52,211,153,0.3)'  },
  ];

  document.querySelectorAll('.post-card-tags, .post-meta').forEach(function (group) {
    group.querySelectorAll('.tag').forEach(function (el, i) {
      var c = AURORA[i % AURORA.length];
      el.style.color       = c.color;
      el.style.borderColor = c.border;
    });
  });
})();
