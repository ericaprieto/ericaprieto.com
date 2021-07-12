/*
 * I'm really sorry about this code. It's really messy.
 * I brought this over from a portfolio that I made a long time ago,
 * I really like these animations. I promise I'll refactor this someday
 * but I don't wanna spend more time on this, I wan't to put this site
 * up as soon as possible
 */

import styled from "styled-components"
import theme from "../../theme"

const StyleWrapper = styled.div`
  .container-fluid,
  .container {
    margin-right: auto;
    margin-left: auto;
  }

  .container-fluid {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  .row {
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
  }

  .row.reverse {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
  }

  .col.reverse {
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
  }

  .col-xs,
  .col-xs-1,
  .col-xs-2,
  .col-xs-3,
  .col-xs-4,
  .col-xs-5,
  .col-xs-6,
  .col-xs-7,
  .col-xs-8,
  .col-xs-9,
  .col-xs-10,
  .col-xs-11,
  .col-xs-12,
  .col-xs-offset-1,
  .col-xs-offset-2,
  .col-xs-offset-3,
  .col-xs-offset-4,
  .col-xs-offset-5,
  .col-xs-offset-6,
  .col-xs-offset-7,
  .col-xs-offset-8,
  .col-xs-offset-9,
  .col-xs-offset-10,
  .col-xs-offset-11,
  .col-xs-offset-12 {
    box-sizing: border-box;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .col-xs {
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -webkit-flex-basis: 0;
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-xs-1 {
    -webkit-flex-basis: 8.333%;
    -ms-flex-preferred-size: 8.333%;
    flex-basis: 8.333%;
    max-width: 8.333%;
  }

  .col-xs-2 {
    -webkit-flex-basis: 16.667%;
    -ms-flex-preferred-size: 16.667%;
    flex-basis: 16.667%;
    max-width: 16.667%;
  }

  .col-xs-3 {
    -webkit-flex-basis: 25%;
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-xs-4 {
    -webkit-flex-basis: 33.333%;
    -ms-flex-preferred-size: 33.333%;
    flex-basis: 33.333%;
    max-width: 33.333%;
  }

  .col-xs-5 {
    -webkit-flex-basis: 41.667%;
    -ms-flex-preferred-size: 41.667%;
    flex-basis: 41.667%;
    max-width: 41.667%;
  }

  .col-xs-6 {
    -webkit-flex-basis: 50%;
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-xs-7 {
    -webkit-flex-basis: 58.333%;
    -ms-flex-preferred-size: 58.333%;
    flex-basis: 58.333%;
    max-width: 58.333%;
  }

  .col-xs-8 {
    -webkit-flex-basis: 66.667%;
    -ms-flex-preferred-size: 66.667%;
    flex-basis: 66.667%;
    max-width: 66.667%;
  }

  .col-xs-9 {
    -webkit-flex-basis: 75%;
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-xs-10 {
    -webkit-flex-basis: 83.333%;
    -ms-flex-preferred-size: 83.333%;
    flex-basis: 83.333%;
    max-width: 83.333%;
  }

  .col-xs-11 {
    -webkit-flex-basis: 91.667%;
    -ms-flex-preferred-size: 91.667%;
    flex-basis: 91.667%;
    max-width: 91.667%;
  }

  .col-xs-12 {
    -webkit-flex-basis: 100%;
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-xs-offset-1 {
    margin-left: 8.333%;
  }

  .col-xs-offset-2 {
    margin-left: 16.667%;
  }

  .col-xs-offset-3 {
    margin-left: 25%;
  }

  .col-xs-offset-4 {
    margin-left: 33.333%;
  }

  .col-xs-offset-5 {
    margin-left: 41.667%;
  }

  .col-xs-offset-6 {
    margin-left: 50%;
  }

  .col-xs-offset-7 {
    margin-left: 58.333%;
  }

  .col-xs-offset-8 {
    margin-left: 66.667%;
  }

  .col-xs-offset-9 {
    margin-left: 75%;
  }

  .col-xs-offset-10 {
    margin-left: 83.333%;
  }

  .col-xs-offset-11 {
    margin-left: 91.667%;
  }

  .start-xs {
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    text-align: start;
  }

  .center-xs {
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    text-align: center;
  }

  .end-xs {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    text-align: end;
  }

  .top-xs {
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }

  .middle-xs {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .bottom-xs {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  .around-xs {
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  .between-xs {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .first-xs {
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;
  }

  .last-xs {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
  }

  @media only screen and (min-width: 48em) {
    .container {
      width: 49rem;
    }

    .col-sm,
    .col-sm-1,
    .col-sm-2,
    .col-sm-3,
    .col-sm-4,
    .col-sm-5,
    .col-sm-6,
    .col-sm-7,
    .col-sm-8,
    .col-sm-9,
    .col-sm-10,
    .col-sm-11,
    .col-sm-12,
    .col-sm-offset-1,
    .col-sm-offset-2,
    .col-sm-offset-3,
    .col-sm-offset-4,
    .col-sm-offset-5,
    .col-sm-offset-6,
    .col-sm-offset-7,
    .col-sm-offset-8,
    .col-sm-offset-9,
    .col-sm-offset-10,
    .col-sm-offset-11,
    .col-sm-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .col-sm {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-sm-1 {
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }

    .col-sm-2 {
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      flex-basis: 16.667%;
      max-width: 16.667%;
    }

    .col-sm-3 {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-sm-4 {
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }

    .col-sm-5 {
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }

    .col-sm-6 {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-sm-7 {
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }

    .col-sm-8 {
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%;
    }

    .col-sm-9 {
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-sm-10 {
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%;
    }

    .col-sm-11 {
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%;
    }

    .col-sm-12 {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-sm-offset-1 {
      margin-left: 8.333%;
    }

    .col-sm-offset-2 {
      margin-left: 16.667%;
    }

    .col-sm-offset-3 {
      margin-left: 25%;
    }

    .col-sm-offset-4 {
      margin-left: 33.333%;
    }

    .col-sm-offset-5 {
      margin-left: 41.667%;
    }

    .col-sm-offset-6 {
      margin-left: 50%;
    }

    .col-sm-offset-7 {
      margin-left: 58.333%;
    }

    .col-sm-offset-8 {
      margin-left: 66.667%;
    }

    .col-sm-offset-9 {
      margin-left: 75%;
    }

    .col-sm-offset-10 {
      margin-left: 83.333%;
    }

    .col-sm-offset-11 {
      margin-left: 91.667%;
    }

    .start-sm {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-sm {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-sm {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-sm {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-sm {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-sm {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-sm {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-sm {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-sm {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-sm {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @media only screen and (min-width: 64em) {
    .container {
      width: 65rem;
    }

    .col-md,
    .col-md-1,
    .col-md-2,
    .col-md-3,
    .col-md-4,
    .col-md-5,
    .col-md-6,
    .col-md-7,
    .col-md-8,
    .col-md-9,
    .col-md-10,
    .col-md-11,
    .col-md-12,
    .col-md-offset-1,
    .col-md-offset-2,
    .col-md-offset-3,
    .col-md-offset-4,
    .col-md-offset-5,
    .col-md-offset-6,
    .col-md-offset-7,
    .col-md-offset-8,
    .col-md-offset-9,
    .col-md-offset-10,
    .col-md-offset-11,
    .col-md-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .col-md {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-md-1 {
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }

    .col-md-2 {
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      flex-basis: 16.667%;
      max-width: 16.667%;
    }

    .col-md-3 {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-md-4 {
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }

    .col-md-5 {
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }

    .col-md-6 {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-md-7 {
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }

    .col-md-8 {
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%;
    }

    .col-md-9 {
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-md-10 {
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%;
    }

    .col-md-11 {
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%;
    }

    .col-md-12 {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-md-offset-1 {
      margin-left: 8.333%;
    }

    .col-md-offset-2 {
      margin-left: 16.667%;
    }

    .col-md-offset-3 {
      margin-left: 25%;
    }

    .col-md-offset-4 {
      margin-left: 33.333%;
    }

    .col-md-offset-5 {
      margin-left: 41.667%;
    }

    .col-md-offset-6 {
      margin-left: 50%;
    }

    .col-md-offset-7 {
      margin-left: 58.333%;
    }

    .col-md-offset-8 {
      margin-left: 66.667%;
    }

    .col-md-offset-9 {
      margin-left: 75%;
    }

    .col-md-offset-10 {
      margin-left: 83.333%;
    }

    .col-md-offset-11 {
      margin-left: 91.667%;
    }

    .start-md {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-md {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-md {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-md {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-md {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-md {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-md {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-md {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-md {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-md {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  @media only screen and (min-width: 75em) {
    .container {
      width: 76rem;
    }

    .col-lg,
    .col-lg-1,
    .col-lg-2,
    .col-lg-3,
    .col-lg-4,
    .col-lg-5,
    .col-lg-6,
    .col-lg-7,
    .col-lg-8,
    .col-lg-9,
    .col-lg-10,
    .col-lg-11,
    .col-lg-12,
    .col-lg-offset-1,
    .col-lg-offset-2,
    .col-lg-offset-3,
    .col-lg-offset-4,
    .col-lg-offset-5,
    .col-lg-offset-6,
    .col-lg-offset-7,
    .col-lg-offset-8,
    .col-lg-offset-9,
    .col-lg-offset-10,
    .col-lg-offset-11,
    .col-lg-offset-12 {
      box-sizing: border-box;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 auto;
      -ms-flex: 0 0 auto;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }

    .col-lg {
      -webkit-box-flex: 1;
      -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
      -webkit-flex-basis: 0;
      -ms-flex-preferred-size: 0;
      flex-basis: 0;
      max-width: 100%;
    }

    .col-lg-1 {
      -webkit-flex-basis: 8.333%;
      -ms-flex-preferred-size: 8.333%;
      flex-basis: 8.333%;
      max-width: 8.333%;
    }

    .col-lg-2 {
      -webkit-flex-basis: 16.667%;
      -ms-flex-preferred-size: 16.667%;
      flex-basis: 16.667%;
      max-width: 16.667%;
    }

    .col-lg-3 {
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
      max-width: 25%;
    }

    .col-lg-4 {
      -webkit-flex-basis: 33.333%;
      -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
      max-width: 33.333%;
    }

    .col-lg-5 {
      -webkit-flex-basis: 41.667%;
      -ms-flex-preferred-size: 41.667%;
      flex-basis: 41.667%;
      max-width: 41.667%;
    }

    .col-lg-6 {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
      max-width: 50%;
    }

    .col-lg-7 {
      -webkit-flex-basis: 58.333%;
      -ms-flex-preferred-size: 58.333%;
      flex-basis: 58.333%;
      max-width: 58.333%;
    }

    .col-lg-8 {
      -webkit-flex-basis: 66.667%;
      -ms-flex-preferred-size: 66.667%;
      flex-basis: 66.667%;
      max-width: 66.667%;
    }

    .col-lg-9 {
      -webkit-flex-basis: 75%;
      -ms-flex-preferred-size: 75%;
      flex-basis: 75%;
      max-width: 75%;
    }

    .col-lg-10 {
      -webkit-flex-basis: 83.333%;
      -ms-flex-preferred-size: 83.333%;
      flex-basis: 83.333%;
      max-width: 83.333%;
    }

    .col-lg-11 {
      -webkit-flex-basis: 91.667%;
      -ms-flex-preferred-size: 91.667%;
      flex-basis: 91.667%;
      max-width: 91.667%;
    }

    .col-lg-12 {
      -webkit-flex-basis: 100%;
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
      max-width: 100%;
    }

    .col-lg-offset-1 {
      margin-left: 8.333%;
    }

    .col-lg-offset-2 {
      margin-left: 16.667%;
    }

    .col-lg-offset-3 {
      margin-left: 25%;
    }

    .col-lg-offset-4 {
      margin-left: 33.333%;
    }

    .col-lg-offset-5 {
      margin-left: 41.667%;
    }

    .col-lg-offset-6 {
      margin-left: 50%;
    }

    .col-lg-offset-7 {
      margin-left: 58.333%;
    }

    .col-lg-offset-8 {
      margin-left: 66.667%;
    }

    .col-lg-offset-9 {
      margin-left: 75%;
    }

    .col-lg-offset-10 {
      margin-left: 83.333%;
    }

    .col-lg-offset-11 {
      margin-left: 91.667%;
    }

    .start-lg {
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      text-align: start;
    }

    .center-lg {
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      text-align: center;
    }

    .end-lg {
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
      text-align: end;
    }

    .top-lg {
      -webkit-box-align: start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start;
    }

    .middle-lg {
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }

    .bottom-lg {
      -webkit-box-align: end;
      -webkit-align-items: flex-end;
      -ms-flex-align: end;
      align-items: flex-end;
    }

    .around-lg {
      -webkit-justify-content: space-around;
      -ms-flex-pack: distribute;
      justify-content: space-around;
    }

    .between-lg {
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
    }

    .first-lg {
      -webkit-box-ordinal-group: 0;
      -webkit-order: -1;
      -ms-flex-order: -1;
      order: -1;
    }

    .last-lg {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
    }
  }

  .component--case {
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 90px;
    margin-bottom: 90px;

    &:last-child {
      border-bottom: none;
    }

    &:nth-child(even) {
      .col-sm-6:first-child {
        order: 2;
        -webkit-order: 2;
      }
      .col-sm-6:last-child {
        order: 1;
        -webkit-order: 1;
      }
    }

    .col-sm-6 {
      padding: 0 50px;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      -webkit-align-items: center;
    }
  }

  .component--case-title {
    font-family: ${theme.titleFont};
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 30px;
    font-size: 21px;
    text-align: left;
  }

  .component--case-description {
    line-height: 1.8;
    font-size: 13px;
  }

  .component--case-screenshot-list {
    position: relative;
    width: 100%;
  }

  .component--case-screenshot {
    position: absolute;
    background: #f2f2f2 url(/img/frame-bar.png) left top no-repeat;
    border-radius: 4px;
    overflow: hidden;
    padding-top: 24px;
    width: 100%;
    height: 100%;
    border: 1px solid #ddd;

    img,
    video {
      width: 100%;
      height: 100%;
    }
  }

  @media (max-width: 959px) {
    .component--case.row {
      display: block;
      padding-bottom: 40px;
      margin-bottom: 40px;

      .col-sm-6 {
        width: 100%;
        max-width: 500px;
        margin: 0 auto;
        padding: 0;
      }
    }

    .component--case-screenshot-list-large-display {
      display: none;
    }

    .component--case-title {
      font-size: 18px;
      margin-bottom: 20px;
    }

    .component--case-description {
      text-align: justify;
    }

    .component--case-screenshot-list {
      width: 100%;
      max-width: 320px;
      margin: 0 auto 40px;
    }

    .component--case-screenshot {
      z-index: 1;
      opacity: 0;

      transform-origin: 50% 50%;
      transform: scale(0.7) translateX(-25%);
      transition: all 1000ms cubic-bezier(0.1, 0.7, 0.3, 1);

      &[data-cycle="0"] {
        z-index: 2;
        opacity: 0;
      }
      &[data-cycle="1"] {
        z-index: 3;
        opacity: 0.5;
      }
      &[data-cycle="2"] {
        z-index: 4;
        opacity: 1;
      }
      &[data-cycle="3"] {
        z-index: 3;
        opacity: 0.5;
      }
      &[data-cycle="4"] {
        z-index: 2;
        opacity: 0;
      }

      &[data-cycle="0"] {
        transform: scale(0.8) translateX(+100%);
      }
      &[data-cycle="1"] {
        transform: scale(0.8) translateX(+50%);
      }
      &[data-cycle="2"] {
        transform: scale(1) translateX(0%);
      }
      &[data-cycle="3"] {
        transform: scale(0.8) translateX(-50%);
      }
      &[data-cycle="4"] {
        transform: scale(0.8) translateX(-100%);
      }

      &:only-child {
        z-index: 4;
        opacity: 1;
        transform: scale(1) translateX(0%);
      }
    }
  }

  @media (min-width: 960px) {
    .component--case:nth-child(odd) {
      margin-left: -50px;
    }

    .component--case:nth-child(event) {
      margin-right: -50px;
    }

    .component--case-screenshot-list-small-display {
      display: none;
    }

    .component--case .component--case-screenshot {
      & {
        transform-origin: 0 50%;
        transform: scale(0.7) translateX(-25%);
      }

      &[data-cycle="0"] {
        transform: scale(1.2) translateX(6.6%);
      }
      &[data-cycle="1"] {
        transform: scale(1) translateX(0%);
      }
      &[data-cycle="2"] {
        transform: scale(0.8) translateX(-9.4875%);
      }
      &[data-cycle="3"] {
        transform: scale(0.7) translateX(-18.15%);
      }

      &:only-child {
        z-index: 4;
        opacity: 1;
        transform: scale(1) translateX(0%);
      }
    }

    .component--case:nth-child(odd) .component--case-screenshot {
      & {
        transform-origin: 100% 50%;
        transform: scale(0.7) translateX(25%);
      }

      &[data-cycle="0"] {
        transform: scale(1.2) translateX(-6.6%);
      }
      &[data-cycle="1"] {
        transform: scale(1) translateX(0%);
      }
      &[data-cycle="2"] {
        transform: scale(0.8) translateX(9.4875%);
      }
      &[data-cycle="3"] {
        transform: scale(0.7) translateX(18.15%);
      }

      &:only-child {
        z-index: 4;
        opacity: 1;
        transform: scale(1) translateX(0%);
      }
    }

    .component--case-screenshot {
      z-index: 1;
      opacity: 0;

      box-shadow: 0px 18px 12px -11px #ddd;
      transition: all 1000ms cubic-bezier(0.1, 0.7, 0.3, 1);
      &[data-cycle="0"] {
        z-index: 5;
        opacity: 0;
      }
      &[data-cycle="1"] {
        z-index: 4;
        opacity: 1;
      }
      &[data-cycle="2"] {
        z-index: 3;
        opacity: 0.3;
      }
      &[data-cycle="3"] {
        z-index: 2;
        opacity: 0.05;
      }
    }
  }

  @media (min-width: 1023px) {
    .component--case-description {
      font-size: 15px;
    }
  }
`

export default StyleWrapper
