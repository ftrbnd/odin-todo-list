import loadHeader from "./ui/header";
import loadProjectsList from "./ui/projects";
import loadDefaultProject from "./ui/default";
import attachFormListeners from "./ui/forms";
import { displayCompleted } from "./ui/completed";

function loadUI() {
    loadHeader();
    loadDefaultProject();
    loadProjectsList();
    displayCompleted();

    attachFormListeners();
}

loadUI();