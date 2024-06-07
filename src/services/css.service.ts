export const leaderboardStyle = `{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    h1 {
        font-size: 40px;
        padding: 12px 13px 18px;
        text-align: center;
        display: inline-flex;
        /* width and color */
        color: #FFDE5A;
        text-shadow: -2px -2px 0 black, -2px -1px 0 black, -2px 0px 0 black, -2px 1px 0 black, -2px 2px 0 black, -1px -2px 0 black, -1px -1px 0 black, -1px 0px 0 black, -1px 1px 0 black, -1px 2px 0 black, 0px -2px 0 black, 0px -1px 0 black, 0px 0px 0 black, 0px 1px 0 black, 0px 2px 0 black, 1px -2px 0 black, 1px -1px 0 black, 1px 0px 0 black, 1px 1px 0 black, 1px 2px 0 black, 2px -2px 0 black, 2px -1px 0 black, 2px 0px 0 black, 2px 1px 0 black, 2px 2px 0 black;

        & svg {
            width: 68px;
            height: 68px;
            position: relative;
            top: -6px;
            margin-right: 28px;
            vertical-align: baseline;
        }

        .duplicate::after {
            content: attr(title);
            display: block;
            position: fixed;
            top: 10px;
            left: 107px;
        }

    }

    ol {
        counter-reset: leaderboard;

        li {
            position: relative;
            z-index: 1;
            font-size: 16px;
            color: #FFDE5A;
            text-shadow: -2px -2px 0 black, -2px -1px 0 black, -2px 0px 0 black, -2px 1px 0 black, -2px 2px 0 black, -1px -2px 0 black, -1px -1px 0 black, -1px 0px 0 black, -1px 1px 0 black, -1px 2px 0 black, 0px -2px 0 black, 0px -1px 0 black, 0px 0px 0 black, 0px 1px 0 black, 0px 2px 0 black, 1px -2px 0 black, 1px -1px 0 black, 1px 0px 0 black, 1px 1px 0 black, 1px 2px 0 black, 2px -2px 0 black, 2px -1px 0 black, 2px 0px 0 black, 2px 1px 0 black, 2px 2px 0 black;
            counter-increment: leaderboard;
            padding: 18px 10px 18px 50px;
            backface-visibility: hidden;
            transform: translateZ(0) scale(1.0, 1.0);


            &::before {
                content: counter(leaderboard)".";
                position: absolute;
                z-index: 2;
                top: 15px;
                left: 15px;
                width: 20px;
                height: 20px;
                line-height: 20px;
                border-radius: 20px;
                text-align: center;
            }

            p {
                position: absolute;
                z-index: 2;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                padding: 13px 10px 18px 50px;
                margin: 0;
                background: none;

                &::before,
                &::after {
                    content: '';
                    position: absolute;
                    z-index: 1;
                    bottom: -11px;
                    left: -9px;
                    border-left: 10px solid transparent;
                    transition: all .1s ease-in-out;
                    opacity: 0;
                }

                &::after {
                    left: auto;
                    right: -9px;
                    border-left: none;
                    border-right: 10px solid transparent;
                }
            }

            small {
                position: relative;
                z-index: 2;
                display: block;
                text-align: right;
            }

            &::after {
                content: '';
                position: absolute;
                z-index: 1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
            }

            &:nth-child(1) {
                background: transparent;

                &::after {
                    background: transparent;
                }
            }

            &:nth-child(2) {
                background: transparent;

                &::after {
                    background: transparent;
                }

                & p {

                    &::before,
                    &::after {
                        bottom: -7px;
                    }
                }
            }

            &:nth-child(3) {
                background: transparent;

                &::after {
                    background: transparent;
                }

                & p {

                    &::before,
                    &::after {
                        bottom: -3px;
                    }
                }
            }

            &:nth-child(4) {
                background: transparent;

                &::after {
                    background: transparent;
                }

                & p {

                    &::before,
                    &::after {
                        top: -7px;
                        bottom: auto;
                        border-top: none;
                    }
                }
            }

            &:nth-child(5) {
                background: transparent;

                &::after {
                    background: transparent;

                }

                & p {

                    &::before,
                    &::after {
                        top: -9px;
                        bottom: auto;
                        border-top: none;
                    }
                }
            }
        }


        li:hover {
            z-index: 2;
            overflow: visible;

            &::after {
                opacity: 1;
            }

            & p {

                &::before,
                &::after {
                    opacity: 1;
                    transition: all .35s ease-in-out;
                }
            }
        }

    }

    .dot{
        border-bottom: dotted 3px black;
        width: calc(100% - 50px);
        float: left;
        position: relative;
        display: block;
        height: 14px;
        margin: 0 5px 0 5px;
    }
    
    div:first-child, div:last-child{
        float:left;
    }
}`