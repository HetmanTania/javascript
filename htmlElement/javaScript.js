

// let htmlElement = {
//     nameTag: undefined,
//     isSelfClosing: undefined,
//     text: undefined,
//     atrebutes: [],
//     styles: [],
//     nestedTags: [],
// }



function HtmlElement(nameTag, isSelfClosing, text) {
    this.nameTag = nameTag;
    this.isSelfClosing = isSelfClosing;
    this.text = text;
    this.atrebutes = [];
    this.styles = [];
    this.nestedTags = [];

    this.print = function () {
        console.log(this.nameTag);
        console.log(this.isSelfClosing);
        console.log(this.text);
        console.log(this.atrebutes);
        console.log(this.styles);
        console.log(this.nestedTags);
    }

    this.addAtrebut = function (nameAtrebut, valueAtrebut) {
        if (nameAtrebut != undefined && valueAtrebut != undefined) {
            if (this.atrebutes == undefined) {
                this.atrebutes = [];
            }

            this.atrebutes.push(`${nameAtrebut}="${valueAtrebut}"`);

        }
    }

    this.addStyle = function (nameStyle, valueStyle) {
        if (nameStyle != undefined && valueStyle != undefined) {
            if (this.styles == undefined) {
                this.styles = [];
            }

            this.styles.push(`${nameStyle}: ${valueStyle};`);
        }
    }

    this.addNestedElementEnd = function (htmlElement) {
        if (htmlElement != undefined && htmlElement != null) {
            if (this.nestedTags == undefined) {
                this.nestedTags = [];
            }
            this.nestedTags.push(htmlElement);
        }
    }

    this.addNestedElementStart = function (htmlElement) {
        if (htmlElement != undefined && htmlElement != null) {
            if (this.nestedTags == undefined) {
                this.nestedTags = [];
            }

            this.nestedTags.unsvift(htmlElement);
        }
    }

    this.getStrinAtrebutesElement = function () {

        let strinAtrebutesElement = "";
        if (this.atrebutes.length != undefined && this.atrebutes.length != 0) {

            for (let index = 0; index < this.atrebutes.length; index++) {
                strinAtrebutesElement += this.atrebutes[index] += " ";
            }
        }
        return strinAtrebutesElement;
    }


    this.getStrinStylseElement = function () {
        let strinStylesElement = "";
        for (let index = 0; index < this.styles.length; index++) {
            strinStylesElement += this.styles[index] += " ";
        }
        return strinStylesElement;
    }

    this.getOpenTeag = function (htmlElement) {

        return `< ${htmlElement.nameTag} ${htmlElement.getStrinAtrebutesElement()} ${htmlElement.getStrinStylseElement()}> \n`;

    }


    this.generitionTextTeag = function () {
        let stringHtml = this.getOpenTeag(this);
        stringHtml += this.nexTead(this);
        stringHtml += `<\\ ${this.nameTag}>`
        return stringHtml;
    }

    this.nexTead = function (htmlElement) {
        let stringHtml = "";

        function addTabStringHtml(length) {
            for (let index2 = 0; index2 < length; index2++) {
                stringHtml += '\t';
            }
        }

        for (let index = 0; index < htmlElement.nestedTags.length; index++) {

            addTabStringHtml(htmlElement.nestedTags.length);

            stringHtml += this.getOpenTeag(htmlElement.nestedTags[index]);
            stringHtml += htmlElement.nestedTags[index].text += "\n";
            stringHtml += this.nexTead(htmlElement.nestedTags[index]);

            if (htmlElement.nestedTags[index].isSelfClosing == true) {
                addTabStringHtml(htmlElement.nestedTags.length);
                stringHtml += `<\\ ${htmlElement.nestedTags[index].nameTag}> \n`
            }

        }
        return stringHtml;
    }



    this.getHtml = function () {
        let stringHtml = this.generitionTextTeag(this);
        console.log(stringHtml + "!!!!");

    }



}

let div1 = new HtmlElement("div", true, "");
div1.addAtrebut("id", "wrapper");
div1.addStyle("display", "flex");



let div2 = new HtmlElement("div", true, "");
div2.addStyle("whidth", "300px");
div2.addStyle("margin", "10px");

let h31 = new HtmlElement("h3", true, "Lorem ipsum dolor sit.");
let img1 = new HtmlElement("img", false, "");

let p = new HtmlElement("p", true, "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur corrupti obcaecati rerum asperiores, doloremque molestiae.");
img1.addStyle("whidth", "300px");
img1.addStyle("src", "lipsum.jpg");
img1.addStyle("alt", "Lorem");

div1.addNestedElementEnd(div2);
div2.addNestedElementEnd(h31);
div2.addNestedElementEnd(img1);
div2.addNestedElementEnd(p);

let div3 = new HtmlElement("div", true, "");
div3.addStyle("whidth", "300px");
div3.addStyle("margin", "10px");

let h32 = new HtmlElement("h3", true, "Lorem ipsum dolor sit.");
let img2 = new HtmlElement("img", false, "");
img2.addStyle("whidth", "300px");
img2.addStyle("src", "lipsum.jpg");
img2.addStyle("alt", "Lorem");
let p2 = new HtmlElement("p", true, "  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur corrupti obcaecati rerum asperiores, doloremque molestiae.");


div1.addNestedElementEnd(div3);
div3.addNestedElementEnd(h32);
div3.addNestedElementEnd(img2);
div3.addNestedElementEnd(p2);
div1.getHtml();

