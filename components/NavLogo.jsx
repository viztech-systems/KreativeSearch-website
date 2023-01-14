import React from "react";

const NavLogo = ({ color, width, height, bgColor }) => {
  return (
    <>
      <svg
        width={width || ""}
        height={height || "50"}
        viewBox="0 0 1532 587"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1532" height="587" fill={color || "black"} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M249 122H319V152.834C306.798 165.026 299 183.642 299 204.5C299 225.358 306.798 243.974 319 256.166V262H249V255.904C260.626 243.523 268 225.088 268 204.5C268 183.912 260.626 165.477 249 153.096V122Z"
          fill="#FF9B41"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M249 309H319V328.096C307.374 340.477 300 358.912 300 379.5C300 400.088 307.374 418.523 319 430.904V449H249V430.904C260.626 418.523 268 400.088 268 379.5C268 358.912 260.626 340.477 249 328.096V309Z"
          fill="#FF9B41"
        />
        <circle cx="284" cy="117" r="50" fill="#FF9B41" />
        <circle cx="284" cy="292" r="50" fill="#FF9B41" />
        <circle cx="284" cy="467" r="50" fill="#FF9B41" />
        <circle cx="484" cy="292" r="50" fill="#FF9B41" />
        <circle cx="84" cy="292" r="50" fill="#FF9B41" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M349 222H419V241.096C407.374 253.477 400 271.912 400 292.5C400 313.088 407.374 331.523 419 343.904V362H349V343.904C360.626 331.523 368 313.088 368 292.5C368 271.912 360.626 253.477 349 241.096V222Z"
          fill="#0071BC"
        />
        <circle cx="384" cy="205" r="50" fill="#0071BC" />
        <circle cx="384" cy="380" r="50" fill="#0071BC" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M149 222H219V241.096C207.374 253.477 200 271.912 200 292.5C200 313.088 207.374 331.523 219 343.904V362H149V343.904C160.626 331.523 168 313.088 168 292.5C168 271.912 160.626 253.477 149 241.096V222Z"
          fill="#0071BC"
        />
        <circle cx="184" cy="205" r="50" fill="#0071BC" />
        <circle cx="184" cy="380" r="50" fill="#0071BC" />
        <path
          d="M614.274 270V117.273H646.565V184.613H648.578L703.539 117.273H742.243L685.567 185.657L742.914 270H704.285L662.449 207.209L646.565 226.598V270H614.274ZM758.463 270V155.455H789.262V175.44H790.455C792.543 168.331 796.048 162.962 800.97 159.332C805.892 155.653 811.559 153.814 817.973 153.814C819.564 153.814 821.279 153.913 823.118 154.112C824.958 154.311 826.574 154.585 827.966 154.933V183.121C826.474 182.674 824.411 182.276 821.776 181.928C819.141 181.58 816.73 181.406 814.542 181.406C809.869 181.406 805.693 182.425 802.014 184.464C798.385 186.452 795.501 189.237 793.363 192.816C791.275 196.396 790.231 200.522 790.231 205.195V270H758.463ZM891.26 272.237C879.477 272.237 869.335 269.851 860.834 265.078C852.382 260.256 845.869 253.445 841.296 244.645C836.722 235.795 834.435 225.33 834.435 213.249C834.435 201.467 836.722 191.126 841.296 182.227C845.869 173.327 852.308 166.392 860.61 161.42C868.963 156.449 878.757 153.963 889.992 153.963C897.549 153.963 904.584 155.181 911.097 157.617C917.659 160.004 923.377 163.608 928.249 168.43C933.171 173.253 936.999 179.318 939.733 186.626C942.468 193.885 943.835 202.386 943.835 212.131V220.856H847.112V201.168H913.931C913.931 196.594 912.936 192.543 910.948 189.013C908.959 185.483 906.2 182.724 902.67 180.735C899.19 178.697 895.138 177.678 890.514 177.678C885.692 177.678 881.416 178.796 877.688 181.033C874.009 183.221 871.125 186.179 869.037 189.908C866.949 193.587 865.88 197.688 865.83 202.212V220.93C865.83 226.598 866.874 231.495 868.963 235.621C871.1 239.748 874.108 242.93 877.986 245.167C881.864 247.404 886.463 248.523 891.782 248.523C895.312 248.523 898.544 248.026 901.477 247.031C904.41 246.037 906.921 244.545 909.009 242.557C911.097 240.568 912.688 238.132 913.781 235.249L943.164 237.188C941.672 244.247 938.615 250.412 933.991 255.682C929.417 260.902 923.501 264.979 916.242 267.912C909.034 270.795 900.706 272.237 891.26 272.237ZM997.23 272.163C989.921 272.163 983.409 270.895 977.691 268.359C971.974 265.774 967.45 261.971 964.119 256.95C960.838 251.879 959.197 245.565 959.197 238.008C959.197 231.644 960.365 226.3 962.702 221.974C965.039 217.649 968.22 214.169 972.247 211.534C976.274 208.899 980.848 206.911 985.969 205.568C991.139 204.226 996.558 203.281 1002.23 202.734C1008.89 202.038 1014.26 201.392 1018.33 200.795C1022.41 200.149 1025.37 199.205 1027.21 197.962C1029.05 196.719 1029.97 194.879 1029.97 192.443V191.996C1029.97 187.273 1028.48 183.619 1025.49 181.033C1022.56 178.448 1018.38 177.156 1012.96 177.156C1007.25 177.156 1002.7 178.423 999.318 180.959C995.937 183.445 993.7 186.577 992.606 190.355L963.224 187.969C964.715 181.009 967.649 174.993 972.024 169.922C976.399 164.801 982.041 160.874 988.952 158.139C995.912 155.355 1003.97 153.963 1013.11 153.963C1019.48 153.963 1025.57 154.709 1031.38 156.2C1037.25 157.692 1042.45 160.004 1046.97 163.136C1051.54 166.268 1055.15 170.295 1057.78 175.217C1060.42 180.089 1061.74 185.93 1061.74 192.741V270H1031.61V254.116H1030.71C1028.87 257.695 1026.41 260.852 1023.33 263.587C1020.25 266.271 1016.54 268.384 1012.22 269.925C1007.89 271.417 1002.9 272.163 997.23 272.163ZM1006.33 250.238C1011 250.238 1015.13 249.318 1018.71 247.479C1022.29 245.589 1025.1 243.054 1027.13 239.872C1029.17 236.69 1030.19 233.086 1030.19 229.059V216.903C1029.2 217.55 1027.83 218.146 1026.09 218.693C1024.4 219.19 1022.49 219.663 1020.35 220.11C1018.21 220.508 1016.07 220.881 1013.93 221.229C1011.8 221.527 1009.86 221.8 1008.12 222.049C1004.39 222.596 1001.13 223.466 998.348 224.659C995.564 225.852 993.401 227.468 991.86 229.506C990.319 231.495 989.548 233.981 989.548 236.964C989.548 241.289 991.115 244.595 994.247 246.882C997.428 249.119 1001.46 250.238 1006.33 250.238ZM1147.31 155.455V179.318H1078.33V155.455H1147.31ZM1093.99 128.011H1125.76V234.801C1125.76 237.734 1126.21 240.021 1127.1 241.662C1127.99 243.253 1129.24 244.371 1130.83 245.018C1132.47 245.664 1134.36 245.987 1136.5 245.987C1137.99 245.987 1139.48 245.863 1140.97 245.614C1142.46 245.316 1143.61 245.092 1144.4 244.943L1149.4 268.583C1147.81 269.08 1145.57 269.652 1142.69 270.298C1139.8 270.994 1136.3 271.417 1132.17 271.566C1124.51 271.864 1117.8 270.845 1112.04 268.509C1106.32 266.172 1101.87 262.543 1098.69 257.621C1095.51 252.699 1093.94 246.484 1093.99 238.977V128.011ZM1168 270V155.455H1199.77V270H1168ZM1183.96 140.689C1179.24 140.689 1175.19 139.123 1171.81 135.991C1168.48 132.809 1166.81 129.006 1166.81 124.581C1166.81 120.206 1168.48 116.452 1171.81 113.32C1175.19 110.138 1179.24 108.548 1183.96 108.548C1188.69 108.548 1192.71 110.138 1196.04 113.32C1199.42 116.452 1201.11 120.206 1201.11 124.581C1201.11 129.006 1199.42 132.809 1196.04 135.991C1192.71 139.123 1188.69 140.689 1183.96 140.689ZM1332.01 155.455L1291.96 270H1256.17L1216.12 155.455H1249.68L1273.47 237.411H1274.66L1298.38 155.455H1332.01ZM1396.78 272.237C1385 272.237 1374.85 269.851 1366.35 265.078C1357.9 260.256 1351.39 253.445 1346.81 244.645C1342.24 235.795 1339.95 225.33 1339.95 213.249C1339.95 201.467 1342.24 191.126 1346.81 182.227C1351.39 173.327 1357.83 166.392 1366.13 161.42C1374.48 156.449 1384.27 153.963 1395.51 153.963C1403.07 153.963 1410.1 155.181 1416.61 157.617C1423.18 160.004 1428.89 163.608 1433.77 168.43C1438.69 173.253 1442.52 179.318 1445.25 186.626C1447.99 193.885 1449.35 202.386 1449.35 212.131V220.856H1352.63V201.168H1419.45C1419.45 196.594 1418.45 192.543 1416.47 189.013C1414.48 185.483 1411.72 182.724 1408.19 180.735C1404.71 178.697 1400.66 177.678 1396.03 177.678C1391.21 177.678 1386.93 178.796 1383.21 181.033C1379.53 183.221 1376.64 186.179 1374.55 189.908C1372.47 193.587 1371.4 197.688 1371.35 202.212V220.93C1371.35 226.598 1372.39 231.495 1374.48 235.621C1376.62 239.748 1379.63 242.93 1383.5 245.167C1387.38 247.404 1391.98 248.523 1397.3 248.523C1400.83 248.523 1404.06 248.026 1406.99 247.031C1409.93 246.037 1412.44 244.545 1414.53 242.557C1416.61 240.568 1418.21 238.132 1419.3 235.249L1448.68 237.188C1447.19 244.247 1444.13 250.412 1439.51 255.682C1434.93 260.902 1429.02 264.979 1421.76 267.912C1414.55 270.795 1406.22 272.237 1396.78 272.237Z"
          fill="#FF9B41"
        />
        <path
          d="M697.126 364.197C696.529 358.181 693.969 353.508 689.445 350.177C684.92 346.846 678.781 345.18 671.025 345.18C665.755 345.18 661.305 345.926 657.676 347.418C654.047 348.859 651.263 350.873 649.324 353.458C647.435 356.043 646.49 358.977 646.49 362.258C646.391 364.992 646.962 367.379 648.205 369.417C649.498 371.455 651.263 373.22 653.5 374.712C655.737 376.153 658.322 377.421 661.256 378.515C664.189 379.559 667.321 380.454 670.652 381.2L684.374 384.481C691.036 385.972 697.151 387.961 702.719 390.447C708.287 392.933 713.109 395.99 717.186 399.619C721.263 403.249 724.42 407.524 726.657 412.446C728.944 417.368 730.112 423.011 730.162 429.374C730.112 438.721 727.726 446.825 723.003 453.685C718.33 460.496 711.568 465.791 702.719 469.57C693.919 473.298 683.305 475.163 670.876 475.163C658.546 475.163 647.808 473.273 638.66 469.495C629.562 465.717 622.452 460.124 617.332 452.716C612.261 445.259 609.601 436.036 609.352 425.049H640.599C640.947 430.17 642.413 434.445 644.999 437.876C647.634 441.256 651.138 443.817 655.513 445.557C659.938 447.247 664.935 448.092 670.503 448.092C675.972 448.092 680.719 447.297 684.746 445.706C688.823 444.115 691.98 441.903 694.217 439.069C696.455 436.235 697.573 432.979 697.573 429.3C697.573 425.869 696.554 422.986 694.516 420.649C692.527 418.312 689.594 416.324 685.716 414.683C681.888 413.043 677.19 411.551 671.621 410.209L654.991 406.033C642.115 402.901 631.948 398.004 624.491 391.342C617.033 384.68 613.33 375.706 613.379 364.42C613.33 355.173 615.79 347.094 620.762 340.184C625.783 333.273 632.669 327.879 641.419 324.001C650.169 320.124 660.112 318.185 671.249 318.185C682.584 318.185 692.477 320.124 700.929 324.001C709.43 327.879 716.043 333.273 720.766 340.184C725.489 347.094 727.925 355.099 728.074 364.197H697.126ZM803.487 475.237C791.704 475.237 781.562 472.851 773.061 468.078C764.609 463.256 758.096 456.445 753.522 447.645C748.948 438.795 746.661 428.33 746.661 416.249C746.661 404.467 748.948 394.126 753.522 385.227C758.096 376.327 764.534 369.392 772.837 364.42C781.189 359.449 790.983 356.963 802.219 356.963C809.776 356.963 816.811 358.181 823.323 360.617C829.886 363.004 835.603 366.608 840.475 371.43C845.397 376.253 849.225 382.318 851.96 389.626C854.694 396.885 856.061 405.386 856.061 415.131V423.856H759.339V404.168H826.157C826.157 399.594 825.163 395.543 823.174 392.013C821.186 388.483 818.426 385.724 814.896 383.735C811.416 381.697 807.365 380.678 802.741 380.678C797.919 380.678 793.643 381.796 789.914 384.033C786.235 386.221 783.352 389.179 781.264 392.908C779.176 396.587 778.107 400.688 778.057 405.212V423.93C778.057 429.598 779.101 434.495 781.189 438.621C783.327 442.748 786.335 445.93 790.213 448.167C794.09 450.404 798.689 451.523 804.009 451.523C807.539 451.523 810.77 451.026 813.703 450.031C816.637 449.037 819.147 447.545 821.235 445.557C823.323 443.568 824.914 441.132 826.008 438.249L855.39 440.188C853.899 447.247 850.841 453.412 846.218 458.682C841.644 463.902 835.727 467.979 828.469 470.912C821.26 473.795 812.933 475.237 803.487 475.237ZM909.456 475.163C902.148 475.163 895.635 473.895 889.918 471.359C884.2 468.774 879.676 464.971 876.345 459.95C873.064 454.879 871.423 448.565 871.423 441.008C871.423 434.644 872.592 429.3 874.928 424.974C877.265 420.649 880.447 417.169 884.474 414.534C888.501 411.899 893.075 409.911 898.195 408.568C903.366 407.226 908.785 406.281 914.453 405.734C921.115 405.038 926.484 404.392 930.561 403.795C934.637 403.149 937.595 402.205 939.435 400.962C941.274 399.719 942.194 397.879 942.194 395.443V394.996C942.194 390.273 940.703 386.619 937.72 384.033C934.786 381.448 930.61 380.156 925.191 380.156C919.474 380.156 914.925 381.423 911.544 383.959C908.164 386.445 905.926 389.577 904.833 393.355L875.45 390.969C876.942 384.009 879.875 377.993 884.25 372.922C888.625 367.801 894.268 363.874 901.178 361.139C908.139 358.355 916.193 356.963 925.34 356.963C931.704 356.963 937.794 357.709 943.611 359.2C949.477 360.692 954.673 363.004 959.197 366.136C963.771 369.268 967.375 373.295 970.01 378.217C972.645 383.089 973.963 388.93 973.963 395.741V473H943.835V457.116H942.94C941.1 460.695 938.639 463.852 935.557 466.587C932.475 469.271 928.771 471.384 924.445 472.925C920.12 474.417 915.124 475.163 909.456 475.163ZM918.554 453.238C923.227 453.238 927.354 452.318 930.933 450.479C934.513 448.589 937.322 446.054 939.36 442.872C941.399 439.69 942.418 436.086 942.418 432.059V419.903C941.423 420.55 940.056 421.146 938.316 421.693C936.626 422.19 934.712 422.663 932.574 423.11C930.436 423.508 928.298 423.881 926.161 424.229C924.023 424.527 922.084 424.8 920.344 425.049C916.615 425.596 913.359 426.466 910.575 427.659C907.791 428.852 905.628 430.468 904.087 432.506C902.546 434.495 901.775 436.981 901.775 439.964C901.775 444.289 903.341 447.595 906.473 449.882C909.655 452.119 913.682 453.238 918.554 453.238ZM998.609 473V358.455H1029.41V378.44H1030.6C1032.69 371.331 1036.19 365.962 1041.12 362.332C1046.04 358.653 1051.71 356.814 1058.12 356.814C1059.71 356.814 1061.43 356.913 1063.26 357.112C1065.1 357.311 1066.72 357.585 1068.11 357.933V386.121C1066.62 385.674 1064.56 385.276 1061.92 384.928C1059.29 384.58 1056.88 384.406 1054.69 384.406C1050.02 384.406 1045.84 385.425 1042.16 387.464C1038.53 389.452 1035.65 392.237 1033.51 395.816C1031.42 399.396 1030.38 403.522 1030.38 408.195V473H998.609ZM1130.96 475.237C1119.23 475.237 1109.13 472.751 1100.68 467.78C1092.28 462.759 1085.82 455.798 1081.29 446.899C1076.82 438 1074.58 427.759 1074.58 416.175C1074.58 404.442 1076.84 394.151 1081.37 385.301C1085.94 376.402 1092.43 369.467 1100.83 364.495C1109.23 359.474 1119.23 356.963 1130.81 356.963C1140.8 356.963 1149.55 358.778 1157.06 362.407C1164.57 366.036 1170.51 371.132 1174.88 377.695C1179.26 384.257 1181.67 391.963 1182.12 400.812H1152.14C1151.29 395.095 1149.06 390.496 1145.43 387.016C1141.85 383.487 1137.15 381.722 1131.33 381.722C1126.41 381.722 1122.11 383.064 1118.43 385.749C1114.8 388.384 1111.97 392.237 1109.93 397.308C1107.89 402.379 1106.87 408.518 1106.87 415.727C1106.87 423.036 1107.87 429.25 1109.85 434.371C1111.89 439.491 1114.75 443.394 1118.43 446.079C1122.11 448.763 1126.41 450.106 1131.33 450.106C1134.96 450.106 1138.22 449.36 1141.1 447.869C1144.03 446.377 1146.45 444.214 1148.33 441.381C1150.27 438.497 1151.54 435.042 1152.14 431.015H1182.12C1181.62 439.765 1179.23 447.471 1174.96 454.133C1170.73 460.745 1164.89 465.915 1157.43 469.644C1149.98 473.373 1141.15 475.237 1130.96 475.237ZM1234.23 406.778V473H1202.46V320.273H1233.33V378.664H1234.67C1237.26 371.903 1241.43 366.608 1247.2 362.78C1252.97 358.902 1260.2 356.963 1268.9 356.963C1276.86 356.963 1283.79 358.703 1289.71 362.183C1295.67 365.614 1300.3 370.56 1303.58 377.023C1306.91 383.437 1308.55 391.118 1308.5 400.067V473H1276.73V405.734C1276.78 398.675 1274.99 393.181 1271.36 389.254C1267.78 385.326 1262.76 383.362 1256.3 383.362C1251.97 383.362 1248.15 384.282 1244.81 386.121C1241.53 387.961 1238.95 390.646 1237.06 394.175C1235.22 397.656 1234.28 401.857 1234.23 406.778Z"
          fill="#0071BC"
        />
      </svg>
    </>
  );
};

export default NavLogo;
