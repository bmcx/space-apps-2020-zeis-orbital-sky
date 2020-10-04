# Based on the esri Satellite Map
https://github.com/richiecarmichael/Esri-Satellite-Map

#### This application makes use of the following libraries

* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) by [Esri](http://www.esri.com/)
  - Esri’s JavaScript library for mapping and analysis.
* [Google Fonts](https://www.google.com/fonts), specifically [Orbitron](https://www.google.com/fonts/specimen/Orbitron) and [Oswald](https://www.google.com/fonts/specimen/Oswald)
  - "A web with web fonts is more beautiful, readable, accessible and open."
* [jQuery](https://jquery.com/) by jQuery Foundataion Inc
  - A JavaScript framework for DOM manipulation and a foundation for many other frameworks.
* [satellite-js](https://github.com/shashwatak/satellite-js) by [Shashwat Kandadai](https://github.com/shashwatak) and UCSC
  - Modular set of functions for SGP4 and SDP4 propagation of TLEs.

#### Satellite Data
Satellite descriptions and [ephemeris](https://en.wikipedia.org/wiki/Ephemeris) are sourced from [Space-Tracker](https://www.space-track.org) a site maintained by the [Joint Functional Component Command for Space](https://www.stratcom.mil/factsheets/7/JFCC_Space/). The [satellite-js](https://github.com/shashwatak/satellite-js) JavaScript library is used to convert the downloaded [TLE](https://en.wikipedia.org/wiki/Two-line_element_set) file into geographic locations.
