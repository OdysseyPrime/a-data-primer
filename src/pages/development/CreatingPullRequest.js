import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import PullingFromDevelopment from "assets/images/development/pulling_from_development.png"
import MenuButtons from "assets/images/development/menu_buttons.png"
import IntellijChangedBranch from "assets/images/development/intellij_changed_branch.png"
import Comitting from "assets/images/development/commiting.png"
import FoundModuleGithub from "assets/images/development/found_module_github.png"
import PullRequestSection from "assets/images/development/pull_request_section.png"
import ComparingChanges from "assets/images/development/comparing_changes.png"
import PushingWindow from "assets/images/development/pushing_window.png"
import BranchingOut from "assets/images/development/branching_out.png"

const styles = () => ({
    root: {},
})

class CreatingPullRequest extends React.Component {
    render() {
        const {section} = this.props

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography>
                    Let us assume you want to do changes to a specific module or a piece of code somewhere in ETL.
                    Let us also assume that you have set up the code repository and you are ready to implement
                    a new feature or change an existing one!
                </Typography>

                <Typography>
                    Image below shows the buttons that we will use to Commit, Pull, Push or what ever operation we want
                    to achieve which come from Sourcetree.
                </Typography>

                <Typography variant={'p'}>
                    <img src={MenuButtons}/>
                </Typography>

                <Typography>
                    We usually do changes by checking out from development. But first, we have to make sure that
                    development is up-to-date, so conflicts do not arise. We can do that by pulling from remote
                    development repository.
                </Typography>

                <Typography variant={'p'}>
                    <img src={PullingFromDevelopment}/>
                </Typography>

                <Typography>
                    Once we are sure that development is up-to-date, we are ready to branch out and implement our
                    changes. We can do it by clicking 'Branch', then a window like this appears:
                </Typography>

                <Typography variant={'p'}>
                    <img src={BranchingOut}/>
                </Typography>

                <Typography>
                    We want the branch name to be as descriptive as possible, it has to be lower-case with dashes
                    as word separators. For example, changing-select-as-module.
                </Typography>

                <Typography>
                    Once we click Create Branch, then we will automatically move to the new created branch; if you
                    open IntelliJ, you can see that the branch has already changed as below.
                </Typography>

                <Typography variant={'p'}>
                    <img src={IntellijChangedBranch}/>
                </Typography>

                <Typography>
                    After finishing with the changes, we are ready to commit and push to the remote repository.
                </Typography>

                <Typography variant={'p'}>
                    <img src={Comitting}/>
                </Typography>

                <Typography>
                    Once we click Commit, we follow it up with a Push. A small window appears, and we want to select
                    the new created branch, this means that we will create a remote branch with the same name.
                </Typography>

                <Typography variant={'p'}>
                    <img src={PushingWindow}/>
                </Typography>

                <Typography>
                    Finally, we click Push; if it succeeds, we can find the branch in Github now.
                </Typography>

                <Typography variant={'p'}>
                    <img src={FoundModuleGithub}/>
                </Typography>

                <Typography>
                    Now, we are ready to create a pull request to development branch, to do this, we open
                    Pull Requests section in Github.
                </Typography>

                <Typography variant={'p'}>
                    <img src={PullRequestSection}/>
                </Typography>

                <Typography>
                    And we click New Pull Request. As base branch, we want to select 'development' since that's where
                    we branched out from, and as compare, we select our new created branch, which is 'changing-select-as-module'.
                    After the select, if no conflicts arise, we have a view like this:
                </Typography>

                <Typography variant={'p'}>
                    <img src={ComparingChanges}/>
                </Typography>

                <Typography>
                    We click 'Create pull request' and another page appears where we can select the Reviewers, Asignees,
                    Labels, Projects and so on. Once you are ready with the settings, we click Create Pull Request again
                    and that's it, you have successfully created a pull request.
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(CreatingPullRequest)
