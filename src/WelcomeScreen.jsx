import React from 'react';

export default function WelcomeScreen() {
  return (
    <div className="jumbotron">

      <div className="row">

        <div className="col-sm-3 text-right">
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500.000000 579.000000"
            preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,579.000000) scale(0.100000,-0.100000)"
              fill="#00a0d2" stroke="none">
              <path className="gtx-logo-main" d="M2417 5780 c-21 -6 -52 -17 -70 -26 -24 -13 -2014 -1184 -2183 -1285 -43 -26 -108 -98 -136 -151 l-23 -43 -3 -1362 -2 -1362 21 -56 c44 -119 20 -102 1213 -805 598 -353 1109 -652 1135 -663 65 -30 197 -30 262 0 34 15 1874 1096 2205 1294 43 26 108 98 136 151 l23 43 3 1362 c2 1355 2 1362 -18 1417 -61 163 -257 260 -425 211 -41 -12 -278 -145 -765 -432 -774 -455 -786 -463 -829 -578 -28 -75 -28 -184 0 -260 27 -72 104 -156 176 -191 75 -37 185 -44 263 -17 30 10 240 127 466 261 227 133 414 242 418 242 3 0 5 -383 4 -851 l-3 -851 -888 -524 c-488 -288 -892 -524 -897 -524 -5 0 -409 236 -897 524 l-888 524 0 1067 0 1067 888 524 c488 288 892 524 897 524 5 0 184 -103 397 -229 258 -152 408 -235 447 -246 162 -47 339 35 417 193 20 40 24 63 24 147 0 88 -3 107 -26 156 -15 32 -44 74 -66 96 -37 37 -964 593 -1059 635 -52 22 -162 32 -217 18z"></path>
              <path className="gtx-logo-dot" d="M2343 3231 c-222 -82 -310 -351 -181 -553 80 -127 249 -192 398 -154 115 30 199 99 249 206 23 48 26 68 26 155 0 89 -3 106 -28 157 -36 73 -102 139 -174 174 -76 38 -211 45 -290 15z"></path>
            </g>
          </svg>
        </div>

        <div className="col-sm-9">
          <h1>Gentics Mesh Demo Application</h1>
        </div>

      </div>

      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <p>This is a basic demonstration of how to build an application to use Gentics Mesh. This example is an Angular implementation
        and the source is <a href="https://github.com/gentics/mesh-angular-demo">available on GitHub</a>.</p>

          <p><a className="btn btn-primary btn-lg" href="http://getmesh.io/docs/beta/getting-started.html" role="button">Learn more</a></p>
        </div>
      </div>

    </div>
  );
}