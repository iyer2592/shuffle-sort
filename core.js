class Builder {
    constructor(targetContainerSelector) {
        this.targetContainer = document.querySelector(targetContainerSelector);
    }

    appendUsingInnerHtml(divAsHtml) {
        this.targetContainer.innerHTML += divAsHtml;
    }
}