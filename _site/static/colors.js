(function() {

var materialColors = [
  


    {
    'name': 'blue',
    'niceName': 'Blue',
    'hues': {
      '50':  '#009fd7',
      '100': '#009fd7',
      '200': '#009fd7',
      '300': '#009fd7',
      '400': '#009fd7',
      '500': '#009fd7',
      '600': '#009fd7',
      '700': '#009fd7',
      '800': '#009fd7',
      '900': '#009fd7',
    },
    'accents': {
      'A100': '#82B1FF',
      'A200': '#448AFF',
      'A400': '#2979FF',
      'A700': '#2962FF'
    }
  },
  {
    'name': 'indigo',
    'niceName': 'Purple',
    'hues': {
      '50':  '#6378E0',
      '100': '#6378E0',
      '200': '#6378E0',
      '300': '#6378E0',
      '400': '#6378E0',
      '500': '#6378E0',
      '600': '#6378E0',
      '700': '#6378E0',
      '800': '#6378E0',
      '900': '#6378E0',
    },
    'accents': {
      'A100': '#82B1FF',
      'A200': '#448AFF',
      'A400': '#2979FF',
      'A700': '#2962FF'
    }
  },
  {
    'name': 'light-blue',
    'niceName': 'Light Blue',
    'hues': {
      '50':  '#19C0FF',
      '100': '#19C0FF',
      '200': '#19C0FF',
      '300': '#19C0FF',
      '400': '#19C0FF',
      '500': '#19C0FF',
      '600': '#19C0FF',
      '700': '#19C0FF',
      '800': '#19C0FF',
      '900': '#19C0FF',
    },
    'accents': {
      'A100': '#80d8ff',
      'A200': '#40c4ff',
      'A400': '#00b0ff',
      'A700': '#0091ea'
    }
  },
 
  {
    'name': 'green',
    'niceName': 'Green',
    'hues': {
      '50':  '#9ac435',
      '100': '#9ac435',
      '200': '#9ac435',
      '300': '#9ac435',
      '400': '#9ac435',
      '500': '#9ac435',
      '600': '#9ac435',
      '700': '#9ac435',
      '800': '#9ac435',
      '900': '#9ac435',
    },
    'accents': {
      'A100': '#B9F6CA',
      'A200': '#69F0AE',
      'A400': '#00E676',
      'A700': '#00C853'
    }
  },
 
  {
    'name': 'light-green',
    'niceName': 'Light Green',
    'hues': {
      '50':  '#00DFB0',
      '100': '#00DFB0',
      '200': '#00DFB0',
      '300': '#00DFB0',
      '400': '#00DFB0',
      '500': '#00DFB0',
      '600': '#00DFB0',
      '700': '#00DFB0',
      '800': '#00DFB0',
      '900': '#00DFB0',
    },
    'accents': {
      'A100': '#ccff90',
      'A200': '#b2ff59',
      'A400': '#76ff03',
      'A700': '#64dd17'
    }
  },
 
    
  {
    'name': 'dark-purple',
    'niceName': 'Dark Purple',
    'hues': {
      '50':  '#4b4e7a',
      '100': '#4b4e7a',
      '200': '#4b4e7a',
      '300': '#4b4e7a',
      '400': '#4b4e7a',
      '500': '#4b4e7a',
      '600': '#4b4e7a',
      '700': '#4b4e7a',
      '800': '#4b4e7a',
      '900': '#4b4e7a'
    }
  }
];

// filter out some offputting colors
materialColors = _.filter(materialColors, function(obj) {
  return ['grey', 'brown', 'deep-orange', 'blue-grey'].indexOf(obj.name) == -1
});

String.prototype.hashCode = function() {
  for(var ret = 0, i = 0, len = this.length; i < len; i++) {
    ret = (31 * ret + this.charCodeAt(i)) << 0;
  }
  return ret;
};

var hashStorage = {};

// hashes the key, and consistently picks a color from colors array
function getMaterialColor(key, hue) {
    !hue && (hue = '600');

    if (key in hashStorage) {
      color_node = hashStorage[key];
    } else {
      color_node = materialColors[Math.abs(key.hashCode()) % materialColors.length];
      hashStorage[key] = color_node;
    }

    return color_node['hues'][hue];
}

window.getMaterialColor = getMaterialColor;

})();
