/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/// <reference path="../egret.d.ts"/>

class TitleWindowSkin extends egret.Skin {

    public constructor() {
        super();
    }

    private static _skinParts:Array<string> = ["closeButton", "titleDisplay"];

    public get skinParts():Array<string> {
        return TitleWindowSkin._skinParts;
    }

    /**
     * [SkinPart]
     */
    public closeButton:egret.Button;

    public backGround:egret.UIAsset;

    public titleDisplay:egret.Label;

    public createChildren():void {
        super.createChildren();
        this.backGround = new egret.UIAsset();
        this.backGround.percentHeight = 100;
        this.backGround.percentWidth = 100;
        this.backGround.source = "panel-skin-background";
        this.addElement(this.backGround);

        this.titleDisplay = new egret.Label();
        this.titleDisplay.textColor = 0xffffff;
        this.titleDisplay.size = 30;
        this.titleDisplay.maxDisplayedLines = 1;
        this.titleDisplay.left = 5;
        this.titleDisplay.right = 5;
        this.titleDisplay.top = 1;
        this.titleDisplay.minHeight = 28;
        this.titleDisplay.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.titleDisplay.textAlign = egret.HorizontalAlign.CENTER;
        this.addElement(this.titleDisplay);

        this.closeButton = new egret.Button();
        this.closeButton.skinName = TitleWindowCloseButtonSkin;
        this.closeButton.right = 7;
        this.closeButton.top = 7;
        this.addElement(this.closeButton);
    }
}