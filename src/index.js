import loadHeader from "./ui/header";
import loadProjectsList from "./ui/projects";
import loadDefaultProject from "./ui/default";
import attachFormListeners from "./ui/forms";

function loadUI() {
    loadHeader();
    loadDefaultProject();
    loadProjectsList();

    attachFormListeners();
}

loadUI();