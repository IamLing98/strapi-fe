import Header from "@/components/Header";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="vi"
      className="js sizes customelements history pointerevents postmessage webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside flexbox picture srcset webworkers"
    >
      <Head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <title>I Dont Think So</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/static/assets/template/imgs/theme/favicon.png" />
        {/* <!-- NewsBoard CSS  --> */}
        <link rel="stylesheet" href="/static/assets/template/css/style.css" />
        <link rel="stylesheet" href="/static/assets/template/css/widgets.css" />
        <link rel="stylesheet" href="/static/assets/template/css/responsive.css" />
      </Head>
      <body>
        <div class="scroll-progress primary-bg"></div>
        <Main />
        <NextScript />
        <script src="/static/assets/template/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="/static/assets/template/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="/static/assets/template/js/vendor/popper.min.js"></script>
        <script src="/static/assets/template/js/vendor/bootstrap.min.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.slicknav.js"></script>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* <script src="/static/assets/template/js/vendor/wow.min.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.ticker.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.vticker-min.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.scrollUp.min.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.nice-select.min.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.magnific-popup.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.sticky.js"></script>
        <script src="/static/assets/template/js/vendor/perfect-scrollbar.js"></script>
        <script src="/static/assets/template/js/vendor/waypoints.min.js"></script>
        <script src="/static/assets/template/js/vendor/jquery.theia.sticky.js"></script>

        <script src="/static/assets/template/js/main.js"></script> */}
      </body>
    </Html>
  );
}
