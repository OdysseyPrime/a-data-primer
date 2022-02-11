import withStyles from "@material-ui/core/styles/withStyles";
import React, {Fragment} from "react";
import Typography from "presentations/Typography";
import Divider from "presentations/Divider";
import CBSApplicationConfig from "assets/images/development/CBSApplicationConfig.png"
import CBSSourceTreeGif from "assets/images/development/CBSsourceTree.gif";
import CBSTools from "assets/images/development/CBStools.png";
import CBSAuth from "assets/images/development/CBSAuth.gif";
import CBSIntelliConfig from "assets/images/development/CBSIntelliConfig.png";

const styles = () => ({
    root: {},
})

class CodeBaseSetup extends React.Component {
    render() {
        const {section} = this.props

        const creatingToken = section.children[0]
        const sourceTree = section.children[1]
        const hadoop = section.children[2]
        const intelliJ = section.children[3]

        return (
            <Fragment>
                <Typography variant={'heading'}>
                    {section.display}
                    <Divider/>
                </Typography>

                <Typography>
                    Requirements:
                    <ul>
                        <li>Access to PRIME Github</li>
                        <li>Sourcetree application</li>
                        <li>BitBucket Cloud account</li>
                        <li>Licensed IntelliJ Ultimate</li>
                    </ul>
                </Typography>

                <Typography variant={'p'}>
                    This guide will show you how to set up PRIME Github code base locally.
                </Typography>

                <Typography variant={'p'}>
                    Two main branches that Data Team maintains are:

                    <ul>
                        <li>ETL: the library that handles data processing.</li>
                        <li>Prime Analytics Library: complex modules that can not be completed in VDH and require
                            more processing power.</li>
                    </ul>
                </Typography>

                <Typography variant={'p'}>
                    We can start right away assuming that we have a Github account.
                </Typography>

                <Typography id={creatingToken.id} variant={'title'}>
                    {creatingToken.display}
                </Typography>

                <Typography variant={'p'}>
                    A personal access token is an alternative to the password you would use when accessing your account
                    on the Git repository hosting service.
                </Typography>

                <Typography variant={'p'}>
                    The official documentation from Github:
                    https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
                </Typography>

                <Typography variant={'p'}>
                    Or follow the below steps:

                    <ol>
                        <li>Open Github</li>
                        <li>Click your profile picture (top right at the moment of writing)</li>
                        <li>Click Settings</li>
                        <li>At the menu on the left, scroll down to bottom to find Developer Settings</li>
                        <li>At the menu on the left, click Personal Access Token</li>
                        <li>Click 'Generate new token' button</li>
                        <li>Write a small note, set the expiration date to 'no expiration'</li>
                        <li>Tick all checkboxes and click 'Generate token'</li>
                        <li>Save your generated token</li>
                    </ol>

                    You can only see your generated token once, if lost, you have to generate a new one.
                </Typography>

                <Typography id={sourceTree.id} variant={'title'}>
                    {sourceTree.display}
                </Typography>

                <Typography variant={'p'}>
                    As a Git GUI, we are going to use Source Tree. Source Tree is an application available for
                    Windows and MAC which offers a visual representation of our repositories.
                    We will need an authentication token in order to log in in Source Tree.
                </Typography>

                <Typography variant={'p'}>
                    You can download Sourcetree from the official website: https://www.sourcetreeapp.com/
                </Typography>

                <Typography variant={'p'}>
                    Once downloaded, open the executable file and follow below steps:

                    <ol>
                        <li>At 'Registration' tab, click 'Bitbucket'.</li>
                        <li>If you have an account, login, otherwise register.</li>
                        <li>At 'Install tools' tab, install 'Git' but not 'Mercurial' (it is not needed).</li>
                        <li>At the same page, open 'Advanced Options' and tick 'Configure automatic line ending handling
                            by default (recommended).</li>
                        <li>At 'Preferences' page, edit them to your preference or leave them as are.</li>
                        <li>Then finish the procedure.</li>
                        <li>When asked for an SHH key, press 'No'.</li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    This procedure looks like the images below:
                </Typography>

                <Typography variant={'p'}>
                    <img src={CBSSourceTreeGif}/>
                </Typography>

                <Typography variant={'p'}>
                    This is all for the installation of Sourcetree. Now, let's set up the user.
                </Typography>

                <Typography variant={'p'}>
                    <ol>
                        <li>Click 'Add User' from main interface or click 'Tools' and 'Options', then 'Authentication'.
                        </li>
                        <img src={CBSTools}/>
                        <li>Click the blue 'Add' label.</li>
                        <li>As 'Hosting Service', select Github.</li>
                        <li>As 'Host URL', leave the default one.</li>
                        <li>As 'Preferred Protocols', select HTTPS.</li>
                        <li>As 'Authentication', select Basic.</li>
                        <li>As 'Username', write your Username that has access to PRIME Github Account.</li>
                        <li>Then, the 'Refresh Password' button is enabled, click the button and as password, paste your
                        Github Authentication Token that we created earlier.</li>
                        <li>The green tick appears saying 'Authentication OK', then click OK button and we are done.</li>
                        <li>From the same tab (Authentication), open your newly created user from Github and press
                        'Select as default'.</li>
                        <li>Now, you are able to Clone repositories and do Git operations.</li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    This procedure looks like the images below:
                </Typography>

                <Typography variant={'p'}>
                    <img src={CBSAuth}/>
                </Typography>

                <Typography variant={'p'}>
                    The user is good to go now!
                </Typography>

                <Typography id={hadoop.id} variant={'title'}>
                    {hadoop.display} (Windows Only)
                </Typography>

                <Typography variant={'p'}>
                    In order to run a Spark job, you need to set up the environment so Spark can detect Hadoop's
                    'winutils.exe' and 'hadoop.dll'. If you skip this step, Spark will run into errors.
                </Typography>

                <Typography variant={'p'}>
                    In order to set up Hadoop files properly, follow below steps:

                    <ol>
                        <li>Visit this Github repository: https://github.com/steveloughran/winutils.</li>
                        <li>Click one of the Hadoop folders (latest recommended).</li>
                        <li>Download 'winutils.exe' and 'hadoop.dll'.</li>
                        <li>Create a directory in your C drive, called 'hadoop' and create a 'bin' folder to put
                        the two download files, the path should look like this: C:/hadoop/bin/, this means that
                        'winutils.exe' is located in 'C:/hadoop/bin/winutils.exe' and so does 'hadoop.dll'</li>
                        <li>Go to 'C:\Windows\System32' and paste 'hadoop.dll' here as well.</li>
                        <li>Finally, open this link: https://www.microsoft.com/en-au/download/details.aspx?id=26999,
                            download then install Microsoft Visual C++ 2010 SP1 in your computer.
                        </li>
                    </ol>

                    You are now ready to go with Hadoop files as well.
                </Typography>

                <Typography id={intelliJ.id} variant={'title'}>
                    {intelliJ.display}
                </Typography>

                <Typography variant={'p'}>
                    IntelliJ IDEA is an Integrated Development Environment (IDE) for JVM languages designed to maximize
                    developer productivity.
                </Typography>

                <Typography variant={'p'}>
                    When you open a project through IntelliJ for the first time, make sure you wait until all indexing
                    is done, and that you download a JDK. At the moment of writing this, we use Java 8 from
                    Amazon Correto.
                </Typography>

                <Typography variant={'p'}>
                    Once that is done:

                    <ol>
                        <li>Click 'Add Configuration' on top bar.</li>
                        <img src={CBSIntelliConfig}/>
                        <li>Click plus symbol that indicates an add.</li>
                        <li>Select application.</li>
                        <li>
                            Name this application as 'Main', specify the run module to Java 8 (which you have downloaded)
                            and select Main class, which is PRIME processor.
                        </li>
                        <li>
                            Finally, specify the application arguments.
                        </li>
                        <li>The result might look something like this:</li>
                    </ol>
                </Typography>

                <Typography variant={'p'}>
                    The result might look something like this:
                </Typography>

                <Typography variant={'p'}>
                    <img src={CBSApplicationConfig}/>
                </Typography>

                <Typography variant={'p'}>
                    You are now ready to code freely!
                </Typography>
            </Fragment>
        )
    }
}

export default withStyles(styles)(CodeBaseSetup)
