function AddExtraLine(element) {
    console.log(element);
    for (let i = 0; i < element.length; i++) {
        if (i !== element.length - 1) {
            element[i].insertAdjacentHTML("afterend", " | ");
        }
    }
}

function AddSeparatorAfterAnchorTags() {

    let contactLinks = document.querySelectorAll('.resume .contacts a');
    let skillSetsOne = document.querySelectorAll('.resume .skills-set-one a');
    let skillSetsTwo = document.querySelectorAll('.resume .skills-set-two a');

    AddExtraLine(contactLinks);
    AddExtraLine(skillSetsOne);
    AddExtraLine(skillSetsTwo);
}
