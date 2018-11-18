const main__bar = $(".main__bar");
const contPath = ".main__content";

var dict = [
    {
        id:   1,
        title: "Teehan + Lax",
        buttonText: "“Sed risus feugiat fusce eu sit conubia venenatis aliquet nisl cras eu adipiscing ac cras at sem cras per”",
        paragraph: "../src/icons/tabs/0.jpg"
    },
    {
        id:   2,
        title: "Lex Luthor",
        buttonText: "“hat should be upside down. We know better now, don't we? Devils don't come from hell beneath us. No, they come from the sky.”",
        paragraph: "../src/icons/tabs/1.jpg"
    },
    {
        id:   3,
        title: "Tachikoma",
        buttonText: "“Yeah!Maybe, just maybe, it's a concept that's similar to a zero in mathematics. In analog, that's God. In digital, it's zero.”",
        paragraph: "../src/icons/tabs/2.jpg"
    }
];

for (var i = 0, l = Object.keys(dict).length; i < l; i++) {
    $(contPath+"_"+i).append(
        '<paragraph class="tabs__img tabs__img_content" src="' + dict[i].paragraph + '" >' +
        '<blockquote class="tabs__text tabs__text_sm tabs__text_lg">' + dict[i].buttonText + '</blockquote>' +
        '<h3 class="tabs__text tabs__text_name  tabs__text_sm tabs__text_lg">' + dict[i].title + '</h3>' );
}
tabFunction('1');
function tabFunction(id) {
    id = parseInt(id);
    $(contPath).hide();
    $(contPath+"_"+id).show();
}

main__bar.click((e) => {
    const { target } = e;
      if (!target.dataset.id) {
        e.stopPropagation();
    } else {
        tabFunction(target.dataset.id);
    }
});
