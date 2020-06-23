---
layout: lokahi
title: Lokahi Guideline
description: Lokahi Web Application guideline
---

version 1.3.0

This document provides guidance for the users and supports all subsequent versions until this document is replaced by a new edition.

---

## GETTING STARTED

1

### Lokahi User Account Sign Up

You can register an account at the user level on the “Sign Up” page of Lokahi by accessing the “Login” page and then click on the “Sign up” link below the \[Login\] button.

#### Creating An Account

1.  Enter text in the “Username” field: Use the alphabet or numbers to type a name for your account but do not use blank spaces and special characters (the only special character allowed is"\_"). The username must include at least 3 characters and less than 128 characters.
2.  Enter text in the “Email” field: Use a valid email to register. This email will be used to verify your account to complete the registration process.
3.  Enter in the “Password” field: Your password must be at least 8 characters and can use the alphabet, numbers, special characters, and blank spaces.
4.  Enter in the “Confirm Password” field: Type exactly the same string typed in “Password” field to verify that password will be used to log in.
5.  Check the checkbox "I accept and confirm that I have read and agree to the End-User License Agreement (EULA) of Lokahi".
6.  After entering enough information into the 4 required fields and checking the checkbox “I accept”, the \[Create new Account\] button will be enabled for you to click on to register your account.
7.  Upon clicking \[Create new Account\] check your email inbox and you will see an email has been sent from Lokahi. Open that email and click on the link to complete the registration. The link will open the “Login” page on Lokahi and a green pop-up will appear that says "The account has been verified!", allowing you to use your account.

Note: The email verification link will be valid until you click on the link. You can resend by logging in again, and using the resend button.  If you re-register with the same email, you will have to wait 30 minutes.

#### Logging Into An Account

You can log into an account on the “Login” page of Lokahi by using your username or your verified email address along with the password chosen during registration.

Procedure

1.  Enter in the “Username” field: type your username or the email address used to register and verify your account in Lokahi.
2.  Enter the “Password” field: type the password for your account.
3.  After entering enough information into these two fields, the \[Login\] button will be enabled for you to click and login to your account. After logging in, it will load the Dashboard page.

Note: If you used an account that was registered but has not been verified via your email address, you will see a ‘Login Failed’ caution dialog box stating "Your account has not been verified. Please check your email to verify, thank you.! Don't see the email? RESEND EMAIL" If you have a different issue, you can also see [Change An Account’s Password](#change-an-account’s-password) for additional assistance.

## BUILDING BLOCKCHAIN SOLUTIONS

2

### Creating Projects

On the Lokahi dashboard, you can start a new project by clicking on the circular [\[+\] BUTTON](#create-new-project-on-the-dashboard) in the upper right hand side of the screen.

#### Procedure for Creating a New Project (Dashboard)

After clicking on the circular + button on the dashboard, a “New Project” popup screen appears over the Dashboard page, where you can enter a name and choose a template source if required.

Procedure

1.  Click on the \[New Project\] icon button on the Dashboard.
2.  Enter in the “Name” field of the "New Project" screen.
3.  Click the \[Choose Source\] button, which takes you to the next step to choose the source you want to use as a starting point for the project. There are 3 ways to create a new project with 3 corresponding tabs appearing on the next screen of “New Project” screen:

\+  On the “Seed” tab, you can create from the source templates.

\+ On the “Duplicate” tab, you can create from the projects that have been created in your account.

\+ On the “Import” tab, you can create from the projects that have been created in your account and another account that were downloaded. For more information about how to download a project, see at the [Download Project](#download-icon).

4.  After completing these 2 steps, the \[Create\] button is enabled for you to click to create your project.  
    For more detailed information, see [Create New](#create-new-project-on-the-dashboard) [Project On The Dashboard](#create-new-project-on-the-dashboard).

Note: After creating a new project, a “Create New Component or Contract” screen appears that allows you to create a first layer for that project.

### Creating Contract

Following the [Creating Projects](#creating-projects) process, if you are viewing the “Create New Component or Contract” screen, you can skip to step 2 below.  Starting with step 1 below guides you through the process of creating a new layer from the dashboard.

For more detailed information about the layer’s types, see [Layer Levels & User Permissions](#layer-levels-&-user-permissions).

![](/assets/images/lokahi/image31.png)

Figure 1

#### Creating A New Contract Layer (Dashboard)

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Contract” screen will pop up and you will see "Contract” as an option.  Underneath click on \[Create New Contract\] which will take you to the "Create New Contract" screen. Enter in \[Name\] field of the "Create New Contract" screen.
3.  After entering a name for the Contract layer, the \[Create New Contract\] button will be enabled for you to click on to create your contract.
4.  After creating the Contract, you will be directed back to the dashboard and will see a green message that says ‘Create Successfully!’.  You can then navigate to the project on the dashboard or [search for the Contract](#search-on-dashboard-page), and open the Contract to begin work on the workboard.  
    For more detailed information, see [Create New Contract on the Dashboard](#create-new-contract-on-the-dashboard), and for how to set up a basic configuration see [Add Business Logic to a Contract Layer](<#add-business-logic-to-a-contract-layer-(workboard)>).

Note: You can use the same name for multiple layers of this project. Also, if a project has more than 6 layers on the Dashboard, you can scroll to the right to the 6th project and click “Show more” or click on the project name to view all of the layers on the [Project Full Screen Page](#project-full-screen-page). In addition, you have the option to [Create a New Contract on the Workboard](#create-new-contract-layer-on-the-workboard) if preferred.

#### Add Business Logic to A Contract Layer (Workboard)

Once you have created a new Contract layer, you are now able to design a process on the workboard to  build the Contract using the pre-configured Element blocks from the ‘Add Component Menu’ in the sidebar. Contract is what gets created in the Contract layer.

![](/assets/images/lokahi/image7.png)

Figure 2

Procedure

1.  After creating a Contract, access the Contract’s workboard to define the process.
2.  To make a connection between two Element blocks, drag and drop one Element block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Element block onto the workboard nearby.
3.  To connect the two blocks, hover over the first Element block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  The next step is to configure the connection on the arrow between 2 Elements at Element/Contract’s workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
5.  Next, drag an input/output shape in column 1 to the desired output/input shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
6.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
7.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable you to click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

8.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no blocks are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks are unconnected, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.
9.  If the \[Deploy\] button is not enabled, you can click on the \[Recommendation\] button at the bottom of the page and a “Recommendation” sidebar appears with the warnings box to announce which arrow(s) you need to define or some block need to connect.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

10. If all arrows are defined without warnings at “Recommendation” sidebar, you are now potentially ready to move to [Deploying to the Blockchain](#deploying-to-the-blockchain). Now you finish creating a Contract which is what gets created in the Contract layer.
11. You can add data for the Contract at the “Add Data” sidebar.

For more information about the “Add Data” feature, see [Add Data Sidebar](#add-data-sidebar).

Note: In the bottom left hand corner of the screen, there is a \[Settings\] button that allows you to rename the Contract you are working on if desired.

### Creating Elements

If you have just finished completing the [Creating Projects](#creating-projects) process and are viewing the “Create New Component or Contract” screen, you can skip to step 2 below.  Starting with step 1 guides you through the process of creating a new system Element from the dashboard.  See Creating

#### Creating A New Element Layer (Dashboard)

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Element” as an option.  Underneath click on \[Create New Element\] which will take you to the "Create New Element" screen. Enter in \[Name\] field, select or create a category and choose an icon.
3.  Once the name, category and icon are completed, the \[Create New Element\] button will be enabled for you to click to create the Element.
4.  After creating the Element, you will be directed back to the dashboard and will see a green message that says ‘Create Successfully’. You can then navigate to the project on the dashboard or [search for the Element](#search-on-dashboard-page) and open the Element to begin work on the workboard.

Note: You can use the same name among multiple Elements in the same project. For more detailed information see [Create New Element on the Dashboard](#create-new-element-on-the-dashboard).

#### Configuring An Element (Workboard)

After you have [created a new Element](<#creating-a-new-element-layer-(dashboard)>), you are now able to configure the Element on the workboard. Element is what gets created in the Element layer.![](/assets/images/lokahi/image82.png)

Figure 3

Procedure

1.  After creating an Element layer, access the Element’s workboard to define the process.
2.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
3.  To connect the two blocks, hover over the first Logit block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
5.  The next step is to configure the connection on the arrow between 2 Logits at Element workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.

![](/assets/images/lokahi/image61.png)

Figure 4

6.  Next, drag an input/output shape in column 1 to the desired output/input shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
7.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
8.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable you to click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

9.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no blocks are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks are unconnected, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

10. In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#edit-layer-in-the-add-component-sidebar-on-the-workboard)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
11. Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type depending on the parameters set in the “Register” blocks and “Operation” blocks of the Logit block that was configured as an input and an output port. You can choose how many options you want by ticking on a checkbox in front of each option. After chosen, that Logit block will provide the input or output or both to become the input and output ports of the Element you are configuring.
12. Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again.
13. At the top of the window, click on the “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
14. Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the system Element available at the Contract for use at the Contract level.
15. Now, you finish creating Elements which is what gets created in the Element layer.

Tip:  When you are on the Contract, you can quickly move down to the workplace of any Element by double clicking on any block icon on the workboard.

Tip: You can group Elements by clicking and dragging to highlight any group of Element blocks to create a new Element.  Once you release the selection, the group of Elements will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen. You can configure inputs/outputs, name, category and choose an icon for the new Element and then click the \[Create\] button to finish the creation of a new Element process.

### Creating Logit

If you have just finished completing the [Creating Projects](#creating-projects) process and are viewing the “Create New Component or Contract” screen, you can skip to step 2 below.  Starting with step 1 guides you through the process of creating a new Logit from the dashboard.  See Creating

#### Creating a New Logit Layer (Dashboard)

You can create a new Logit layer from the workboard of any Contract or Element by navigating to the ‘Dropdown Menu” at the top of the screen as an engineer or admin.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Logit” as an option.  Underneath click on \[Create New Logit\] button which will take you to the "Create New Logit" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter \[Name\] field of “Create New Logit" screen.  You can use the alphabet, numbers, blank spaces, and special characters to type a name for your layer.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, and some special characters (like “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing the steps above, the \[Create New Logit\] button will be enabled for you to click on to create the Logit.
7.  Once created, the Logit will be visible on every Element and every Contract of the project that it was created in.

#### Configuring A Logit On The Workboard

After you have [created a new Logit](#creating-a-new-logit-layer-on-the-workboard), you are now able to configure the Logit on the workboard. Logits is what gets created in the Logit layer.

Procedure

1.  After creating a Logit, access the Logit’s workboard to define the process.
2.  To make a connection between two blocks, “drag and drop” one “Register” or “Operation” block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd block onto the workboard nearby.
3.  To connect the two blocks, hover over the first block and ‘click and drag’ on one of the 4 squares that appear and drag the arrow to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#edit-layer-on-the-workboard)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
5.  Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type or both. You can choose one option. After chosen, that Logit block will have the input or output or both.
6.  Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button, and the "Required Hashtags" input. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again. You can add a required [hashtag](#manage-hashtags) for a port to let that port will require you to connect with other Logit blocks on the Element layer.
7.  At the top of the window, click on the “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
8.  Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the Logit available at the Element layer.
9.  Next, you can edit and configure your model.
10. With the “Register” blocks, you can choose the types that are defined at “[Define Type](#define-type)” screen by clicking on the “Register” block then choose the “Edit Markings” option once clicked “Add Markings” icon. Then choose what “Register” block is allowed to [add data](#add-data-sidebar) at Element or Contract. For more details about the process to choose type and configure for a “Register” block,  go here [Edit Markings](#edit-markings).
11. Click on the arrow connect from “Register” block to “Operation” block then click “Add Variable”![](/assets/images/lokahi/image14.png) icon, the “Variable” screen appears to let you choose the variables of the message of the “Register” block. For more details about the process to choose variable, go here [Variable](#variable).
12. With the “Operation” blocks, you can set the condition for transition of the variables of the message in the “Register” block by clicking on “Operation” block then choose “Edit Guard” option once clicked “Add Guard” ![](/assets/images/lokahi/image22.png) icon. For more detail about the process to set the condition for transition, go here [Edit Guard](#edit-guard).
13. Click on the arrow connect from “Operation” block to “Register” block then click “Add Expression”![](/assets/images/lokahi/image20.png) icon, the “Edit Expression” screen appears to let you regulate the output of the “Operation” block, by creating a new message and depending on the condition of the output, the type of message can then be created. For more detail about the process to regulate the output of the “Operation” block, go here [Edit Expression](#edit-expression).
14. Now, you finish creating Logits which is what gets created in the Logit layer.

Tip:  You can move between layers by double clicking on any block icon on the workboard.

Tip: You can group a part of Logit by clicking and dragging to highlight any group of Logit’s blocks to create a new Logit.  Once you release the selection, the group of Logit’s blocks will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen. You can configure inputs/outputs, name, category and choose an icon for the new Logit and then click the \[Create\] button to finish the creation of a new Logit process.

## FORMALLY VERIFYING AGREEMENTS

3

### Recommendation Feature & Flow Graph

#### Checking for Correctness

The process of formally verifying is a step to check the correctness of the statements in a flow graph that has been created on the workboard, and the [Recommendation](#recommendation-feature) feature can help guide you through the process. The statement is the state that has been set for a state shape of the flow graph to satisfy a condition for the action of the messages that are moving inside the flow graph.  For more information and definition of the Element(s) inside the flow graph, see [Flow Graph](#flow-graph-overview).

In this section, we are going to describe specifically the steps to set up a flow graph and you can use the Recommendation feature as a guide.

Procedure

1.  After you have created and configured the Logit/Elements, open the workboard of the Element/Contract.
2.  The “Recommendation” button in the bottom toolbar displays the number of recommendations to create a complete flow graph. Click on the \[Recommendation\] button at the bottom toolbar to open the “Recommendation” sidebar. For more information about the “Recommendation” feature, see [Recommendation](#recommendation-feature), including how to use the “Show” and the “Fix it” functions.
3.  The “Recommendation” feature will require you to create a model of blocks in the workboard. The first time, you are required to “Drag at least one Logit/Element block onto the workboard”. The Logit created at the logit between “Register” block(s) and “Operation” block(s) could have hashtags and the Recommendation feature would inform you to define a relationship between blocks with hashtag requirements. For more information about the Hashtag, the way to define a hashtag and how to add a hashtag, see [Define Hashtag](#manage-hashtags) and [Manage Tag](#manage-hashtags).

![](/assets/images/lokahi/image30.png)  
Figure 5

4.  Once defined and you’ve resolved the recommendations, you can click the \[Flow Graph\] button in the bottom toolbar to open the “Flow Graph” screen. If that block in the workboard contains a model of “Register” and “Operation” blocks confirmed as valid, the “Flow Graph” screen will display a connection model of the shapes. For more definition about the State Shape(s), see [Flow](#flow-graph-overview) [Graph](#flow-graph-overview).

![](/assets/images/lokahi/image17.png)

Figure 6

1.  If the block has a “Required Hashtag” as described in the “[Configure Port](#configure-port)” section, the “Recommendation” sidebar will then require you to use the blocks that are related to the hashtag(s) in the “Required hashtags” input and you should use all Components that have a relationship with “{those required hashtags}” at the input or output port.
2.  You can use the Recommendation sidebar to reveal a list of blocks that the required hashtag appears within and you can use the “Show” button to assist. Once you drag a block onto the workboard the requirement message changes to “Make a connection between the block(s) requiring the hashtag and the block containing the required hashtag”. Click the “Fix it” button and it will connect automatically.
3.  After you go through the process of [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>) to create an arrow then the "Flow graph" screen will display a flow graph and allow us to set the statements.

Note: If the arrow connecting the blocks does not have a defined connection, a “Flow Graph” cannot be created properly.

4.  Once connected, the Recommendation message changes to “Set the parameters for connection between the block requiring the hashtag and the block containing the required hashtag”. To define a connection, see [Define A Connection](<#define-a-connection-(make-your-connection)>).

5.  When you click on the \[Flow Graph\] button in the bottom toolbar, you can select a group of State shape(s) or one State shape and choose the option of a “Statements” menu which include “Eventually Active” for one or “Eventually All Active”, ”Eventually At Least One Active”, or “Exclusive” for multiple selections as detailed in the [“Flow Graph”](#flow-graph-overview) section.
6.  Once you have selected the States and set the options for that group, the statements appear in the "Statements" sidebar and are arranged with the newest at the bottom of the Statements list. Then the \[Save\] button is enabled.
7.  Once you click the \[Save\] button, it sends the statements in to the Lokahi formal verification process to check the rightness of the State of that Flow Graph and updates the New list of Statements in the "Statements" sidebar (the older list of statements will be deleted) and at the same time it will send the “Statement” list and save the setting(s) of the entire State shape of that flow graph. Then the \[Save\] button is disabled.
8.  If the result once the Lokahi performed the Formal verification process is wrong, a message pops up with "Update your model to make State ... and State ... are eventually active/exclusive" in the "Recommendation" sidebar to let you know that you have to fix the model to allow the path of messages to go to the State you set in the Flow Graph.
9.  Once you have completed the Flow graph and all of the items in the [Recommendation feature](#recommendation-feature), you are potentially ready to [deploy](#deploy-a-contract-from-the-workboard) from the Contract.

Note: We can add more hashtags for a State shape in the “Flow Graph” screen to create a relationship for that block to use it on the Contract. For more information about how to Manage Tags in the “Flow Graph” screen, see [Flow Graph](#flow-graph-overview) (number 8).

## DEPLOYING TO THE BLOCKCHAIN

4

### Deploy Contract to Blockchain

Now that you have [Created a Project](#creating-projects), [Created a Contract](#creating-contract) and [added the Business](<#add-business-logic-to-a-contract-layer-(workboard)>) [Logit](<#add-business-logic-to-a-contract-layer-(workboard)>) to the Contract you are ready to deploy. If once used an Element is invalid on the workboard of the Contract, then click the \[Deploy\] button, an error message under the \[Deploy\] button warning that "Deployed failed! Your model has not been completed. Please finish all the tasks on the recommendation list to deploy" to let you know you have to choose another Element block or have to finish all tasks on “Recommendation” sidebar.

![](/assets/images/lokahi/image13.png)

Figure 7

#### Deploy Contract Layer (Workboard)

Procedure

1.  Access the Contract layer’s workboard.
2.  Click the “Deploy” icon in the upper right hand toolbar. A “Deployment” form expands down.
3.  Choose the blockchain you want to deploy on.
4.  If you choose “Ethereum” you need to include an address account and the private key so you can deploy the Contract agreement:

5.  Enter in the “Account Address” field of "Deploy" screen.
6.  Enter in the “Private Key” field of the "Deploy" screen.

7.  If you choose another blockchain {Fabric; Ropsten; Stand Alone; Concord; others}, you can choose to set a name and version for that Contract, but those are optional fields.
8.  Click the \[Deploy\] button. After clicking the \[Deploy\] button, the contract address is displayed that has been returned from the blockchain. You can click the “Show more transaction” or \[Transaction\] button at the toolbar to observe the contract’s status during or after the process.

For more information, go to [Deploy a Contract](#deploy-a-contract-from-the-workboard).

For more information about the “Show more transactions” window, go to [View Deployment History of an Contract](#view-deployment-history-of-a-contract-from-the-workboard).

## DASHBOARD NAVIGATION OVERVIEW

5

### Menus & Buttons on the Dashboard

![](/assets/images/lokahi/image97.png)

Figure 8

#### (1) Dashboard (+)

\-Easily create a [New Project](#create-new-project-on-the-dashboard) on the dashboard by clicking the circular (+) button.

![](/assets/images/lokahi/image27.png)

Figure 9

#### (2) Project Menu

![](/assets/images/lokahi/image36.png)

Figure 10

Hover over any individual project on the Dashboard to reveal the “Project Menu” for that project.  
 -[Create A New Layer](#creating-layers-on-the-dashboard) \-[Duplicate Project](#duplicate-a-project-on-the-dashboard)  
\-[Rename Project](#rename-a-project-on-the-dashboard)  
 -[Delete Project](#delete-a-project-on-the-dashboard)

#### (3) Search & Filter Projects

![](/assets/images/lokahi/image28.png)

Figure 11

![](/assets/images/lokahi/image83.png)

Figure 12

[Search For Project Or Layer](#search-on-dashboard-page) on Dashboard       Navigate Projects through Page Breaks On Dashboard -[Filter Projects](#filter-on-project-full-screen-page) by multiple categories -> Source  
        -> Type  
        -> Data  
        -> State

#### (4) Layers Menu On Dashboard (Contract)

![](/assets/images/lokahi/image84.png)  
Figure 13

Manipulate layer within a project easily from dashboard view

-[See Contract Addresses](#view-deployment-history-of-a-contract-on-the-dashboard): Allows You To View History (Only available for contracts that have been deployed)

-[Duplicate Layer](#duplicate-a-contract-on-the-dashboard)

-[Rename Layer](#rename-a-contract-on-the-dashboard)  
\-[Delete Layer](#delete-a-contract-on-the-dashboard)

#### (5) Elements Menu On Dashboard (Elements)

![](/assets/images/lokahi/image105.png)  
Figure 15

Manipulate Elements within a layer easily from the dashboard view

\-[Duplicate Layer](#duplicate-a-contract-on-the-dashboard)

\-[Rename Layer](#rename-a-contract-on-the-dashboard)  
\-[Delete Layer](#delete-a-contract-on-the-dashboard)

#### (6) Adjust Themes

![](/assets/images/lokahi/image102.png)

Figure 16

Easily adjust the colour scheme of the Lokahi platform to suit your environment or preferences.

#### (7) User Profile & Settings

![](/assets/images/lokahi/image57.png)

Figure 17  
Configure your account and settings.

## DASHBOARD TASKS AND MANIPULATIONS

6

### Creating Projects

#### Create New Project On The Dashboard

On the Lokahi dashboard, you can create a new project by clicking on the \[New Project +\] button in the upper right hand side of the screen.

![](/assets/images/lokahi/image27.png)  
Figure 18

A “New Project” screen appears, where you can enter a name then you choose a source for the project:

![](/assets/images/lokahi/image88.png)  
Figure 19

Procedure

1.  Click on the \[New Project\] icon button on the Dashboard.
2.  Enter the \[Name\] field of "New Project" screen.  You can use the alphabet or numbers to type a name for your project name but don't use a blank space or special characters except underscore "\_".  
    \[Restrictions:  If you type a special character in the “Name” field, a red message announces that "Project name is invalid!" to warn you. If you type a project name that already exists, a red message announces an error message "Name has existed!”. If you type more than characters limitation, a red message announces "Your project name is too over characters limitation!" and the \[Create\] button will disable refusing permission to create a new project.\]
3.  Next, click the \[Choose Source\] button, which takes you to the next step to choose the source you want to use as a starting point for the project. There are 3 ways to create a new project with 3 corresponding tabs appearing on the next screen of “New Project” screen:

\+ On the “Seed” tab, you can create from the source templates.

\+ On the “Duplicate” tab, you can create from the projects that have been created in your account.

\+ On the “Import” tab, you can create from the projects that have been created in your account and another account that was downloaded.

4.  After completing these 2 steps, the \[Create\] button is enabled for you to click to create your project.

Note: Immediately after creating a new project, the “Create New Component or Contract” screen is displayed to let you create a first agreement for that project.

#### Duplicate A Project On The Dashboard

You can duplicate an existing project by hovering over the project on the dashboard and then opening “Project menu” to choose the “Duplicate” option. A "Duplicate Project" dialog box appears and allows you to name the newly duplicated project.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options. Click on the "Duplicate" option.
2.  A "Duplicate Project" dialog box appears. Enter in \[Name\] field.  You can use the alphabet or numbers to type a name for your project name but don't use a blank space or special characters except underscore "\_".  
    \[Restrictions:  If you type a special character in the “Name” field, a red message announces that "Project name is invalid!" to warn you. If you type a project name that already exists, a red message announces an error message "Name has existed!”. If you type more than characters limitation, a red message announces "Your project name is too over characters limitation!" and the \[Create\] button will disable refusing permission to create a new project.\]
3.  After entering a valid name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate.

Note: The duplicated project will include all layers and store all manipulations and Elements in the original project but will not include the deployment history and the contract addresses. The duplicated project is dated as a new project and displayed at the top in dashboard as the most recent and any Contract or Element within the project are given the current date as well.

#### Rename A Project On The Dashboard

You can rename an existing project by hovering over the project on the dashboard and then opening “Project menu” to choose the “Rename” option. A "Rename Project" dialog box appears and allows you to rename the project.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options. Click on the "Rename" option.
2.  A “Rename” dialog box appears. Enter in \[Name\] field.  You can use the alphabet or numbers to type a name for your project name but don't use a blank space or special characters except underscore “\_”.  
    \[Restrictions:  If you type a special character in the “Name” field, a red message announces that “Project name is invalid!” to warn you. If you type a project name that already exists, a red message announces an error message “Name has existed!”. If you type more than characters limitation, a red message announces “Your project name is too over characters limitation!” and the \[Create\] button will disable refusing permission to create a new project.\]
3.  After entering a valid name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the project.

#### Delete A Project On The Dashboard

You can delete an existing project by opening “Project menu” and choosing the “Delete” option.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options. Click on the "Delete" option.
2.  A dialog box asks “Are you sure you want to delete project {project’s name} ?” with 2 options, “Yes” and “No”.  Click “Yes”.
3.  After deleting the project, a green pop-up displays a message that says “Delete Project Successfully!”.

Additional: You cannot reverse the project deletion, so consider carefully before deleting.

### Creating Layers On The Dashboard

Creating layers on the dashboard can be done easily by navigating to a specific project and accessing the ["Project Menu"](<#(2)-project-menu>) project menu dropdown and selecting a new layer.

#### Create New Contract Layer On The Dashboard

After you have [created a project](#create-new-project-on-the-dashboard) on the dashboard the “Create New Component or Contract” screen is displayed and you can skip to step 2 below if you are at that point.  Starting with step 1 guides you through the process of creating a new Contract layer from any project on the dashboard.

![](/assets/images/lokahi/image94.png)

Figure 20

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Contract” screen will pop up and you will see "Contract” as an option.  Underneath click on \[Create New Contract\] which will take you to the "Create New Contract" screen. Enter in the “Name” field of the "Create New Contract" screen.
3.  After entering a name for the Contract layer the \[Create\] button will be enabled for you to click on to create your Contract.
4.  After creating the Contract, you will be directed back to the dashboard and will see a green message that says ‘Create Successfully’. You can then navigate to the project on the dashboard or [search for the layer](#h.p6sgdzbu80rp), and open the Contract to begin work on the workboard.  
    For more information, see [Create New Contract on the Dashboard](#h.zsie3z4q7nk).

Note: You can use the same name for multiple layers of this project. Also, if a project has more than 6 layers on the Dashboard, you can scroll to the right to the 6th project and click “Show more” or the project name to view all of the layers on one full screen and create a new layer from that window. For more information see the [Project Full Screen Page](#project-full-screen-page).

#### Create New Element Layer On The Dashboard

After you have [created a project](#create-new-project-on-the-dashboard) on the dashboard the “Create New Component or Contract” screen is displayed and you can skip to step 2 below if you are at that point.  Starting with step 1 guides you through the process of creating a new component from any project on the dashboard.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Elements” as an option.  Underneath click on \[Create New Element\] which will take you to the "Create New Element" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter in the “Name” field of the "Create New Element" screen.  You can use the alphabet, number, blank space, and special characters to type a name for your Element.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the Element. You can use the alphabet, numbers, blank spaces, and some special characters (like: “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing to enter the name, the \[Create\] button will be enabled for you to click on to create the Element.
7.  Once created, the Element will be visible on every Element and every Contract of the project that it was created in.

Additional: You can use the same name for multiple Elements within the project.

#### Creating New Logit Layer On The Dashboard

After you have [created a project](#create-new-project-on-the-dashboard) on the dashboard the “Create New Component or Contract” screen is displayed and you can skip to step 2 below if you are at that point.  Starting with step 1 guides you through the process of creating a new component from any project on the dashboard.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Logit” as an option.  Underneath click on \[Create New Logit\] button which will take you to the "Create New Logit" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter \[Name\] field of “Create New Logit" screen.  You can use the alphabet, numbers, blank spaces, and special characters to type a name for your layer.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, and some special characters (like “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing the steps above, the \[Create New Logit\] button will be enabled for you to click on to create the Logit.
7.  Once created, the Logit will be visible on every Element and every Contract of the project that it was created in.

### Manipulating Layers On the Dashboard

#### Duplicate A Contract Layer On The Dashboard

You can duplicate an existing Contract layer by navigating to a project on the dashboard and then hovering over the specific layer you would like to duplicate and accessing the “Three Dots Menu” and choosing the “Duplicate” option.

Procedure

1.  Choose one Contract layer of a project, hover on top of that Contract's frame to reveal the “Three Dots Menu”  in the upper right hand corner of the Contract frame. Click on the “Three Dots Menu” button to show all options. Click on the "Duplicate" option.
2.  A "Duplicate" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Contract layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate the Contract layer.

Note: The duplicated Contract layer will store all manipulations and components in the original Contract layer but will not include the deployment history and the contract addresses. The duplicated Contract layer is dated as a new Contract layer and displayed as the top slide in the project as the most recent with the current date.

#### Duplicate An Element Layer On The Dashboard

You can duplicate an existing Element layer by navigating to a project on the dashboard and then hovering over the specific Element layer you would like to duplicate and accessing the “Three Dots Menu” and choosing the “Duplicate” option.

Procedure

1.  Choose one Element layer of a project, hover on top of that Element's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Element frame. Click on the “Three Dots Menu” button to show all options. Click on "Duplicate" option
2.  A "Duplicate" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Element layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate the Element layer.

Note: The duplicated Element layer will store all manipulations and Elements in the original Element. The duplicated Element layer is dated as a new Element layer and displayed as the top slide in the project as the most recent with the current date.

#### Duplicate An Logit Layer On The Dashboard

You can duplicate an existing Logit layer by navigating to a project on the dashboard and then hovering over the specific Logit you would like to duplicate and accessing the “Three Dots Menu” and choosing the “Duplicate” option.

Procedure

4.  Choose one Logit layer of a project, hover on top of that Logit's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Logit frame. Click on the “Three Dots Menu” button to show all options. Click on "Duplicate" option
5.  A "Duplicate" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Logit layer.
6.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate the Logit layer.

Note: The duplicated Logit layer will store all manipulations and Logits in the original Logit. The duplicated Logit layer is dated as a new Logit layer and displayed as the top slide in the project as the most recent with the current date.

#### Rename A Contract Layer On the Dashboard

You can rename an existing Contract by navigating to a project on the dashboard and then hovering over the specific Contract you would like to rename and accessing the “Three Dots Menu” and choosing the “Rename” option.

Procedure

1.  Choose one Contract layer of a project, hover on top of that Contract's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Contract frame. Click on the “Three Dots Menu” button to show all options. Click on the "Rename" option.
2.  A "Rename" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Contract layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the Contract layer.

#### Rename An Element Layer On The Dashboard

You can rename an existing Element layer by navigating to a project on the dashboard and then hovering over the specific Element you would like to rename and accessing the “Three Dots Menu” and choosing the “Rename” option.

Procedure

1.  Choose one Element layer of a project, hover on top of that Element's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Element frame. Click on the “Three Dots Menu” button to show all options. Click on the "Rename" option
2.  A "Rename" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Element layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the Element layer.

#### Rename An Logit Layer On The Dashboard

You can rename an existing Logit layer by navigating to a project on the dashboard and then hovering over the specific Logit you would like to rename and accessing the “Three Dots Menu” and choosing the “Rename” option.

Procedure

1.  Choose one Logit layer of a project, hover on top of that Logit's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Logit frame. Click on the “Three Dots Menu” button to show all options. Click on the "Rename" option.
2.  A "Rename" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Logit layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the Logit layer.

#### Delete A Contract Layer On The Dashboard

You can delete an existing Contract layer by navigating to a project on the dashboard and then hovering over the specific Contract layer you would like to delete and accessing the “Three Dots Menu” and choosing the “Delete” option.

Procedure

1.  Choose one Contract layer of a project, hover on top of that Contract's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Contract frame. Click on the “Three Dots Menu” button to show all options. Click on the "Delete" option.
2.  A dialog box asks "Are you sure you want to delete contract {Contract’s name}?” with 2 options, “Yes” and “No”.  Click “Yes”.
3.  After deleting the Contract layer, a green pop-up displays a message "Delete Successfully!”.

Note: You cannot reverse the agreement deletion, so consider carefully before deleting.

#### Delete An Element Layer On The Dashboard

You can delete an existing Element layer by navigating to a project on the dashboard and then hovering over the specific Element layer you would like to delete and accessing the “Three Dots Menu” and choosing the “Delete” option.

Procedure

1.  Choose one Element layer of a project, hover on top of that Element's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Element frame. Click on the “Three Dots Menu” button to show all options. Click on the "Delete" option.
2.  A dialog box asks "Are you sure you want to delete element {Element’s name}?” with 2 options, “Yes” and “No”.  Click Yes.
3.  After deleting the Element layer, a green pop up displays a message "Delete Successfully!”.

Note: You cannot reverse the Element deletion, so consider carefully before deleting.

Delete An Logit Layer On The Dashboard

You can delete an existing Logit layer by navigating to a project on the dashboard and then hovering over the specific Logit layer you would like to delete and accessing the “Three Dots Menu” and choosing the “Delete” option.

Procedure

1.  Choose one Logit layer of a project, hover on top of that Logit's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Logit frame. Click on the “Three Dots Menu” button to show all options. Click on the "Delete" option.
2.  A dialog box asks "Are you sure you want to delete logit {Logits name}?” with 2 options, “Yes” and “No”.  Click Yes.
3.  After deleting the Logit layer, a green pop up displays a message "Delete Successfully!”.

Note: You cannot reverse the Logit deletion, so consider carefully before deleting.

#### View Deployment History Of A Contract On The Dashboard

You can check the deployment history of a Contract that has deployed on the dashboard.

![](/assets/images/lokahi/image45.png)  
Figure 21: The rocket icon indicates a Contract agreement has a deployment history

Procedure

1.  Choose a Contract that has a rocket icon, then hover on top of that Contract's frame to reveal the "Three Dots Menu" and click on it to show all options. Click on "See Contract Addresses" option.

2.  A screen pops up with the title "Transactions". The default filter is set to ALL in the "Filter by:" section that includes 4 options {All; Success; Pending; Failed}.

![](/assets/images/lokahi/image77.png)  
Figure 22

3.  The view in the middle of the screen has 6 columns {Name; Version; Address/TxHash; Blockchain; Age; Status} with the following descriptions:  
    \+ Name: the name of contract in the Deployment process. If a name was not input during the deployment, the name will automatically default to the name of the Contract.  
    \+ Version: The newest version of the contract. If a version was not provided during deployment, it will automatically default to "0".  
    \+ Address/TxHash: The Hash address or contract address from the blockchain server.  
    \+ Blockchain: It displays which blockchains were chosen during Deployment.  
    \+ Age: The time counts from the time when the web has received the contract address to the current time.  
    \+ Status: Displays the current status of that contract. The 3 status options are {Pending; Success; Failed}.

1.  "Pending" when the TxHash was received but is still waiting for the contract address.
1.  "Failed" when the blockchain server can't send back the contract address.
1.  "Success" when the blockchain server sent back the contract address.

1.  Once clicked on the \[Clear All\] button, a confirmation dialog box has the "Clear All" title appears and shows the content "Are you sure you want to clear all contracts?". Once clicked the \[Yes\] button, the Transactions screen clears all the contracts have been deployed and the Rocket icon of that Contract is changed from "Deployed" state to "Not yet deployed" state.

\[Note: The default view displays 5 contract addresses in a page, with the new contract address in the first position in the first page. You can use the page break at the bottom of the screen to see additional deployments beyond the original 5.\]

### Navigating Projects & Layers On The Dashboard

#### Filter Projects & Layers On Dashboard

You can filter the projects or layers by using the filter group on the Dashboard. The filter can be based on the template source of the project, the layer type {Logit; Element; Contract}, the status of Contract {Deployed; Not Deployed}, the created date of the project, the order by time and by alphabetical order of the project or layer’s name.

For more information about the layer’s types, see [Layer Levels & User Permissions](#layer-levels-&-user-permissions).

![](/assets/images/lokahi/image29.png)

Figure 23

Procedure

1.  Click on \[Filter\] button. A “Filter” form displays 5 options: SOURCE, LAYER’S TYPE, PROJECT/LAYER’S CREATION DATE, SORT BY, SHOW BLANK PROJECT
2.  After clicking on the "Source" combobox, the template source options are displayed to let you choose which source you’d like to include after you click \[Search\] in the “Filter” form.
3.  The “Layer’s Type” switch is always on “ON” status at the first time and it automatically includes all 4 boxes {Logit; Element; Deployed Contract; Not Deployed Contract} as already ticked. Once you select the desired layers and click the \[Search\] button, any project that doesn’t have any layers belonging to the layer type is ticked will disappear on the Dashboard page in the search results. If you change the “Layer’s Type” switch to “OFF”, all 4 options will disappear and the result always has 4 layer type, since only Contract layers can be deployed and therefore have a status. If you don’t tick any boxes in the “Layer’s Type” part, then the result has only a blank project or doesn’t have any project.
4.  Tick the "Show Blank Project" checkbox, the result is the project doesn’t have any layers, so if the "Show Blank Project" checkbox is unchecked, the blank project will disappear from the Dashboard page.
5.  When the Filter form initially pops up, the "Project’s Creation Date" section is switched to "OFF" status. When you change to "ON" status 2 inputs appear {From; To} with date ranges. The default is set "From" as "Jan 1, 1970" and "To" date is the current date, so all projects will display on the Dashboard page by default. You can set the period of time in which projects were created to display. The projects that were not created during the range will disappear during the search results.  You can change the “Project’s Creation Date” switch back to the default of OFF to remove the date filter.
6.  The "Sort by" section, includes a "Sort by" combobox with 4 options to choose from {Ascending time; Descending time; A-> Z; Z->A}, allowing you to sort by time or alphabetical order. The default option is "Descending", so all projects are filtered by the descending time that they were created by default.
7.  If you click the \[Clear\] button at the bottom of the “Filter” form, it will clear all the filtered results and return you to the dashboard screen.
8.  Once you have made all of your selections from the previous steps, when you click on the \[Search\] button in the “Filter” form, it will filter the projects according to your chosen selections.

#### Search On Dashboard Page

You can search for project(s) or layer(s) by typing into the “Search” input frame at the top of the Dashboard page.

![](/assets/images/lokahi/image3.png)

Figure 24

Procedure

1.  Click into the “Search” input frame and enter text in the “Search” input frame.
2.  After entering, the result could show:

\+ Case 1 “The search results only with project(s)”  The search terms will be highlighted within the resulting project(s) name and display only those projects with a green rectangle highlighting the resulting terms within the project title, but will not display any of the layers within that project on the dynamic search results.  The layers within the resulting project(s) can be displayed and accessed by clicking on the project itself from the search results.

\+ Case 2 “The search results only with layer(s)”  The search terms will be highlighted within the resulting layer name(s) and display only those layers with a green rectangle highlighting the resulting terms within the actual layer title.  These layers will be displayed in the frame below the title of the project, so the project is visible even if it does not include the search terms because the layers contained within the project do contain the search terms.

\+ Case 3 “The search results with projects and layers”  The search terms will be highlighted within the resulting project(s) name along with the resulting layer name(s) and display all projects and layers with a green rectangle highlighting the resulting terms within the project or layer titles.

Note: When the search doesn't return a result, the dashboard page won't display any projects or layers.

#### Page Break On Dashboard Page

The dashboard default view shows a limited number of projects per page, but you are able to change the number of rows displayed with the dropdown menu, or scroll right and left through the pages of projects.

![](/assets/images/lokahi/image55.png)

Figure 25

Procedure

1.  The page break group on the top right has 4 Elements which include the number of projects per page setting \[5, 10 or 20 rows per page\], "Current Page \[current projects\] of \[total projects\]", the \[Previous page\] arrow and the \[Next page\] arrow.
2.  The \[Previous page\] arrow and the \[Next page\] arrow are disabled when the number of projects is equal to less than the number of rows per page selected on the dropdown.
3.  When there are pages available to scroll through the \[Next\] arrow is active, but once you reach the last page available the \[Next\] arrow is inactive and only the \[Previous page\] arrow is enabled.
4.  When you are on the first page the \[Previous\] arrow is inactive, but the \[Previous\] button is active once you click through to any page after the first page.

#### Project Full Screen Page

With the projects that have more than 6 layers on the Dashboard, you can scroll to the right to the 6th project and a frame will display the number of additional layers available.  Hover over the frame and click on “Show more” or click on project name and the project will expand to a full screen view of all the layers in that one project. The Project Full Screen page has a very similar layout and navigation to the dashboard functions.  Scroll to the right to reveal the last frame with the number of additional layers.

![](/assets/images/lokahi/image4.png)  
Figure 26: Click ‘Show More’ to navigate to the Project Full Screen Page

Procedure

1.  On the Dashboard, choose a project that has more than 6 layers.
2.  Scroll to the end. You will see a frame that displays the number of the additional layers.
3.  Hover over that frame and click on the \[Show more\] button or click on the project name. It will access the “Project Full Screen Page” to see all agreements of that one project.

#### Filter On Project Full Screen Page

You can filter layers by using the filter group on the Project Full Screen Page. The filter can be based on the layer type {Logit; Element; Contract}, the status of Contract {Deployed; Not Deployed}, the created date of the layer, the order by time and by alphabetical order of the layer’s name.

![](/assets/images/lokahi/image51.png)  
Figure 27: Project Full Screen displays all layers in one project and Filter frame

For more information about the layer’s types, see [Layer Levels & User Permissions](#layer-levels-&-user-permissions).

Procedure

1.  Click on the \[Filter\] button. A “Filter” form displays 3 options: LAYER’S TYPE, LAYER’S CREATION DATE, SORT BY
2.  The “Layer’s Type” section automatically includes all 4 boxes {Logit; Element; Deployed Contract; Not Deployed Contract} as already ticked. Once you select the desired layers and click the \[Search\] button, any layer that doesn’t belong to the layer type that is ticked will disappear on the Dashboard page in the search results. If you don’t tick any boxes in the “Layer’s Type” part, all layers will appear once you click the \[Search\] button on “Filter” form.
3.  When the Filter form initially pops up, the "Layer’s Creation Date" section is switched to "OFF" status. When you change to "ON" status 2 inputs appear {From; To} with date ranges. The default is set "From" as "Jan 1, 1970" and "To" date is the current date, so all layers will display on the Dashboard page by default. You can set the period of time in which layers were created to display. The layers that were not created during the range will disappear during the search results.  You can change the “Layer’s Creation Date” switch back to the default of OFF to remove the date filter.
4.  The "Sort by" section, includes a "Sort by" combobox with 4 options to choose from {Ascending time; Descending time; A-> Z; Z->A}, allowing you to sort by time or alphabetical order. The default option is "Descending", so all layers are filtered by the descending time that they were created by default.
5.  If you click the \[Clear\] button at the bottom of the “Filter” form, it will clear all the filtered results and return you to the dashboard screen.
6.  Once you have made all of your selections from the previous steps, when you click on the \[Search\] button in the “Filter” form, it will filter the layers according to your chosen selections.

#### Search On Project Full Screen Page

You can search the layers within the project by typing in the “Search” input frame on the Project Full Screen Page.

Procedure

1.  Click into the “Search” input frame.
2.  Enter text into the “Search” input frame.
3.  The search terms will be highlighted within the resulting layers name(s) and display only those layers with a green rectangle highlighting the resulting terms within the actual layer title.

Note: When the search doesn't return a result, the page won't display any projects or layers.

#### Page Break On Project Full Screen Page

The Project Full Screen page default view shows a limited number of projects per page, but you are able to change the number of rows displayed with the dropdown menu, or scroll right and left through the pages of layers within the project.

Procedure

1.  The page break group on the top right has 4 Components which include the number of rows per page setting \[5, 10 or 20 rows per page\], "Current Page \[current layers\] of \[total layers\]", the \[Previous page\] arrow and the \[Next page\] arrow.
2.  The \[Previous page\] arrow and the \[Next page\] arrow are disabled when the number of layers is equal to less than the number of rows per page selected on the dropdown.
3.  When there are pages available to scroll through the \[Next\] arrow is active, but once you reach the last page available the \[Next\] arrow is inactive and only the \[Previous page\] arrow is enabled.
4.  When you are on the first page the \[Previous\] arrow is inactive, but the \[Previous\] button is active once you click through to any page after the first page.

#### Project Description On Full Screen Page

You can add the diagram and description for your project at Full Screen Page of that project.

![](/assets/images/lokahi/image8.png)

Figure 28

Procedure

1.  Once clicked on the "Project Description" option in the "Project Menu" at Dashboard, it accesses to the Full Screen page and opens the "Editing with Smart contract" screen.
2.  Once you click the \[Click to upload Diagram here\] link button at the first time after you click the \[Edit\] button, it opens a window to choose the picture to upload. Once it uploaded the picture on the "Editing with Smart contract" screen and saved it, this button does not appear again.
3.  Once clicked the \[Upload diagram\] button, it opens a window to choose the picture to upload. It allows saving the { jpeg, svg, png} picture format.
4.  It allows entering any character on the "Write description for project" textbox.
5.  Click \[Save\] button.

### User Profile & Setting

You can check your profile and edit the information related to your account like organization, project, user management by clicking on the account icon at Dashboard page then choose “My Profile” option.

#### My Profile

At the “My Profile” tab, you can see your account’s information like username, your email is used to register an account, your role, you can change your password, and you can upload your avatar.

Procedure to change the password at “My Profile” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.

![](/assets/images/lokahi/image43.png)

Figure 29

2.  Click on the sentence “Change Password”.

![](/assets/images/lokahi/image64.png)

Figure 30

3.  A “Change Password” dialog appears.

![](/assets/images/lokahi/image66.png)

Figure 31

4.  You can change your password and do not need to send a verification link to your email. You have to fill your current password and your new password. Then click the \[Save\] button.

Note: You have to enter a password that satisfies like a password format when you Sign Up, click [User Account Sign Up](#user-account-sign-up) for more information.

Procedure to upload your avatar at “My Profile” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Hover on the frame that shows your first character in your username to see the \[Change\] button.
3.  Click on the \[Change\] button and choose your image that you want to upload for your avatar.

#### User Management

At the “User Management” tab, only administrator accounts can open this tab. The administrator can see all accounts’ information like username, the email address used to register an account, the account’s role. The administrator can add a new user, delete a user, and assign or change a role for a user.

Procedure to add new user at “User Management” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Choose the “User Management” tab.

![](/assets/images/lokahi/image25.png)

Figure 32

3.  Click on the \[Add New User\] button.
4.  The next tab has a direction which is “User Management / Add User” displays.

![](/assets/images/lokahi/image49.png)

Figure 33

5.  Enter in the fields which are required are: “Display Name” ,“Username”, “Email”, “Password”, and “Confirm Password”.

Note: You have to enter in these fields which satisfy as when you Sign Up, click [User Account Sign Up](#user-account-sign-up) for more information.

6.  Check the “Can create new project” checkbox if you want that account is able to create a new project.
7.  Choose a role for that project by clicking on one of four radio checkboxes.

Note: Click [The Roles And The Functions Of Each User: User Permissions](#the-roles-and-the-functions-of-each-user:-user-permissions) for more information about the role of user.

8.  The \[Create\] button can be enabled to click.
9.  Once clicked the \[Create\] button, a green pop up “Add User Successfully!” appear.
10. Then a verification link is sent to that email of that user account. Like the [User Account Sign Up](#user-account-sign-up) process.

Procedure to change the role of an existed user at “User Management” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Choose the “User Management” tab.
3.  Hover on the row contains that user’s information.
4.  Click on the three dots icon button.
5.  Choose the “Show details” option. Or click on that username.
6.  The next tab has a direction of “User Management / {Username}” displays.
7.  The fields are disabled are: “Display Name” ,“Username”, and “Email”.
8.  You can change the role by ticking another radio checkbox.
9.  Then click the \[Save\] button. A green pop up announces “Update User Successfully!”.

Procedure to delete a user at “User Management” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Choose the “User Management” tab.
3.  Hover on the row contains that user’s information.
4.  Click on the three dots icon button.
5.  Choose the “Delete” option. Or choose the “Show details” option then click the \[Deleted User\] button.
6.  A dialog box "Delete User" has content is "Are you sure you want to delete user "{username}"?".
7.  If you click on the \[Yes\] button, a green pop up shows up and announces "Delete User Successfully!”, it returns to the first screen of the "User Management" tab. That user does not exist anymore.

#### Organization

At the “Organizations” tab, you can see all organizations that you have taken part in like organization names, the members of those organizations, the number of projects of those organizations owned. The administrator account manages all organizations even if they don’t take part in it. You can create your own organization but cannot delete that organization except the administrator account. But you can assign or revoke the “Admin” role, or remove or add the other member if you have an “Admin” role in that organization.

Procedure to add new organization at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.

![](/assets/images/lokahi/image38.png)

Figure 34

2.  It opens the “Organizations” tab.

![](/assets/images/lokahi/image37.png)

Figure 35

3.  Click on the \[Add Organization\] button.
4.  It shows the "New Organizations" dialog box.

![](/assets/images/lokahi/image15.png)

Figure 36

5.  Enter a string in the “Organization Name” input. It requires entering at least 3 characters and less than 128 characters. It does not allow you to enter the special characters and blank space except "\_".
6.  Once entered a valid string into the "Organization Name" input, the \[Create\] button will be enabled. Once clicked on the \[Create\] button, a green pop up announces "Create Organization Successfully!" and a new organization appears at the first row of the table. That new organization has already a member as admin is the user who created that organization.

Procedure to add member at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.
5.  Choose the “Show details” option. Or click on that organization name.
6.  Click on the \[Add Member\] button.
7.  It shows the "Add Members" dialog box.
8.  Once you click on the "Dropdown" icon and don't have any option, it shows a label "No options". We have to type to search. We can search by email and username, it will respond no more than 10 results per searching time. Once you choose one option, the number of 10 users is decreased one.
9.  Once clicked on the user option, it disappears on the dropdown list and appears a label button has the name of that user in the input combobox.
10. Once clicked on the"x" icon on the labels have been added, that label button disappeared from the input combobox and appears again on the dropdown list.
11. Once clicked on the"x" icon near the "dropdown" icon, all the user labels which have been added will be cleared and that "x" icon will disappear.
12. One clicked the \[Cancel\] button or the "X" exit icon, the dialog will be closed.
13. The \[Add\] button only enables if you have at least one user. Once clicked \[Add\] button, a green pop up shows "Add User To Organization Successfully!" and in the table appears that user in the first row.
14. Once entered in the input combobox the options in the dropdown list will be filtered the username which has the string has been entered.

Note: Just administrators can do this “Add Members” feature.

Procedure to assign or revoke or remove member at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.

![](/assets/images/lokahi/image73.png)

Figure 37

5.  Choose the “Show details” option. Or click on that organization name.
6.  Hover on the row contains a user.
7.  Click on the three dots icon button.
8.  Once clicked the "Assign Admin" option, in the "Role" column, the label "Admin" will be added in the "Role" column of the account which is assigned. And the green pop up shows "Make Admin Of Organization Successfully!".
9.  Once clicked "Revoke Admin", in the "Role" column, the label "Admin" will disappear in the "Role" column of the account which is assigned. And the green pop up shows "Remove Admin Of Organization Successfully!".
10. Once clicked "Remove", a confirmation dialog has the title "Remove User" appears and has the content "Are you sure you want to remove '{username}' from the organization 'Organization's name'?". If you click the \[No\] button or the "x" exit icon, it closes the dialog. If you click \[Yes\] button, the green pop up shows "Delete User From Organization Successfully!".

Note: Just an administrator or user who has an admin role on an organization can do these features: assign, revoke and remove.

Procedure to delete a organization at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.
5.  Choose the “Delete” option. Or choose the “Show details” option then click the \[Deleted Organization\] button.
6.  A dialog box "Delete Organization" has content is "Are you sure you want to delete organization "{Organization’s name}"?".
7.  If you click on the \[Yes\] button, a green pop up shows up and announces "Delete Organization Successfully!, it returns to the first screen of "Organizations" tab. That organization does not exist.

Note: Just administrator can do this “Delete Organization” feature.

Procedure to show more projects that organization owned at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.

![](/assets/images/lokahi/image101.png)

Figure 38

5.  Choose the “Show details” option. Or click on that organization name.
6.  Once clicked on the "Show more" button at "Projects Owned by {Organization's name}" form, it accesses the "Projects" tab and shows all the projects of that organization is owning.

![](/assets/images/lokahi/image35.png)

Figure 39

#### Projects

At the “Projects” tab, you can see all projects of that account are created or took part in. The administrator account manages all projects even if it doesn’t take part in. The user owned that project or the user as admin role of an organization owned that project: can do the “Add Collaborator” feature to add user or organization to have “Read”, or “Write”, or “Delete” access on a project; can transfer a project from user or organization (each user has “Admin” role in that organization) owned it to an organization will own that project; can delete project.

Note: Only the user owned that project or the user as admin role of an organization owned that project can see the group of buttons \[Add Collaborator\], \[Transfer Project\], \[Delete Project\]. If it doesn't belong to any case above, it cannot do any feature of those buttons.

![](/assets/images/lokahi/image12.png)

Figure 40

Procedure to add collaborators for user or organization at “Projects” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option or “My Profile” option.
2.  It opens the “Organizations” tab or “My Profile” tab. Choose the “Projects” tab.
3.  Click on the project name in the table. That project has to be created by that user account that is logging in.
4.  Click on the \[Add Collaborators\] button.
5.  Once clicked on the \[Add Collaborators\] button, a dialog has the title "Add Collaborators" appears and has an input combobox. The \[Add\] button is disabled. There are:

-   A input combobox has a placeholder "Search and Select Users or Organizations"
-   The "Access" with 3 radio tick boxes are "Read", "Write" and "Delete".
-   The \[Cancel\] and \[Add\] buttons.

6.  Once you click on the "Dropdown" icon and don't have any option, it shows a label "No options". We have to type to search. We can search by email, username and organization. It will respond to no more than 10 results per searching time in 2 parts which are User and Organization.
7.  Once clicked on the user or organization option, it disappears on the dropdown list and appears a label button has the name of that user or organization in the input combobox. And the \[Add\] button is enabled and the "x" icon appears near the "dropdown" icon.
8.  Once clicked on the "x" icon on the labels which have been added, that label button disappeared from the input combobox and appeared again on the dropdown list.
9.  Once clicked on the "x" icon near the "dropdown" icon, all the user or organization labels have been added and will be cleared all and that "x" icon will disappear. Then the \[Add\] button is disabled.
10. One clicked the \[Cancel\] button or the "X" exit icon, the dialog will be closed.
11. Once clicked \[Add\] button, a green pop up shows "Grant Rights To Project Successfully!" and in the “User” table appears that user in the first row with an "X" icon on the "Access" column or if is is an organization, it appears on the “Organization” table under the “User” table in the first row with an "X" icon on the "Access" column but under the organization owner that project if it is. Even if you transfer that project to the organization that contains the user has been added collaborator before, it still displays the "X" icon.
12. Once entered in the input combobox the options in the dropdown list will be filtered by which username and the organization name in the string has been entered.
13. When hover each tickbox, a tooltip appears:

-   With "Read": "Can access to see projects but cannot edit, delete or duplicate projects."
-   With "Write": "Has full access with Read. Can access to edit or duplicate projects."
-   With "Delete": "Has full access with Read and Write. Can access to see, edit, delete or duplicate projects.".

14. Once added colaborator, that user will appear on the "User" table of "Projects" tab that organization and all users belong to that organization will appear on the "User" table and "Organization" table of "Projects" tab with:

-   if tick "Read": in the "Access" column appears "Read";
-   if tick "Write": in the "Access" column appears "Read" and "Write";
-   if tick "Delete": in the "Access" column appears "Read", "Write" and "Delete";

15. And an "X" icon appears in each row of the "Organization" table, it does not appear in each row all users belong to that organization.
16. When clicking on the "X" icon, a "Remove Collaborator" dialog appears and asks you "Are you sure you want to remove {organization name}'s access to {user/organization owned the project}/{project name}?".
17. If you click the \[Yes\] button, the green pop up shows "Remove Rights To Project Successfully!". And that organization and all users belonging to that organization will disappear from the "User" table and "Organization" table of "Projects" tab.
18. Once open again the "Add Collaborators" dialog, in the combobox, it still displays that organization has added collaborators.
19. If we use that organization has been added collaborator to add collaborator again with changing the access, it will update again the access of that organization and all users belong to that organization on the project.

Procedure to transfer project is owned by a user to an organization at “Projects” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option or “My Profile” option.
2.  It opens the “Organizations” tab or “My Profile” tab. Choose the “Projects” tab.
3.  Click on the project name in the table. That project has to be created by that user account that is logging in.
4.  Click on the \[Transfer Project\] button.
5.  Once clicked on the \[Transfer Project\] button, a dialog with the title "Transfer Project" appears and shows a combobox has a placeholder "Search and Select Organizations". The \[Add\] button is disabled. And the \[Cancel\] button is enabled.
6.  Once you click on the "Dropdown" icon and don't have any option, it shows a label "No options". We have to type to search. We can search by organization name. It will respond no more than 10 results per searching time in a part is Organization. If a project is owned by an organization, then that organization is not listed on the dropdown list.
7.  Once clicked on an organization option, it is held in the dropdown list and appears as the organization name in the input combobox. It just allows choosing one option. And the \[Transfer\] button is enabled.
8.  One clicked the \[Cancel\] button or the "X" exit icon, the dialog will be closed.
9.  Once clicked \[Transfer\] button, a green pop up shows "Transfer Project Successfully!" and access to the first page of "Project" tab. When clicking on that project, it appears on the first row of "Organization" table (always), with the "OWNER" label beside has transferred from the user who owned that project to all of user of that organization and the users of that organization will be added in the "User" table without "X" icon in the "Access" column (because all those users now have full access "Read", "Write" and "Delete").

Procedure to delete project is owned by a user or an organization at “Projects” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option or “My Profile” option.
2.  It opens the “Organizations” tab or “My Profile” tab. Choose the “Projects” tab.
3.  Click on the project name in the table. That project has to be created by that user account that is logging in.
4.  Click on the \[Delete Project\] button.
5.  Once clicked on the \[Delete Project\] button, a dialog box "Delete Project" has content is "Are you sure you want to delete project "{Project name}"?".
6.  If you click on the \[Yes\] button, a green pop up announces "Delete Project Successfully!" and that row contains that Project has disappeared on the “Projects” table.

## WORKBOARD NAVIGATION OVERVIEW

7

### Menus & Buttons On The Workboard

The Workboard is the primary area to design Contracts and Elements.

![](/assets/images/lokahi/image104.png)

Figure 41

#### (1) Add Component: Groups Menu (Contract)

On the Contract workboard, you can edit the name, icon, duplicate and delete Element blocks.  
![](/assets/images/lokahi/image50.png)

Figure 42

-[Edit Element Block Name & Icon](#h.vg5t2b1nht9n)

-[Duplicate Elements](#duplicate-a-contract-on-the-workboard)

-[Delete Elements](#delete-a-contract-on-the-workboard)

#### (2) Add Component: Groups Menu (System Element)

On the Element workboard, you can edit the name, icon, duplicate and delete Elements.

![](/assets/images/lokahi/image52.png)

Figure 43

-[Edit Logit Block Name & Icon](#h.cf4bpk5qhwyt)

-[Duplicate Logits](#duplicate-a-contract-on-the-workboard)

-[Delete Logits](#delete-a-contract-on-the-workboard)

#### (3) Add Component: Groups Menu (Logit Element)

#### ![](/assets/images/lokahi/image99.png)

Figure 44

#### (4) Layers Dropdown Menu (Contract)

On the Contract workboard Layers dropdown Menu you can create new and edit existing layers.

![](/assets/images/lokahi/image93.png)

Figure 45

\-[Create New Layer](#create-new-contract-layer-on-the-workboard)

#### (5) Layers Dropdown Menu (Elements)

![](/assets/images/lokahi/image16.png)

Figure 46

\-[Create New Layer](#create-new-contract-layer-on-the-workboard)

\-Create New Elements

\-Admin & Engineers Navigate Between Layers Menus

#### (6) Accessing The System Tray Icons

![](/assets/images/lokahi/image18.png)

Figure 47

-[Download Workboard Process](#download-icon)

-[Formal Analysis Checks](#transaction-icon)  
\-[Print](#print-/-save-pdf-icon)

-[Find Elements On The Workboard Via Search](#find-icon)

-[Deploy](#h.3ew3d88u4eb6)

#### (7) Edit Logit Element Settings

![](/assets/images/lokahi/image46.png)

Figure 48  
[Bottom Left Settings Icon on Workboard Screen](#h.qhwk13qfkym6)

#### (8) Edit Element Settings

![](/assets/images/lokahi/image46.png)

Figure 49

[Bottom Left Settings Icon on Workboard Screen](#h.qhwk13qfkym6)

#### (9) Edit Contract Settings

![](/assets/images/lokahi/image46.png)

Figure 50  
[Bottom Left Settings Icon on Workboard Screen](#h.qhwk13qfkym6)

#### (10) Access Help Center

![](/assets/images/lokahi/image42.png)

Figure 51

\-[Trigger Onboarding Tutorial](#h.xp4rp89eeex0)

## WORKBOARD TASKS & MANIPULATIONS

8

### Creating Contracts And Elements On The Workboard

#### Create New Contract Layer On The Workboard

You can create a new Contract layer from the workboard of any layer by navigating to the “Layer dropdown Menu” at the top of the screen.

Procedure

1.  Access the "Layer dropdown Menu" at the top of the screen (located next to the name of the current layer you are currently viewing). You will see the name of the current layer you are viewing, below it click on the \[New\] button to show the "Create New Component or Contract" screen (You also have the option to click on the menu of the current layer and ‘duplicate’ the current layer, for more information see [duplicate a Contract on the workboard](#duplicate-a-contract-on-the-workboard)).
2.  A new window will pop up and you will see "Contract”, underneath click on \[Create New Contract\] which will take you to the "Create New Contract" screen. Enter in the “Name” field of the "Create New Contract" screen.
3.  After entering a name for the Contract layer the \[Create\] button will be enabled for you to click on to create your Contract.
4.  After creating the Contract, you will be directed back to the workboard of the Contract you were viewing and will see a green message that says ‘Create Successfully’.  To access your new Contract return to the “Layer Dropdown Menu” and select the newly created Contract.

#### Creating A New Element On The Workboard

You can create a new Element layer from the workboard of any Contract or Element by navigating to the “Layer Dropdown Menu” at the top of the screen.

Procedure

1.  On the Workboard, open the "Layer Dropdown Menu", click on \[New\] button.
2.  A “Create New Component or Contract” screen will pop up and you will see " Elements” as an option. Underneath click on \[Create New Element\] which will take you to the "Create New Element" screen where you will enter the \[Name\] field, select a category and choose an icon.

3.  You can also create an Element in the “Add Component” menu sidebar from the Workboard on the Contract or Element. If no Elements have been created yet for the project you will see a message "You don't have an Element" and below a \[Create\] button to click on, which will take you to the “Create New Component or Contract” screen. If categories do exist, then right click on the title of the category that you want to create a new Element in, and select \[New Element\] which will take you to the “Create New Component or Contract” screen.

4.  Enter in the “Name” field of the "Create New Element" screen. You can use the alphabet, number, blank space, and special characters to type a name for your Element.
5.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, blank spaces, and special characters (like: “\_”) to type a name for your category.
6.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
7.  After completing the steps above, the \[Create\] button will be enabled for you to click on to create the Element.
8.  Once created, the Element will be visible on every Contract of the project that it was created in.

Additional: You can use the same name for multiple Elements within the project.

#### Creating A New Logit Layer On The Workboard

You can create a new Logit layer from the workboard of any Contract or Element by navigating to the “Layer Dropdown Menu” at the top of the screen.

Procedure

1.  On the Workboard, open the “Layer Dropdown Menu", click on the \[New\] button.
2.  A “Create New Component or Contract” screen will pop up and you will see "Logit” as an option.  Underneath click on \[Create New Logit\] which will take you to the "Create New Logit" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter \[Name\] field of “Create New Logit" screen.  You can use the alphabet, number, blank space, and special characters to type a name for your Logit.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, blank spaces, and special characters (like: “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing the steps above, the \[Create\] button will be enabled for you to click on to create the Element.
7.  Once created, the Logit will be visible on every Element of the project that it was created in.

#### Configure A Contract Layer On The Workboard

Once you have created a new Contract layer, you are now able to design a process on the workboard to  build the Contract using the pre-configured Element blocks from the ‘Add Component Menu’ in the sidebar.

Procedure

1.  After creating a Contract layer, access the Contract’s workboard to define the process.
2.  To make a connection between two Element blocks, drag and drop one Element block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Element block onto the workboard nearby.  You can use the [Recommendation feature](#h.hn8dssee8jg2) to guide you.
3.  To connect the two blocks, hover over the first Element block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  The next step is to configure the connection created by the arrow to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue blox will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
5.  Next, drag an input shape in column 1 to the desired output shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
6.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
7.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable so you can click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

8.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no blocks are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks which are unconnected exist, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.
9.  If the \[Deploy\] button is not enabled, you can click on the \[Recommendation\] button at the bottom of the page and a “Recommendation” sidebar appears with the warnings box to announce which arrow(s) you need to define or some block need to connect.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

10. If all arrows are defined without warnings at the “Recommendation” sidebar, you are now potentially ready to move to [Deploying to the Blockchain](#deploying-to-the-blockchain). Now you finish creating a Contract which is what gets created in the Contract layer.
11. You can add data for the Contract at the “Add Data” sidebar.

For more information about the “Add Data” feature, see [Add Data Sidebar](#add-data-sidebar).

Note: In the bottom left hand corner of the screen, there is a \[Settings\] button that allows you to rename the Contract layer you are working on if desired.

#### Configuring An Element On The Workboard

After you have [created a new Element](<#creating-a-new-element-layer-(dashboard)>), you are now able to configure the Element on the workboard.

Procedure

1.  After creating an Element layer, access the Element’s workboard to define the process.
2.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
3.  To connect the two blocks, hover over the first Logit block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
5.  To connect the two blocks, hover over the first Logit block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
6.  The next step is to configure the connection on the arrow between 2 Logit at Element’s workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
7.  Next, drag an input shape in column 1 to the desired output shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
8.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
9.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable so you can click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

10. Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no block are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks which are unconnected exist, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

11. In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#h.qhwk13qfkym6)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
12. Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type depending on the parameters set in the “Register” blocks and “Operation” blocks of the Logit block that was configured as an input and an output port. You can choose how many options you want by ticking on a checkbox in front of each option. After chosen, that Logit block will provide the input or output or both to become the input and output ports of the Element you are configuring.
13. Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again.
14. At the top of the window, click on “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
15. Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the Element available at the Contract for use at the Contract level.
16. Now, you finish creating Elements which is what gets created in the Element.

Tip:  When you are on the Contract, you can quickly move down to the workplace of any Element by double clicking on any block icon on the workboard.Tip: You can group Elements by clicking and dragging to highlight any group of Element blocks to create a new Element.  Once you release the selection, the group of Elements will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen.  You can configure inputs/outputs, name, category and choose an icon for the new Element and then click the \[Create\] button to finish the creation of a new Element process.

#### Configuring A Logit Layer On The Workboard

After you have [created a new Logit](#creating-a-new-logit-layer-on-the-workboard), you are now able to configure the Logit on the workboard. Logits is what gets created in the Logit.

Procedure

1.  After creating a Logit, access the Logit’s workboard to define the process.
2.  To make a connection between two blocks, “drag and drop” one “Register” or “Operation” block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd block onto the workboard nearby.
3.  To connect the two blocks, hover over the first block and ‘click and drag’ on one of the 4 squares that appear and drag the arrow to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).

Attention: A valid model cannot have an “Operation” block at the end point or the starting point of the model. A “Register” block cannot point to a “Register” block and an “Operation” block cannot point to an “Operation” block. A “Register” block can only connect to an “Operation” block and an “Operation” block can connect to a “Register” block.

4.  In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#h.qhwk13qfkym6)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
5.  Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type or both. You can choose one option. After chosen, that Logit block will have the input or output or both.
6.  Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button, and the "Required Hashtags" input. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again. You can add a required hashtag for a port to let it require you to connect with other Logit blocks on the Element layer.
7.  At the top of the window, click on the “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
8.  Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the Logit available at the Element layer.
9.  Next, you can edit and configure your model.
10. With the “Register” blocks, you can choose the types are defined at “[Define Type](#define-type)” screen by clicking on “Register” block then choose “Edit Markings” option once clicked “Add Marking” ![](/assets/images/lokahi/image2.png) icon. Then choose what “Register” block is allowed to [add data](#add-data-sidebar) at Element or Contract. For more details about the process to choose type and configure for a “Register” block,  go here [Edit Markings](#edit-markings).
11. Click on the arrow connect from “Register” block to “Operation” block then click “Add Variable”![](/assets/images/lokahi/image14.png) icon, the “Variable” screen appears to let you choose the variables of the message of the “Register” block. For more details about the process to choose variables, go here [Variable](#variable).
12. With the “Operation” blocks, you can set the condition for transition of the variables of the message in the “Register” block by clicking on “Operation” block then choose “Edit Guard” option once clicked “Add Guard” ![](/assets/images/lokahi/image22.png)icon. For more detail about the process to set the condition for transition, go here [Edit Guard](#edit-guard).
13. Click on the arrow connect from “Operation” block to “Register” block then click “Add Expression”![](/assets/images/lokahi/image20.png) icon, the “Edit Expression” screen appears to let you regulate the output of the “Operation” block, by creating a new message and depending on the condition of the output, the type of message can then be created. For more detail about the process to regulate the output of the “Operation” block, go here [Edit Expression](#edit-expression).
14. Now, you finish creating Logits which is what gets created in the Logit layer.

Tip: You can group a part of Logit by clicking and dragging to highlight any group of Logit’s blocks to create a new Logit.  Once you release the selection, the group of Logit’s blocks will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen. You can configure inputs/outputs, name, category and choose an icon for the new Logit and then click the \[Create\] button to finish the creation of a new Logit process.

#### Duplicate A Contract On The Workboard

On the workboard, you can duplicate an existing Contract by opening the “Layer dropdown Menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Contract and choose the “Duplicate” option.  A "Duplicate Contract" box appears to allow you to provide a new name for the new Contract.

Procedure

1.  One the workboard, open the “Layer dropdown list”, choose a Contract in that list then click the “Three dots menu”, then click on \[Duplicate\] option of the menu.
2.  A "Duplicate Contract" box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Contract.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate.

Note:  The duplicated Contract will store all manipulations and Elements in the original Contract but will not include the deployment history and the contract addresses. The duplicated Contract is dated as a new Contract and displayed as the top slide in the project as the most recent with the current date.

#### Duplicate An Element On The Workboard

On the workboard, you can duplicate an existing Element by opening the “Dropdown menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Element and choosing the “Duplicate” option.  A "Duplicate Element" box appears to allow you to provide a new name for the new Element.

1.  One the workboard, open the Layer dropdown list, choose an Element in that list then click the “Three dots menu”, then click on \[Duplicate\] option of the menu.
2.  A "Duplicate Element box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Element.
3.  After entering a name in “Name” field, the \[Save\] button will be enabled for you to click on to duplicate.

Note:  The other option to duplicate Elements is in the "Add Component menu" in the sidebar at Contract’s workboard, where you can right-click on any Element block and a "block menu" appears with 3 options {Edit; Duplicate; Delete}, choose \[Duplicate\] option.

#### Delete A Contract On The Workboard

On the workboard, you can delete an existing Contract by opening the “Layer dropdown Menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Contract and choose the “Delete” option.

Procedure

1.  One the workboard, open the Layer dropdown list, choose a Contract in that list then click the “Three dots menu”, then click on \[Delete\] option of the menu.
2.  A dialog box asks "Do you want to delete {this layer}?" with 2 options: “Yes” and “No”. Select Yes.
3.  After deleting the layer, a green popup announces a message that "Delete Successfully!”.

Note: You cannot reverse the Contract deletion, so consider carefully before deleting.

#### Delete An Element On The Workboard

On the workboard, you can delete an existing Element by opening the “Dropdown menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Element and choose “Delete” option.

Procedure

1.  One the workboard, open the “Layer Dropdown Menu” and choose an Element in that list then click the “Three dots menu”, then click on \[Delete\] option of the menu.
2.  A dialog box asks "Do you want to delete {this layer}?" with 2 options: “Yes” and “No”. Select Yes.
3.  After deleting the Element, a green popup announces a message that "Delete Successfully!”.

Note:   The other option to delete Elements is in the "Add Component menu" in the sidebar, where you can right-click on any Element block and a "Block menu" appears with 3 options {Edit; Duplicate; Delete}, choose \[Delete\] option. You cannot reverse the Element deletion, so consider carefully before deleting.

#### Navigating Between Layers on The Workboard

You can see all layers in the current project from the Workboard and move alternatively among the layers by using the “Layer Dropdown Menu” in the toolbar on the Workboard.

Procedure

1.  Click on the “Layer Dropdown Menu” in the toolbar on the Workboard
2.  There are three radio buttons to choose from {Logit; Element; Contract}, select the layer list you would like to access.
3.  Choose the corresponding layer and click on the name of the layer you would like to switch to and it will load on the workboard.

Note: If preferred, you can search for the layer name by typing in “Search” input frame in “Layer dropdown list”. You can also easily create a new layer by clicking on \[New\] button at the bottom of the “Layer dropdown list”.

#### Edit Layer On The Workboard

You can see all layers in the current project from the Workboard and move alternatively among them to edit from the “Layer Dropdown Menu” in the toolbar on the Workboard.

Procedure

1.  Click on the “Layer Dropdown Menu” in the toolbar on the Workboard
2.  There are three radio buttons to choose from {Logit; Element; Contract}, select the layer list you would like to access. If preferred, you can search for the layer name by typing in “Search” input frame.
3.  Choose the corresponding layer and click on the name of the layer you would like to switch to and it will load on the workboard to edit.

#### Navigating The Add Component Sidebar Menu On The Workboard

The “Add Component” sidebar contains all of the Element blocks available within the project for use on the workboard.

![](/assets/images/lokahi/image79.png)

Figure 52

Procedure

1.  You can hide the “Add Component sidebar” menu by clicking on “x” icon to minimize the menu on the left hand side of the screen and clicking on the “Hamburger icon” (Three Horizontal lines) to re-open.
2.  Within the “Add Component sidebar” menu, there may be multiple categories available to minimize and maximize within a drop down list that shows all blocks available for use on the workboard.
3.  You can create a new Element in an existing group category in the “Add Component sidebar” by:

\+ Right clicking on that category and then clicking on the \[New Component\] option of the menu of that group category.  It opens the "Create New Logit" or ”Create New Element” screen to name the Component and choose the group category for the layer belonging to the lower layer type.

\+ If no Component exists In the Contract/Element the "Add Component" sidebar menu will display the message "You don't have an Element/a Logit" and below that a \[Create\] button. When you click on the \[Create\] button, it opens "Create New Logit” or “Create New Element” screen to name and choose a group category for the new Element.

4.  You can delete a category with all of the Components that belong to that category by right clicking on that category then click on \[Delete\] option of the menu of that category. This is a permanent action so consider carefully before deleting any category with the components inside.
5.  You can edit the basic information of a component in the "Add Component" sidebar menu, by right-clicking on any block. A "block menu" appears with 3 options {Edit; Duplicate; Delete}. \[Attention: Depend on your permission, so you can manipulate the feature “Right-clicking on any block” in the “Add Component” menu\].  When you choose the \[Edit\] option you can enter a new name in the “Name” field or change the icon or the source and then the \[Save\] button will be enabled for you to click on to save.

#### Edit Layer In The Add Component Sidebar On The Workboard

You can change the name, icon or category and configure the ports of the current component from the settings button in the bottom left hand corner of the Add Component sidebar.

![](/assets/images/lokahi/image72.png)

Figure 53

Procedure

1.  Click on the \[Edit\] settings icon in the bottom left hand corner of the “Add Component” sidebar.

Case 1: After clicking the "Edit" button the "Configure Port and Component info" screen appears.  If you do not have any blocks on the workboard, the “Configure Port” tab will be blank on the left side with a message on the right side that says "You must configure at least one input or output port. Please configure a port for one of these Components".  You need to return to the workboard and Add Component blocks to the workboard and follow the [Configure Port](#configure-port) instructions.

Case 2:  When you click the "Edit" button the "Configure Port and Component info" screen appears.  If you have placed component blocks on the workboard but have not configured a port yet,  the “Configure Port” screen will display the blocks on the left with the message "You must configure at least one input or output port. Please configure a port for one of these components". You can follow the [Configure Port](#configure-port) instructions to configure and then click the \[Save\] button, and when complete a popup displays the message "Update Successfully".

![](/assets/images/lokahi/image32.png)

Figure 54

Case 3:  After clicking the "Edit" button the "Configure Port and Component info" screen appears. If you have blocks on the workboard and have configured ports, the "Configure port" tab will display all blocks in the left table and in the right table displays a “Configure port” header with the number of blocks selected and it lists each type of port {input, output, both and none port} with the number of each type. After you [configure the port(s)](#configure-port) click the \[Save\] button, a popup displays the message "Update Successfully".

Additional: In the "Component info” tab, the name of the layer is used as the default in the "Name" field and the group is listed in the "Category” field.

![](/assets/images/lokahi/image53.png)

Figure 55

#### Configure The Private Blockchain At The Workboard

You can deploy a Contract to the private blockchain that you want by adding a new option blockchain on the Deployment form at the workboard.

Procedure

1.  Click the \[Deploy\] button on the toolbar to open the deployment form.
2.  Click on the “Deploy to blockchain” selection box.
3.  Click on the \[Custom Blockchain\] option.
4.  Type in the “Name” input and the “URL” input the link of the blockchain server which you want to deploy to.
5.  Click the \[Save\] button to save the new option of blockchain on the web.
6.  You can edit or delete the new blockchain option by hovering on that option and choose “Edit” icon or “Delete” icon

#### Configure The Metamask and Connect The Metamask With Lokahi

You can deploy a Contract to the Ethereum blockchain or any blockchain by using the extension “Metamask”. MetaMask is a bridge that allows you to visit the distributed web. It allows you to run Ethereum dApps.

Procedure

1.  Add the “Metamask” tool on the extension of the browser (support for Chrome, Opera, FireFox).
2.  Add your account address on the Ethereum blockchain or create a new one.
3.  Access to the Lokahi, and it will appear a dialog to let you know that you have to connect “Lokahi” with the “Metamask”. Click the “Connect” button on the dialog to connect with the “Metamask”.

![](/assets/images/lokahi/image58.png)

4.  On the “Metamask” dialog, click on the selection box which is displaying the name of the blockchain. You can choose the Mainnet “Ethereum” or the other Testnet. Or you can add your private Ethereum.
5.  To add the private Ethereum on the Metamask click on the selection box which is displaying the name of the blockchain.
6.  Choose the “Custom RPC” option.
7.  Type the information about the name of the blockchain (as “Ethereum private”), the link of the private blockchain (as “https://www.lokahi.io/ethereum”), and the symbol (as “Eth”).
8.  Click the \[Save\] button.

#### Deploy A Contract From The Workboard

You can deploy a Contract from the workboard once you have gone through formal verification, selected the blockchain destination and entered the pertinent account details \[address and private key for Ethereum, for example\] and click the “Deploy” button in the upper right hand corner of the workboard.

![](/assets/images/lokahi/image67.png)

Figure 56

Procedure

1.  Access the Contract’s workboard and ensure the workboard the Elements are verified for deployment.
2.  Click the “Deploy” icon in the upper right hand toolbar. A “Deployment” form expands down.
3.  Choose the blockchain you want to deploy on.
4.  Enter the in “Name” field of "Deploy" screen: Can use the alphabet, numbers, blank space and special characters to type a name for your agreement ’s contract.
5.  Enter in the “Version” field of the "Deploy" screen: You can only enter a number and three characters are "-", "." and "+".
6.  The subversion field:

\+ When entering the new name and the new version number, the subversion is "1".  
        + When using the same name and the new version number, the subversion is "1".

\+ When using the same name and same version number from the previous deployments, the subversion will increase 1 unit automatically after successfully deploy

7.  If you choose the other blockchain except “Fabric”, you need to include an address account and the private key so you can deploy the Contract.

1.  Enter in the \[Account Address\] field of "Deploy" screen. Can use the alphabet, numbers, blank space and special characters to type your account address.
1.  Enter the \[Private Key\] field of the "Deploy" screen. Can use the alphabet, numbers, blank spaces and special characters to type your private key. And each character will be replaced by a dot.

1.  If you are using the “[Metamask](#configure-the-metamask-and-connect-the-metamask-with-lokahi)” to deploy on the Ethereum blockchain Mainnet and Testnet or your [private Ethereum blockchain](#configure-the-private-blockchain-at-the-workboard), you can switch ON the “Authorize by Metamask” to let the Lokahi automatically connect with the account address on the blockchain that you are in without entering your account address and private key.
1.  A “Connected by Metamask” status button and a sentence “ Please Open Metamask to select the correct network and account to deploy!” appear to let you know that you are connected successfully with Metamask and remind you to choose the correct network.
1.  Click the \[Deploy\] button. After clicking the \[Deploy\] button, the contract address is displayed that has been returned from the blockchain. You can click “Show more transactions” to observe the contract’s status during or after the process, and to [view the deployment history of the Contract](#view-deployment-history-of-a-contract-on-the-dashboard).

Note:  If An Element is invalid on the Contract's workboard, and you click the \[Deploy\] button, an error message under the \[Deploy\] button warning that "Deployed failed! Your model has not been completed. Please finish all the tasks on the recommendation list to deploy".  You’ll need to correct the issue before attempting to deploy again, you can use the [Recommendation](#recommendation-feature) feature to assist with finding the issue.

#### View Deployment History Of A Contract From The Workboard

You can check the deployment history of a Contract from the workboard dashboard.

![](/assets/images/lokahi/image19.png)

Figure 57

Procedure

1.  Access the Contract’s workboard and navigate to the “Deploy” button in the upper right hand corner of the screen.  Click Deploy.
2.  Click Deploy again and a “Show more transactions” link will pop up.  Click on “Show more transactions.”
3.  A screen pops up with the title "Transactions". The default filter is set to ALL in the "Filter by:" section that includes 4 options {All; Success; Pending; Failed}.
4.  The view in the middle of the screen has 6 columns {Name; Version; Address/TxHash; Blockchain; Age; Status} with the following descriptions:  
    \+ Name: the name of the contract named in the Deployment process. If a name was not input during the deployment, the name will automatically default to the name of the Contract.  
    \+ Version: The newest version of the contract. If a version was not provided during deployment, it will automatically default to "0". It shows the version and subversion of the contract.  
    \+ Address/TxHash: The Hash address or contract address from the blockchain server.  
    \+ Blockchain: It displays which blockchains were chosen during Deployment.  
    \+ Age: The time counts from the time when the web has received the contract address to the current time.  
    +Status: Displays the current status of that contract. The 3 status options are {Pending; Success; Failed}.

5.  "Pending" when the TxHash was received but is still waiting for the contract address.
6.  "Failed" when the blockchain server can't send back the contract address.
7.  "Success" when the blockchain server sent back the contract address.

Note: The default view displays 5 contract addresses in a page, with the new contract address in the first position in the first page. You can use the page break at the bottom of the screen to see additional deployments beyond the original 5.

Tip:  You can copy the Constract Address of a deployment by clicking on the document icon.

### Workboard Toolbar (Top Right Of Screen)

The workboard toolbar is in the top right of the screen next to the Deploy button, and contains the “Download Icon”, “Formal Analysis Icon”, “Print/Save Icon” and the “Find Icon”.

![](/assets/images/lokahi/image60.png)

Figure 58

#### Download Icon

The workboard toolbar is in the top right of the screen next to the Deploy button, and the “Download Icon” is located in the toolbar. You can export the Workboard of a layer to save the work at that time and download it in JSON format.

Procedure

1.  In toolbar, click "Download Icon”
2.  When loading is finished, a file with the format “\[account's name\]+\[project's name\]\_\[message auto born \].json” will download.

#### Transaction Icon

The workboard toolbar is in the top right of the screen next to the Deploy button. You can check the deployment history of a Contract that has deployed at Workboard by clicking on the “Transaction” icon.

Procedure

1.  Click on the “Transaction” icon ![](/assets/images/lokahi/image103.png)
2.  Go to the [View Deployment History Of A Contract On The Dashboard](#view-deployment-history-of-a-contract-on-the-dashboard) to see the screen of Transaction history.

#### Print / Save PDF Icon

The workboard toolbar is in the top right of the screen next to the Deploy button, and the “Print Icon” is located in the toolbar. You can print the contents of the Workboard at any time and also have the option to ‘Save as a PDF’ with the date stamp.

Procedure

1.  On the toolbar, click on the Print icon between Find icon and Meta rules icon.
2.  Print screen appears on the top of the page. A screenshot captures the workboard of the session at that time that can be printed or saved as a PDF document.

#### Find Icon

The workboard toolbar is in the top right of the screen next to the Deploy button, and the “Find Icon” is located in the toolbar. You can find any block on the Workboard with the “Find Icon”.

Procedure

1.  Click on the “Find” icon to open the “Find” input frame.
2.  Enter a search text in the “Find” input frame.
3.  The resulting blocks will appear on the workboard while any blocks and ports that do not contain the search characters will be made invisible (blurred).

#### Hide/Show name Icon

You can change the status to “Hide name” to hide all blocks’ name on the workplace or to “Show name” to show all  blocks’ name on the workplace.

Procedure

1.  Click on the “Hide name” icon to change to the “Show name” status.
2.  Click on the “Show name” icon to change to the “Hide name” status.

#### Zoom Button

You can zoom in or zoom out the workboard by using the zoom button in the bottom right part of the screen.

![](/assets/images/lokahi/image86.png)

Figure 59

Procedure

1.  On the workboard, click on the "+" icon. The default value is "100%":  
    Case 1 in \[10% -> 100%\]: when you click the "+" icon it increases 10%.  
    Case 2 in \[100% -> 200%\]: when you click the "+" icon it increases 20%.  
    Case 3 in \[200% -> 400%\]: when you click the "+" icon it increases 50%
2.  On the workboard, click on the "-" icon. The default value is "100%":  
    Case 1 in \[10% -> 100%\]: when you click the "-" icon it decrease 10%  
    Case 2 in \[100% -> 200%\]: when you click the "-" icon it decrease 20%  
    Case 3 in \[200% -> 400%\]: when you click the "-" icon it decrease 50%

Note: The default zoom area is the top-left of the workboard.

### Workboard Manipulations

#### The “Lock” status

This is recognized by a "Lock" icon appearing at the top of the "Add Component" menu and a message box in the workboard announce that "THIS PROJECT HAS BEEN LOCKED! You can not edit this project because another user is working on it.". There are some cases to become the “Lock” state:

![](/assets/images/lokahi/image9.png)

Figure 60

1.  When 2 accounts manipulate the same project at the same time (just Administrator with other user levels), the account that accesses the project first can manipulate the project and the account that accesses after cannot manipulate the project.
2.  When a user only has “[Read](#projects)” access on a project.

#### Instance Block

Definition of Instance: Once dragged the original block on the [“Add Component” sidebar](#navigating-the-add-component-sidebar-menu-on-the-workboard) on the workplace, we created an instance of that original (the copy of the original, the instance inherited from the original block so cannot delete the attributes from the original block).

There are some rules and some attentions to follow when you edit the model:

1.  Update:

1.  Can [change the name of the instance](#change-the-name-of-block) by clicking on the pen icon next to the name of that instance on the workplace, and when [going inside of the instance](<#double-click-on-a-block-(at-contract-or-element)>), the instance name appears on the toolbar under the type name of the layer.
1.  Can change the name of the original block, but don't affect the name of instances that are dragged on the workplace if you haven’t changed the instance’s name on the workplace.
1.  Can [change the type of a Register block](#edit-markings) inside of the instance, but don't affect that Register block inside the original block. And after that, when changing something relates to that Register block inside the original block, it cannot affect that Register block inside the instance.
1.  Can change the type of a Register block inside of the original block, it will affect the instance if you don't change anything like [adding a message](#edit-markings), [changing the type](#define-type), [changing the port](#configure-port), [adding a hashtag](#manage-hashtags),.... relates to that Register block inside of the instance. And it won't affect if we change at least one thing related to that Register block of the instance. Once the type for that Register block is changed, all messages have been added at the Logit/Element instance and the Contract layer will be cleared.
1.  Can add or change the messages, the [expression](#edit-expression) and the [variable](#variable) at some places inside of the instance, but don't affect the same places inside of the original block.
1.  When adding data on the [“Add Data” sidebar](#add-data-sidebar) at the Contract layer for an instance, it affects the Logit layer’s data of that instance.
1.  Can add a message or add an expression or change the variable at some places inside of the original block, it will affect the instance if it doesn't change anything related to those places inside of the instance. And it won't affect if we change at least one thing related to those places inside of the instance.
1.  The changes inside the instance don't affect the original block. But the changes inside of the original block will affect the instance.
1.  Cannot change the status (Yes/No) of the connection from [Decision](#decision-block) block to other block inside instance. But you can change the status (Yes/No) with the connection creates from the new component (between Decision blocks and normal blocks) inside the instance (drag new block inside the instance then create some connections with that block then set the status)
1.  Cannot change the port of the connection from a normal block to a Decision block inside an instance. So when opening the ["Choose Represent Value Data"](#decision-block) screen, it disables the selection box for the port to connect with the Decision block, not allowing it to change.
1.  Can create more connections inside the instance. Can change like the “Expression” screen at Step 2 (the expression in the fields).
1.  Cannot delete at Step 1 with the connections are created in the root block. If hover on the "Delete" icon of that connection, the "Delete" icon will be disabled and it appears a tooltip is "We cannot delete this connection because it's extended from meta type".

1.  Delete

1.  Can delete the instance in the workplace, but doesn’t affect the original block.
1.  Can delete the original block on the “Add Component” sidebar and “Layer” dropdown list and the instance that was dragged on the workplace will be disappeared.
1.  Can delete the new part or change by adding the block on the model inside of the instance, but don't affect the original block. And cannot delete the part of the model as the model of the original block for the first time creating the instance. After that, when changing something inside of the original block, it still affects the instance.
1.  Can delete or change the model inside of the original block, it will affect the instance. And it won't affect the places of the instance that are different from that original block.

1.  Configure Port

1.  Can change the instance by adding some new port inside of the instance or clear those new ports once defined. The ports of the instance are the same as the original block, cannot clear those ports, can only rename those original block's ports and doesn’rsquo;t affect the original block.
1.  Once changed something inside the instance, when changing something inside of the original block, it cannot affect like changing the name of the port to the instance but if change the type of port at Original block, it will clear the old type of port at instance block and keep as the original block’s port.
1.  Can change the port inside of the original block, it will affect the instance.

1.  Access to instance layer

1.  At the higher layer's workplace double click on the instance, we access the workplace of that instance.
1.  At the higher layer's workplace double click on the original block on the “Add Component” sidebar, we access the workplace of that original block and can see the “Layer” dropdown list.
1.  Inside the workplace of that instance, on the toolbar, it displays the name of the instance under the type name of the layer, and doesn't see the “Layer” dropdown list anymore. Next is the “PARENT NAME” with the name of the higher layer containing that instance. The last is the “META TYPE” with the name of the original block of the instance.
1.  Once clicked on the name at the “PARENT NAME” at the toolbar once went inside the instance, it returns to the higher layer that contains that instance. And in the toolbar, appears the “Layer” dropdown list.
1.  Once clicked on the name at the “META TYPE” at the toolbar once went inside the instance, it returns to the original block of the instance. And in the toolbar, appears the “Layer” dropdown list.

1.  Create new layer from an instance

1.  You can [create a layer from the instance's model](#select-a-group), and that layer will appear on the “Layer” dropdown list.

1.  Category

1.  When adding or changing the category on the instance, it will save in the “Component Info” screen of that instance and don't affect the original block, but cannot see that category in the “Add Component” sidebar of the higher layer.
1.  When adding or changing the category on the original block, it will save in the “Component Info” screen of that original block and affect the instance and can see that category in the “Add Component” sidebar of the higher layer.

#### Right Click On A Block

Procedure right click on a block

1.  Right-click on a block in the workboard.  Four green squares appear on the top, bottom, left and right of that block and the block is invisible and disabled.

![](/assets/images/lokahi/image21.png)

Figure 61

2.  You can click on the square to change it to red-state. When in the red-state, that square cannot connect from the red location.
3.  When you close all 4 squares (turning them all red color), the block is invisible and disabled.
4.  You can enable the block again when you click to change the square from red to green for the 4 squares and R-click on the block.

#### Hover On A Block

Procedure hover on a block

1.  The name of the block appears and four (4) small squares appear on the top, bottom, left and right of that block.

![](/assets/images/lokahi/image10.png)

Figure 62

2.  You are able to then click on one of the 4 squares and [Connect blocks on the workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>) by drawing an arrow between 2 blocks.

#### Double Click On A Block (at Contract or Element)

On a higher layer, you can double-click on a block in the workboard to go inside that block at under that layer.

Procedure: double click on a block

1.  Case 1: Open the Contract, double-click on a block in the workboard or in the “Add Component” menu on the left sidebar. It will change from the Contract workboard to the Element workboard (layer below) of the block that has been clicked. Only administrators, engineers and advanced users have the permission to perform this task.
2.  Case 2: Open Element, double-click on a block in the workboard or in the “Add Component” menu on the left sidebar. It will change the Element workboard to the Logit workboard of the block that has been clicked. Only administrators and engineers have the permission to perform this task.
3.  Case 3: On the Logit there is no change if you Double-click on a block in the workboard or in the “Add Component” menu on the left sidebar.

#### Change the Name Of Block

On any layer, you can change a block's name in the workboard. The name in the workboard at first state is the name you named for the layer. After you rename that block's name on the workboard, that name does not affect the layer's name.

Procedure rename for a block at Workplace

1.  Click on a block in the workplace or click the “[Hide/Show name](#hide/show-name-icon)” icon to see the icon to change the block’s name.
2.  Click on the “pencil” icon next to the name of the block.
3.  After clicking on the pencil icon of a block in the workplace, the block's name will be displayed in a form below that block contained in an input field and a button "Description" .
4.  We can enter any character and blank space in that input and the input once clicked on the "Description" button. This description of the Register block will appear under the Register's name on the [Dapp](#dapp) page at the Contract tab.
5.  You can change the name then click “tick” to save. Or click the “X” icon to close the dialog and don’t save the name.

![](/assets/images/lokahi/image92.png)

Figure 63

#### Click On An Element Block (at Contract)

You can click, or double click on a block to manipulate or configure for that block in the Contract workboard.

Procedure click on a block

1.  When you click on a block a blue border surrounds that block and has "x" icon display.  Click the "x" icon to delete the block.

![](/assets/images/lokahi/image96.png)

Figure 64

#### Click On A Logit Block (at Element)

You can click, or double click on a Logit block to manipulate or configure that block on the Element workboard

Procedure: click on a block

1.  Case A: When you click on a block a blue border surrounds that block and has an "x" icon display.  Click the "x" icon to delete the block.  In the Element’s workboard, an "x" and "Add Component" ![](/assets/images/lokahi/image23.png) icons appear as well when you click on a block. Click the "Add Component" ![](/assets/images/lokahi/image23.png) icon, and a “Configure port and Component info” screen appears as described in [Edit Elements / Element Blocks on The Workboard](#edit-layer-on-the-workboard).

![](/assets/images/lokahi/image95.png)

Figure 65

Case B: In the "[Lock](#the-“lock”-status) state:  A locked state means you cannot configure the block. When you still allow you to click on a block, but you cannot see the “x” icon. In the Element, and can click on the "Add Component" ![](/assets/images/lokahi/image23.png) icon to open “Configure port and Component info” screen but you cannot create new Logit from this block because it is locked.

#### Definition Of A Register And Operation Block (At Logit Layer)

A “Register” or “Operation” block are two units of a model and can see at the Logit’s workplace.

Definition of a “Register” block

1.  The “Register” block is a place where you can add the message and contains the message is sent from the “Operation” block.

![](/assets/images/lokahi/image69.png)

Figure 66

Definition of a “Operation” block

1.  The “Operation” block is a place where you can add the condition so if the message is satisfied, the message can go through from the “Register” blocks to the other.

![](/assets/images/lokahi/image98.png)

Figure 67

#### Click On A Register or Operation Block (Logit)

You can click, or right click on a “Register” or “Operation” block to manipulate or configure that block on the Logit’s workboard.

Procedure: click on a block

1.  Case A: When you click on a block a blue border surrounds that block and has an "x" icon display.  Click the "x" icon to delete the block.  In the Logit’s workboard, the "x", "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Markings"![](/assets/images/lokahi/image2.png), "Add Component" ![](/assets/images/lokahi/image23.png) icons appear as well when you click on a “Register” block. And the "x", "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Guard" ![](/assets/images/lokahi/image22.png)icons appear as well when you click on a “Operation” block. Click on "Manage Hashtag"![](/assets/images/lokahi/image6.png) and "Add Markings"![](/assets/images/lokahi/image2.png) to open the "Manage Hashtag" and "Edit Markings" screen. Click the "Add Component" ![](/assets/images/lokahi/image23.png) icon, and a “Configure port and Component info” screen appears as described in [Edit Elements / Element Blocks on The Workboard](#edit-layer-on-the-workboard).

    Case B: In the "[Lock](#the-“lock”-status)" state: When you click on a block, you cannot see "x" icon at three layer types. In the Logit layer, you can see the icons: "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Markings"![](/assets/images/lokahi/image2.png), "Add Guard"![](/assets/images/lokahi/image22.png), and "Add Component"![](/assets/images/lokahi/image23.png). You can click on "Add Component" ![](/assets/images/lokahi/image23.png) icon to open the “Configure port and Component info” screen but cannot create a new Logit layer or edit it from this block. And you can click on the "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Markings"![](/assets/images/lokahi/image2.png), "Add Guard"![](/assets/images/lokahi/image22.png) icons to see and can edit but once reloaded the page it does not change anything.

#### Connecting Blocks On The Workboard (Drag An Arrow)

You can connect the blocks on the workboard by hovering over a block to reveal 4 squares and then ‘click and drag’ an arrow from any of the 4 squares to another block to create a connection.

![](/assets/images/lokahi/image76.png)

Figure 68

Procedure

1.  Hover over one block to reveal 4 squares and then ‘click and drag’ an arrow from any of the 4 squares to another block to create a connection. When clicking and dragging on the first block an orange dotted line appears and 4 small squares appear on the top, bottom, left and right of each block on the workboard, providing you with options to drag to make the connection.
2.  Once the connection is successful, it automatically changes the beginning point and the end point into the squares of 2 blocks so that the distance between 2 blocks is the shortest.
3.  The end point corresponds to the head of an arrow.

Note:

-   On the Logit, you cannot connect between 2 Register or 2 Operation blocks. It only allows you to connect between Register and Operation blocks.
-   On the Element or Contract, you can create only one arrow to connect between 2 blocks.
-   If 2 arrows overlap each other, the arrow that is created first will be under the arrow which is created second.

#### Create Corner Or Angle For An Arrow

You can adjust an arrow to add a corner or angle to the arrow by double clicking on the arrow to place a draggable spot on the arrow and then drag to adjust the shape.

![](/assets/images/lokahi/image91.png)

Figure 69

Procedure

1.  When you double-click on an arrow for the first time, it creates an orange spot on that arrow that is draggable to change the shape of the arrow. The spot is a stop spot and you can drag the arrow spot to move the line to suit your needs.  You can create more orange spots on one arrow if needed.
2.  When D-click on that arrow a second time, it deletes that orange spot on that arrow. The section of the arrow contains that spot will return to its previous state as a straight line connection.

#### Click On An Arrow

You can begin to define your connection when you click on an arrow.

![](/assets/images/lokahi/image71.png)

Figure 70

Procedure

1.  On the workboard, when an arrow (port connection) between 2 blocks is yellow, it means the connection has not been defined yet.

Case A: "Not in "[lock](#the-“lock”-status) state": When you click on an arrow, that arrow is highlighted, a blue rectangle box contains that arrow, and displays beside the "Connection"![](/assets/images/lokahi/image1.png) icon, and the "x" icon. If you want to delete the connection, click the “x”. In the Element and Contract, you can click on the "Connection"![](/assets/images/lokahi/image1.png) icon to see the [Step 1: "Make your connections"](<#define-a-connection-(make-your-connection)>) to start configuring the Element. In the Logit, when you click on an arrow connects from “Register” block to “Operation” block, it appears "x" and "Add Variable"![](/assets/images/lokahi/image14.png) icons and if you click on "Add Variable"![](/assets/images/lokahi/image14.png), it opens the “Variable” screen. When you click on an arrow connects from “Operation” block to “Register” block, it appears "x" and "Add Expression" ![](/assets/images/lokahi/image20.png)icons and if you click on "Add Expression", it opens the “Edit Expression” screen.  
Case B: "In the "[Lock](#the-“lock”-status) state": You cannot configure an arrow when in the locked state. You can still click on a yellow arrow, but you cannot see the “x” icon. In the Element and Contract, you see the "Connection"![](/assets/images/lokahi/image1.png) icon and can click on to open "Step 1:Make your connection" and change the connection then define that port and complete the steps but once you reload the page it does not change anything. And in the Logit, you can click on the "Add Variable"![](/assets/images/lokahi/image14.png) icon to see a “Variable” screen or click on the "Add Expression" ![](/assets/images/lokahi/image20.png)icon to see a “Edit Expression” screen and can enter in those screens then save but once you reload the page it does not change anything.

2.  When hovering over the port after clicking a yellow dot appears with a red border that will move on that port if we move the mouse pointer on that port.

#### Select A Group

On the workboard you can use the mouse to highlight and select a group blocks and arrows on the workboard to configure and define that specific group.

![](/assets/images/lokahi/image26.png)

Figure 71

Procedure

1.  When clicking and dragging to select a group, a rectangle will be drawn to highlight the group of Elements together on the workboard.
2.  Once the group is highlighted, an "Add Component" and "x" icon is displayed.

3.  In the Element and Logit workboard we can  click on the "i" icon.
4.  When click the "Add Component" ![](/assets/images/lokahi/image23.png) icon, a "Configure port and Component info" screen appears, with the process as chronicled in the [Edit Elements / Element Blocks on The Workboard](#edit-layer-on-the-workboard) section.
5.  When you click the "x" icon it deletes that group.

6.  We can move the group to a new area on the workboard as desired.

#### Define A Connection (Make Your Connection)

After you have clicked on the "Connection"![](/assets/images/lokahi/image1.png) icon on the workboard of any connection between 2 Logits or 2 Elements at Element/Contract’s workboard, the “Step 1: Make Your Connection” screen appears. You can then define the connection.

![](/assets/images/lokahi/image39.png)

Figure 72

Procedure Step 1 Make your connection

1.  The next step is to configure the connection on the arrow between 2 components in the Element/Contract workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an"Connection"![](/assets/images/lokahi/image1.png) icon that allows you to configure the connection. Click on the "Connection"![](/assets/images/lokahi/image1.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
2.  Next, drag an input shape in column 1 to the desired output shape in column 2 to define the input/output connection. With the condition below, it only allows you to:

-   Only the input port can connect with the output port.
-   Create a connection between the “Register” blocks that are added to the input and output ports and those “Register” blocks that have the same type.
-   Create a connection between an “Operation” block and “Register” block that are added by the input and output ports.
-   Create a connection between an “Operation” block and “Operation” block that are added by the input and output ports.
-   It does not allow you to connect the input and output are added at the “Register” blocks if they have a different type.

3.  The ports in column 2 satisfied with the port being dragged will be kept and their border will change to green color. The port that is being dragged has a required hashtag that is set at "Component Hashtag" of the “Register” or “Operation” block, their shape in column 2 will be kept and full fill green color. The other shapes that are not satisfied with the conditions allowed to connect will disappear in column 2.

For more information about Required Hashtag and Component hashtag, see [Configure Port](#configure-port) and [Manage Hashtags](#manage-hashtags).

4.  When a connection is created successfully, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.

For more information about Register type and how to add, see [Define Type](#define-type) and [Edit Markings](#edit-markings).

For more information about how to set a port, see [Configure Port](#configure-port).

5.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.

Attention:

1.  For the input and output port of the Element, you have to tick to choose which input and output of the Element will become the input and output port for that Element.  It cannot create more than one connection with the same id port (each port has an id) so we only create one connection from an input port and an output port with the same id. (You can also place more than one of the same Logit blocks in the Element workboard to create a model so it can be looped again with the same input and output ports’ name when editing the Element).
2.  When delete all connections have been defined at "Step 1", the \[Next\] button changes to \[Save\] button to save editing. And then the gray arrow becomes the yellow arrow once you click the \[Save\] button at "Step 1".
3.  Once deleted some input/output ports at the lower layer, then go back to the layer containing those input/output ports which have made connections before, as the row contains the connection at "Step 1: Make your connection", it will automatically delete those connections related to those ports which have been deleted.
4.  Once merged 2 Registers are the same type on the higher layer at the connection. After that go to the Logit and change the type of one of 2 Registers or the same type but change one of both is auto generate TransactionID the other is not auto generate TransactionID, it displays the connection that has connected between those Register blocks with error message "Connection error" and the "!" icon. The \[Next\] button is disabled. When hovering the "!" icon a tooltip shows "Connection error because it has deleted port". If you delete all "Connection error", the \[Next\] button is enabled if it still has the valid connection.
5.  Once renamed some input/output ports at the lower layer, then go back to the layer containing those input/output ports that have made connection before, as the row contains the connection at "Step 1: Make your connection", it displays the connection has been changed to the new name.
6.  Cannot create a connection between 2 “Register” blocks that have the type containing “String” type at the first field but different status auto-generate transactionID. For more information about transactionID, go to [Edit Markings](#edit-markings).
7.  With the port has the requirement to connect with each other (by using hashtag at “Require Hashtag” input in “[Configure Port](#configure-port)” screen and “Component Hashtag” input in the “[Manage Hashtags](#manage-hashtags)” screen are set at the ports of the layers), it will appear at “Step 1 Make Your Connections” a “Suggested” frame to let you know which ports have to connect with each other. See in figure 72.

![](/assets/images/lokahi/image89.png)

Figure 73

Procedure Step 2 Define your connection

1.  After completing Step 1 “Make Your Connection”, the Step 2 “Define Your Connections” window pops up.  In the left table, depending on the connection you have made, it will display:

-   The connection established from the output port set at "Register" connects to the input port set at "Operation", once you click on that connection, it opens the "[Variable](#variable)" screen.
-   The connection established from the input port set at "Register" connects to the output port set at "Operation", once clicked on that connection, it opens the "[Edit Expression](#edit-expression)" screen.
-   If the connection established from the output port set at "Register" and connects to the input port set at "Register", once you click on that connection, it appears the "Merge Element" screen, and it requires to choose name for Element after merged the “Register” block is set output port with the “Register” block is set input port. After merging those “Register” blocks, the messages that have been added at Logit will be merged and show all messages but still separate into 2 parts belonging to each “Register” block in the "Add Data" sidebar. And  both “Register” blocks will be added under the Register and have been chosen as a representation at "[Add Data](#add-data-sidebar)" sidebar in the higher layer.
-   Once clicked on the connection has been established from connecting an input port is set at "Operation" connects to an output port is set at "Operation", at the left table in the "Step 2 Define your connections" screen, it opens the "Guard" form which will show all conditions (only 2) at Guard screen of each Operation block (only 2) connects with each other by "and" operator.

2.  If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will be enabled for you to click.
3.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined, you are allowed to deploy. If all arrows have not been defined, the \[Deploy\] button will not be enabled.

Note:

1.  You do not have to set a condition for every connection in all cases. These conditions are the maximum or minimum value to permit between block 1 and block 2. A warning screen will still display as a reminder to set the limit number for those connections, but it is not a requirement.
2.  When you click on the gray connection - connection has been defined, you can click on the tab bar to move between “Step 1 Make Your Connections” and “Step 2 Define Your Connections”.

#### Configure Port

You can select a group and configure that group to create a new layer.

![](/assets/images/lokahi/image47.png)

Figure 74

Procedure Configure port at Logit

1.  When you click on a block in the left table of "Configure port" screen, a drop down list appears with 3 options {Input, Output, Both}.
2.  After you click on a block and choose an option, in the left table of the "Configure port" screen, a frame appears that includes "Name", "Description" input frames, "Write long Description" button and "Clear Port" button, and the "Required Hashtags" input, the "add more" (+) icon button enables.
3.  The "Required Hashtags" input fields are used to add the hashtag for the “Register” block(s) or “Operation” block(s) that have ports (Input or Output). Once added the hashtags, it will require the "Register" or "Operation" block of Logit layer has the "Required hashtags" to connect to the "Register" or "Operation" block of Logit layers have that "Required hashtags" in the "[Component Hashtags](#manage-hashtags)" input according the rule:

+“Operation” cannot connect to “Operation”.

\+ “Register” can connect to “Register” or “Operation”;

\+ The “Register” and “Operation” have to have the satisfied port.

\+ “Register”  connect to “Register”, those “Register” have to have the same type and number of fields are equal because at the type has “String” is the first field the “Register” block can set that “String” field can be the “TransactionID” by switching ON the switch “Auto-generate TransactionID” at “[Markings](#edit-markings)” screen, so if 2 “Register” block have the same type but one has ON and other OFF the switch, it cannot merge together.

4.  The "Add more" (+) icon button enables you to add more “Required Hashtag” field.

\[Note:

1.  When using the hashtags in the same "Required Hashtag" input then click "Fix it" at [Recommendation](#recommendation-feature) sidebar in the higher layer, it shows all the blocks relate to those hashtags and just choose one block in the group of block has a hashtag in the hashtags in "Required Hashtag" input, it will satisfy that recommendation and that recommendation box will be closed.
2.  When using the hashtags in the different "Required Hashtag" inputs then click "Fix it" at Recommendation sidebar in the higher layer, have to choose each block has the hashtags in each "Required Hashtag" input, it will satisfy those recommendations and those recommendations boxes will be closed if each “Required Hashtag” input are connected a block contains those Required hashtags on “[Component Hashtag](#manage-hashtags)” input.\]

3.  When you click outside to not choose the block (named for that port), in the left table of "Configure port" screen, the frame disappears and is replaced by a table that contains the information that: Configure port (\[The number of block(s) selected\] port selected) and below it lists each type of port {input, output, both and none port} with the block's number of each type.

Additional: You can enter any length in the “Description” frame and use any character to name the port.

Procedure Configure port at Element

1.  Click on each Logit block in the left table of the "Configure port" screen, on the left side appears a list that includes all the configurations for the port (chosen input, output or both type) of that Logit block.
2.  After clicking on a block and choosing an option, in the left table of the "Configure port" screen, a frame appears with "Name", "Description" input frames, a "Write long Description" button and "Clear Port" button. You have to name that port.
3.  When you click outside to not choose the block (named for that port), in the left table of "Configure port" screen, the frame disappears and is replaced by a table with the information that: Configure port (\[The number of block(s) selected\] port selected) and below it lists each type of port {input, output, both and none port} with the block's number of each type.

Additional: You can enter any length in the “Description” frame and use any character to name the port.

Procedure Component info at Logit

1.  Enter the “Name” input of "Component info" screen: Allow to enter any character.
2.  Enter or choose the old category names for that layer will be set on the “Add Component” menu.
3.  Click the \[Choose Icon\] button to choose an icon for the layer that will be displayed on the “Add Component” menu. Once you choose the \[Choose Icon\] button, the “Choose Icon” screen appears and then you can choose the already icons or upload your own icon.
4.  The “Global Rules” text box lets you set the statement to check the work status of the “Register” block on the models connected together at the Element or Contract layer.
5.  The “Local Rules” text box lets you set the statement to check the work status of the “Register” block on the model at one Logit layer.

For more information about “Global Rules” and “Local Rules”, see [Global and Local Rule](#global-and-local-rule).

Procedure Component info at Element

1.  Enter the “Name” input of "Component info" screen: Allow to enter any character.
2.  Enter or choose the old category names for that layer will be set on the “Add Component” menu.
3.  Click the \[Choose Icon\] button to choose an icon for the layer that will be displayed on the “Add Component” menu. Once you choose the \[Choose Icon\] button, the “Choose Icon” screen appears and then you can choose the already icons or upload your own icon.

#### Definition Basic Of The Unit Block And The Logic Flow On The Lowest Layer

A valid model has:

-   The model is a connected graph and does not contain any block that does not connect.
-   At least one “Start Register" block (the arrows only begin from that “Register” block) and “End Register" block (the arrows end at that “Register” block).
-   No “Operation” block is the ending point or the starting point of the model.
-   A “Register” block cannot point to a “Register” block in the workplace of the Logit layer.
-   A “Operation” block cannot point to an “Operation” block in the workplace of the Logit layer..
-   Only one arrow can go from a “Register” block to an “Operation” block and only one arrow from an “Operation” block to a “Register” block.
-   Can merge “Register” block with a “Register” block that has the same type in the higher layer.
-   Can merge “Operation” block with a “Operation” block in the higher layer.

An “Operation” block can fire the message:

-   The “Operation” block is a transition of the message.
-   The “Operation” block can fire the message when all the “Register” blocks point to that “Operation” block that has the message. If there exists at least one “Register” block that does not have any message, that  “Register” block cannot fire a message to the “Operation” block which it points to so that “Operation” block cannot fire the message to another “Register” block.

A “Register” block can have the message

-   The “Register” block is a place to contain the message.
-   The “Start Register” block (the arrows only begin from that “Register” block) of the model supposes that it always has the message.
-   If the “Register” block has been added data at Logit, or checked at least one of both options "Allow to add data at Element/Contract" at “[Markings](#edit-markings)” screen, it is supposed to be a “Start Register” in the model, that Register is eventually has the message.

Attention: If a model is invalid at the Logit/Element, it disables the Logit/Element block on the "Add Component" menu in the left sidebar and does not allow you to drag that block onto the workboard.

#### Define Type

The “Define type” feature allows you to define the messages’ type on the Logit for a project.

Note:

-   On the Logit, a “Register” block contains only one type of message.  Many Register(s) could contain many types of message(s). You can define your own type of message on Logit. The type you define will belong to only that project. And the register belongs to one type so you should only add messages that belong to that type.
-   Administrators and Engineers have permissions to manipulate this feature. Follow the steps below to define a type for a message.

Procedure

1.  The \[Define Type\] button ![](/assets/images/lokahi/image48.png) only appears in the "Add Component" sidebar menu on the workboard. At the very bottom of the “Add Component” menu, click on the \[Define Type\] button.
2.  After clicking on the "Define Type" button ![](/assets/images/lokahi/image48.png), a screen appears in the middle of the Workboard page with a title "Define Type". The "Define Type" screen has 2 tables:

![](/assets/images/lokahi/image75.png)

Figure 75

1.  The left table is "List Of Type". It has a "Search" frame and a table with 2 columns: "Name" and "Type". The table will contain all types you have defined.
2.  The right table is "Define Type" which allows you to add more types. It has a blank "Name of Type" input field, a "List of type" table with a combobox dropdown list with a default value is "ADDRESS", a "Add More" (+) icon button that enables you to add another field for your type, the \[Close\] button enables, and the "Save" button which is inactive until you enter a string in the “Name of Type” input field.

3.  Enter in the "Name of Type" input field that you want to add: You can enter the alphabet, numbers, special characters except “.” dot and blank spaces.  
    \[Note: Once you enter at least one valid character, the \[Save\] button will be enabled, but you cannot enter only blank spaces. If you enter only blank spaces or “.”, a red message below the "Name of Type" input announces that "Name type is invalid!" and \[Save\] button disables. If you enter a name that already exists, a red message below the "Type of Marking" input announces that "Type already exists!" and \[Save\] button disables.\]
4.  Clicking the “Add more” (+) icon button allows you to add more combobox options in the “List of type”.
5.  Click on each combobox to choose the type of data for the type you are defining. After clicking on the combobox:

\+ If just has one combobox, a list includes 7 basic types {String; Int;  Bool; Address; Unit; BLOCK_NUMBER; Sender} and all new types which will be defined directly from one of 6 basic types {String; Int;  Bool; Address; BLOCK_NUMBER; Sender} are displayed and you can select and save.

\+ If there is more than one field, the combobox just shows the types which have been defined directly from one of four basic types. The types combine the types that have been defined from one of 6 basic types {String; Int;  Bool; Address; BLOCK_NUMBER; Sender} don't appear in the dropdown list.

\+ If you enter the "Search" input and don't have any result, a sentence appearing in the dropdown list is "No Results found". If you enter and have some result, the dropdown list will keep the results that the string has entered in the "Search" input.

6.  Click \[Save\] button: In the left table the newly created type appears in the last row.
7.  If you want to edit a type that has been defined in the “List of Type” table, hover on the row that contains that Type, at the "Type" column of the right side table, a group button appears {Edit; Delete}. Hover on these icons. Click on the \[Delete\] icon button to delete that type or click on \[Edit\] icon button to edit that type.
8.  When you click the \[Edit\] icon button, it automatically fills in the "Name of Type" input field the Type and in the "List of type" displays all types of that Type. You can change the name and change the type in each combobox or add more. Then click the \[Save\] button to save the changes.

\[Note: If you edit again the types are defined from one of 6 basic types {String; Int;  Bool; Address; BLOCK_NUMBER; Sender}, the "Add more" icon button does not show again. \]

9.  If you click the \[Cancel\] button, it turns the "Define Type" table to the initial state and the \[Cancel\] button disappears and \[Save\] button is inactive.
10. If you enter a name that exists, a red message below the "Name of Type" input announces that "Type has existed!" and \[Save\] button disables.

Attention:

-   When a type has been added to a “Register” block, the expression and variable of the “Operation” block connected to that “Register” block must be declared to correspond to that “Register” block.
-   When the “Register” blocks have not been given a defined type, the “UNIT” type has been added for those “Register” blocks.
-   When the expressions of the “Operation” blocks have not been defined, the “UNIT” message will be returned as well.
-   The “UNIT” type cannot be used to define with the other types.

#### Edit Markings

The “Edit Markings” feature allows you to choose the type of the “Register” block and add the messages (the data) for that “Register” block by clicking on the “Add Marking” ![](/assets/images/lokahi/image2.png)icon on the block and accessing “Edit Markings.”

![](/assets/images/lokahi/image33.png)

Figure 76

Procedure

1.  The "Markings" screen only appears on the Logit after you click on the “Register” block and then click on "Add Marking" ![](/assets/images/lokahi/image2.png)icon then choose the “Edit Markings” option.
2.  After clicking on the “Edit Markings” option, a screen appears in the middle of the Workboard page titled "Markings". The "Markings" screen has 2 tables:

3.  The left table is "List Of Markings"". It includes the "Search" frame and a table with 2 columns "Number" and "Message". The table will contain all messages you have added on this “Register” block.
4.  The right table is "Type of Marking" and allows you to add messages. The right side includes:  a "Type of Marking" combobox with the default type is “Unit”. The "Add Data Of" combobox to move alternatively between the “Markings” screen of the other “Register” block of that Logit or the “Register” blocks are allowed adding data at Element/Contract. The "Add Message" field contains a "Number" input field and a "Message" field.  The \[Close\] button is enabled, and the \[Save\] button disabled until you enter information. The checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract".

5.  Choose one option in the "Type of Marking" combobox:

-   After clicking on the "Type of Marking" combobox, a dialog box "Edit Type" says "If you change the current type, all messages were defined will be deleted. Are you sure change Type?". Click on the \[Yes\] button to reveal the dropdown list. After you choose the Type, the "List of Markings" table will be cleared all messages. If you don't choose one you can click outside the list and all messages and Type types are still there.
-   After clicking \[Yes\] to view the dropdown list, it contains all types defined for this project (including all types have been created but not the 3 basic types {String; Int; Bool} except {Unit}).  At the bottom of the dropdown list there is a "Define Type" option which takes you to the "Define Type" screen so you can create a new type if needed. There is a "Search" input field. If you enter that input and don't have any result, a sentence appears in the dropdown list is "No Results found" and "Add More Type" option to open the "Define Type" screen. If you enter and have some result, the dropdown list will keep the results that the string has entered in the "Search" input.

4.  After choosing the type of Type for the “Register” block, you can add the messages belonging to this Type. In the “Number” input field, enter the number of message(s) that have the same data.
5.  Underneath the “Message” table you have the related input field that you choose from the dropdown:

-   "STRING" input field: Allows you to enter the alphabet, special characters, numbers, blank spaces. The "STRING" is on the top of the form and contains the "STRING" input field.
-   "INT" input field: You are only allowed to enter the integer number. If you enter an invalid value after you click the \[Save\] button a red error message announces that "Value is invalid" below that input field. (Ex: real number, string).
-   "BOOL" input field: Allows you to choose 2 types in combobox {True; False}.
-   "UNIT" input field: Only 1 default value is "Unit", this input is disabled.
-   The field of "BLOCK_NUMBER" and "Sender" type is disabled and displays the sentences which are "@BLOCK_NUMBER@" and "@SENDER@".
-   Other options may exist that were created for that project as well, with the associated information from the 4 basic types ({String; Int; Bool; Unit}) in the input fields.

6.  The "!" ![](/assets/images/lokahi/image74.png) icon in each row can be hovered over to view a tooltip to show all types available in that field.
7.  If you want to edit a message has been added in the “List of Markings” table, hover on the row of the message and on the right side of the column a group button appears {Edit; Delete}. Hover on these icons, and click on \[Delete\] icon button to delete that message or click on \[Edit\] icon to edit that message.
8.  When you click \[Edit\] icon button to edit the message, you can make the changes you prefer and then click the \[Save\] button to save the changes.
9.  If you don’t want to add message at Logit, you can configure that “Register” block can add message in the Element or Contract by ticking 2 checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract" on the “Markings” screen. If you don't tick the checkboxes on the “Markings” screen of a “Register” block, at higher layer, when open the "Add Data" sidebar and choose that block in the workplace, it does not show the "[Add Data](#add-data-sidebar)" box of that “Register” block.
10. You can change to another “Markings” screen of another “Register” by clicking on the "Add Data Of" combo box of a “Register” block, it shows the list of all “Register” blocks of that Logit layer and a "Search" input field.
11. If the “Register” block belongs to another type except for UNIT, the Markings screen will appear the "ADD TRANSACTIONID" form. Only the type has the first field is belongs to "STRING" type, the switch "Add TransactionID" appears. If the first field of that type is not "STRING" type, the switch is replaced by "!" icon with the content is "Only String field is used as a TransactionId" and cannot auto-generate any transactionID by taking the first field of the message, instead of we have to enter our own transactionID.
12. You can enter the transactionID or not, because transactionID to make the message can be distinct.
13. Enter in the fields below then click the \[Save\] button to create a message. \[Note: You can create empty message\]

\[Note:  If you want to update the type, you can navigate to the [“Define type”](#define-type) screen to edit the type. But after you changed the type, when go to the “Markings” screen of a “Register” block which used that type to define the message’s type, all the messages in the "List of Marking" table will have a red button \[Error message\] and under the "Type of Marking" combobox a red message announces "This type has been changed!". That means you have to edit these messages again by clicking on the \[Edit\] button of each message and change the value inside that message to make the message valid. Change the value inside that message then click \[Save\] and the \[Error message\] will disappear at that message. Once you edit all messages, the red message will disappear.\]

#### Variable

The “VARIABLE” feature allows you to choose the variables of the message of the “Register” block to make the condition for a transition to the “Edit Guard” feature of the “Operation” block at the Logit and the message returns after satisfied the condition (If the messages satisfy the condition, it allows those messages go through).

![](/assets/images/lokahi/image56.png)

Figure 77

Procedure

1.  Open Logit of a project. Drag a “Register” block and an “Operation” block to the workboard. Connect the “Register” block to the “Operation” block with an arrow with the root of the arrow at the “Register” block and the arrowhead at the “Operation” block. Click on the arrow between the two blocks, then click the "Add Variable"![](/assets/images/lokahi/image14.png)icon on the connected arrow.
2.  The “Variables” screen appears:

-   A sentence "Please choose the value of "{register's name}" to represent for variables in condition". Underneath, it always has a “TransactionID” field with the “Register” block have a type is different with “UNIT” type and if the type has the first field is “String” type, belong to the status “auto-generate transactionID” or not, the first field can be merge with the “TransactionID” field. For more information about transactionID, go to [Edit Markings](#edit-markings).
-   Inside the form below the “TransactionID” field has the right and left input fields and the sentence in the middle "Represent for". The left inputs will display the name of the type that has been defined from the basic type and the basic type. In the right input is an empty input with the placeholder sentence is "Enter value". Or if the “Register” block of the connection has been added a type, it will add the available variable names which are created based on the name of the field.
-   If it has the condition in the “Guard” and “Expression” of the “Operation” block of the “Register” block points to, a form that contains the textboxes have a condition in Guard, Expression's "IF" textbox of the Operation block. If in Guard, a sentence will appear at the top of Guard's textbox "'{operation's name}" has been added to the condition:". If in "IF" textbox in Expression, it will appear a sentence in the top of Guard's textbox '"{Register's name that Operation points to}" has been added condition:". And cannot enter inside those textboxes.
-   If it doesn’t have any condition in the “Guard” and “Expression” of the “Operation” block of the “Register” block points to, the right inputs are empty and allows a string to enter from the alphabet, a number but after entering at least one alphabet character. Don't allow you to enter a blank space, a string is started from number character and the special characters except "\_" underscore character. If you enter the invalid string, it appears a red error message "Value is invalid!" under the right input.

3.  You can define the variables corresponding with the fields of the “Register” block. With the available variables, you can click the “x” icon of that variable to delete and create a new one by typing on the input and pushing the \[Enter\] key on the keyboard.
4.  Click \[Save\].

Note: With the variables which have the same name are defined at the different places (at the connections of the “Register” blocks point to the same “Operation” block), it will compare their value with each other. If the values are different, it doesn’t allow you to go through the next place.

#### Edit Guard

The “Edit Guard” feature allows you to set the condition for transition of the variables of the message in the Register block. If the messages satisfy the condition of the “Operation” block, it allows those messages to go through.  If the messages aren't satisfied with the condition of the “Operation” block, those messages are still staying at the “Register” block which now contains them.

![](/assets/images/lokahi/image5.png)

Figure 78

Procedure

1.  Open Logit of a project. Drag a “Register” block and an “Operation” block to the workboard. Connect the “Register” block to the “Operation” block. Click on the “Operation” block. Click "Add Guard" ![](/assets/images/lokahi/image22.png) icon on the “Operation” block then choose the “Edit Guard” option.
2.  Once clicked on that “Operation” block and then clicked the "Add Guard" ![](/assets/images/lokahi/image22.png)icon, the "Edit Guard" screen appears with a textbox, the \[Save\], the \[Close\], and \[Help Center\] buttons always enabled.
3.  Enter the condition using the IDs that have been chosen at the “Variables” screen. It has the suggestion feature that when having the variables have been defined at the arrow connected to this "Operation" block, it shows the default values and the variables have been defined. The default values are:

-   Function: isTrue(a), isFalse(a), isEmpty(a).
-   Logical operator: and ; or ; xor; ! - not.
-   Constant variable: True, False, NULL.
-   Mathematical operator: +, -, \*, /, %
-   Comparison operator: > < >= <= = <>

4.  If we don't enter enough for the elements of the expression it has a warning that appears under the text box "It isn't an expression!". If we enter not enough elements of an operator, a warning appears under the text box. Can enter only variables that have or has not been defined.
5.  Click the \[Save\] button, the content inside that textbox has been saved. After opening the "Edit Guard" screen again, the content is still there.
6.  Once you click on the "Help Center" button, a "Help Center" dialog appears that has a "Search" frame and a content recommendation about The Expressions, Writing Expressions, adn Common Functions. Once entered in the "Search" frame, it appears in the other content about Function, Logical Operator, Constant Variable, Mathematical Operator, Comparison Operator, Variable.

Attention: If you do not add any condition to "Edit Guard", it still allows the message to go through.

\[Note:

1.  Once used some variable in Guard of Operation block but haven't defined those variables in the Variables screen of the Register blocks point to that Operation, a recommendation has a title "Remove undefined variables in conditions" with a content is:

\+ in Logit layer: "Our model can not pass through {Operation's name}  if we use undefined variables {list of variables of that Operation block which have not defined} in conditions." and Fix it and Show buttons.

\+ in Element/Contract layer: "Our model can not pass through {Block's name contains that Operation block}  if we use undefined variables {list of variables have not defined of that Operation block} in conditions." and \[Show\] buttons.

\+ Once clicked on \[Show\] button, it will highlight that Operation block on the workplace if in the Logit layer and highlight that block containing that Operation block if in the Element/Contract layer.

\+ Once clicked on the \[Fix it\] button, it will open the Guard of that Operation block.\]

#### Edit Expression

After the message goes through the “Operation” block, the “Edit Expression” feature regulates the output of the “Operation” block, by creating a new message and depending on the condition of the output the type of message can then be created. If the messages satisfy the condition of the Expression screen, it allows those messages to go through. If the messages aren't satisfied with the condition of the Expression screen and there is an “Else” case, those messages go through.  If the messages aren't satisfied with the condition of the Expression screen and there is no “Else” case, those messages disappear at the “Register” block which now contains them.

![](/assets/images/lokahi/image70.png)

Figure 79

Procedure

1.  Open Logit of a project. Drag a “Register” block and an “Operation” blocks to the workboard. Connect the “Operation” block to the “Register” block. Click on the arrow that connects the two blocks. Click "Add Expression"![](/assets/images/lokahi/image20.png) icon.
2.  After clicking on the "Add Expression"![](/assets/images/lokahi/image20.png) icon, the "Edit Expression" screen appears with a combobox with the default value is "Return" option, the \[Add Else\], the \[Save\], the \[Close\], and \[Help Center\] buttons always enabled and one input is {If} if you change the combobox to "If" option, and the quantity of other inputs depend on the type of the arrow head (Register). Each field of the type of the arrow head will have an input in the "Message Then" form and the same input at the "Message Else" form. If the type of the arrow head contains the "UNIT" type, the input is disabled and contains default value is "UNIT". If the type of the arrow head contains anything other than "UNIT" type, the input is enabled. If you click on the \[Add else\] button, there are more available inputs in the "Message Else" form like the "Message Then" form. You can click the \[Delete\] icon button next to the "Message Else" form to close that input.
3.  Enter the condition using the IDs have been chosen on the “Variables” screen. It has the suggestion feature that when having the variables have been defined at the arrow connected to this "Operation" block, it shows the default values and the variables have been defined at the “Register” blocks connected to the “Operation” block which points to this “Register” block. The default values are:

-   Function: isTrue(a), isFalse(a), isEmpty(a).
-   Logical operator: and ; or ; xor; ! - not.
-   Constant variable: True, False, NULL.
-   Mathematical operator: +, -, \*, /, %
-   Comparison operator: > < >= <= = <>

4.  If we don't enter enough for the elements of the expression it has a warning that appears under the text box "It isn't an expression!". If we enter not enough elements of an operator, a warning appears under the text box. Can enter only variables that have or has not been defined.
5.  Or if we let empty some inputs, after clicking the \[Save\] button, a red warning sentence “This input is required!” appears under that input.
6.  Enter the values of the inputs for the new message that belongs to the type of the “Register” block which the Operation block points to. At the first time, if the  “Register” block which the Operation block points to has a type, then the variables will automatically fill in those fields which correspond to each field of the type of that “Register” block.

\[Note: It always has a “TransactionID” field with the “Register” block have a type is different with “UNIT” type and if the type have the first field is “String” type, belong to the status “auto-generate transactionID” or not, the first field can be merge with the “TransactionID” field. For more information about transactionID, go to [Edit Markings](#edit-markings).\]

7.  If you want to use some [Extra API functions](#add-extra-api-function) to execute once you deploy the contract, click the \[Add Extra API\] button and type one API function that you want to use.
8.  Click the \[Save\] button, the content inside that textbox has been saved. After opening the "Edit Expression" screen again, the content is still there.
9.  Once you click on the "Help Center" button, a "Help Center" dialog appears that has a "Search" frame and a content which recommends about The Expressions, Writing Expressions, adn Common Functions. Once entered in the "Search" frame, it appears another contents about Function, Logical Operator, Constant Variable, Mathematical Operator, Comparison Operator, Variable.

Attention: If you do not have any condition in the "Edit Expression" screen, it still returns a response that the messages belong to "Unit" Type.

\[Note:

1.  Once used some variable in "IF" box of Expression screen of Operation block(at Logit and Step 2) but haven't defined those variables in the Variables screen of the Register blocks point to that Operation and not fill in the input field in Expression screen, a recommendation, which appears when finished fixing the recommendation of Guard, has a title "Remove undefined variables in conditions or data sending" with a content is:

\+ in Logit layer: "Our model can not go to {Register's name which is that Operation points to}  if we use undefined variables {list of variables have not defined of that Operation block in the If box} + {list of variables have not defined of that Operation block in the fields of Expression (Display NULL if don't enter in field)}  in conditions or data sending." and Fix it and Show buttons.

\+ in Element/Contract layer: "Our model can not go to {Register's name which is that Operation points to}+ of +{Block's name contains that Operation block}  if we use undefined variables {list of variables have not defined of that Operation block in the If box} + {list of variables have not defined of that Operation block in the fields of Expression (Display NULL if don't enter in field)}  in conditions or data sending." and \[Show\] buttons.

\+ Once clicked on the \[Show\] button, it will highlight that Register block which that Operation points to on the workplace if in Logit layer and highlight that block contains that Operation block if in Element/Contract layer.

\+ Once clicked on the \[Fix it\] button, it will open the Expression screen of that Operation block points to Register.\]

#### Add Extra API Function

The Extra API functions are used in the “Expression”, input and output screen of the “Decision” block to implement the function with the contract once deployed. Example: After you want to deposit your money from your wallet into the contract, you can add a deposit API function on a transaction on the contract.

The Extra API can only be used on the “Add Extra API” input of the “Expression”, input and output screen of the “Decision” block. In the  “Add Extra API” input can use only one  “Extra API” function.

Table of the Extra API function and constant can be used:

No.

Name

Description

1

deposit(value)

an API function will let sender will send a value of money into the contract

2

contractSendTo(spender, amount)

an API function will let the contract will send an amount of WEI to spender (account address)

3

transfer(toAddress, value)

an API function will send a value of money from the sender to the user has the “toAddress” account address

4

transferFrom(fromAddress, toAddress, value)

an API function will send a value of money from a user has “fromAddress” account address to the user has the “toAddress” account address

5

sender

the constant variable will let us know who is manipulating (executing on a transaction contains this API function) on the contract

6

owner

the constant variable will let us know who deployed the contract

7

contractAddress

the constant variable will let us know the address of the contract

8

BLOCK_NUMBER

the constant variable will let us know the current index of a block on the blockchain

9

value

the constant variable will let us know the current value which a user send to contract

Procedure

1.  Open the " Expression" screen, in 2 forms “Message Then” and “Message Else” will have an “Add Extra API” button. Open the “Choose Value Data” screen - the output connection which is pointed from a “Decision” block to a normal block - will have an “Add Extra API” button.
2.  After clicking the “Add Extra API” button, the input will open.
3.  Type in the input, the hint of the Extra API function and the constant variables that can be used in the Extra API function will be listed.
4.  Can only use one Extra API function.

#### Create & Define Hashtags

The “Define Hashtag” feature lets you create and define the hashtags of the “Register” block(s) and “Operation” block(s) on the Logit of a project. Then you can use that hashtag to add to a Logit or Element with the [Manage Hashtags function](#manage-hashtags). When you drag that Logit or Element block into the Element’s or Contract’s workboard, it will require you to connect the Logit or Element block required in order to finish the model. Or you can use the hashtag in checking the model by using [Global and Local Rule](#global-and-local-rule).

![](/assets/images/lokahi/image90.png)

Figure 80

Procedure

1.  The "Define Hashtag" button ![](/assets/images/lokahi/image44.png) appears on the "Add Component" sidebar menu on all layers: Open the  workboard. At the bottom of the “Add Component” sidebar menu, click the “Define Hashtag” button.
2.  After clicking on the "Define Hashtag" button ![](/assets/images/lokahi/image44.png), a screen appears in the middle of the Workboard titled "Define Hashtag" with 2 tables:

3.  The left table is "List Of Hashtag". It has a "Search" frame and a table with 2 columns "Hashtag" and "Description".
4.  The right table is "Define Hashtag". It contains a "Hashtag's name" input field with a placeholder sentence "E.g shipping", a "Hashtag's Description" text input field with a placeholder "Description", and the \[Save\] button is inactive.

5.  Enter in the "Hashtag's name" input field: It allows you to enter the alphabet, and number but have to appear after an alphabet character. If you enter just one valid character, the \[Save\] button will be enabled. But it does not allow you to enter only number characters or the strings have numbers at first, not the special character, and not blank space and maximum 500 characters. If you enter those forbidden cases, a red message below the "Hashtag's name" input announces that "Name Hashtag is invalid!" or "Maximum hashtag is 500 characters" and the \[Save\] button disables.
6.  Once you have entered the name, click the \[Save\] button and in the left table the new Hashtag will appear in the last row, and the "Hashtag's name" input field will be reset to allow for another entry.
7.  If you want to edit a hashtag that has already been defined in the “List of hashtag” table, hover on the row that contains the hashtag, and a group button {Edit; Delete} appears. Click on the \[Delete\] icon button to delete that hashtag. Click on the \[Edit\] icon button to edit that hashtag again.
8.  When you click the \[Edit\] button in the "Define Hashtag" table it allows you to edit the "Hashtag's name" and  "Hashtag’s Description" and you can then \[Save\] or \[Cancel\].
9.  If you click the \[Cancel\] button, it turns the "Define Hashtag" table to the initial state (empty in "Hashtag's name" input field and in the "Description" input field) and the \[Cancel\] button disappears and \[Save\] button is inactive.

Note:  If you enter only a blank space, a red message displays "Name Hashtag is invalid!" and the \[Save\] button disables. If you enter a name that exists already, a red message announces the "Hashtag has existed!" and the \[Save\] button disables.

#### Manage Hashtags

The “Manage Tag” feature allows you to add the hashtags to the “Register” block(s) and/or “Operation” block(s) on the Logit of a project that were added to the project with the [Create & Define Hashtags](#h.9dillg985o1w) function. This feature helps us to build the relationship and check the statement between the Logit blocks.

This setting will require you to connect Logit/Element blocks contain the input or output ports are applied “[Required Hashtags](#configure-port)” to the Logit or Element blocks that have those hashtags in the “Component Hashtags” field at “Manage Tag” screen of block to finish the model. Or to tick the hashtags on the model to use in the [Global and Local Rule](#global-and-local-rule). Or when a “Register” block is added a hashtag at Logit but is not the "Start Register" or "End Register" to create the "Join State Circle Shape" at [Flow Graph](#flow-graph-overview).

The "Manage Tag" screen can be found by clicking on a "Register" or "Operation" block and then clicking on the “Manage tag” icon of that block and selecting “Manage Tags.”

![](/assets/images/lokahi/image11.png)

Figure 81

Procedure of the "Manage Tag" screen on the Logit

1.  Open Logit workboard.
2.  Drag a Register block or Operation block into the workboard.
3.  Click on a block and then Click on the "Manage Tag" icon.
4.  Choose "Manage Tags" to bring up the "Manage Tag" screen with the following options:

\+ The "Component Hashtags" input field.

\+ The \[Save\] button is enabled.

5.  On the "Manage Tag" screen, click on the "Component Hashtags" input and a dropdown list shows all of the hashtags that have been defined or “No Results Found” if none exist. Once you choose a hashtag, it is added to the field with an "x" icon that allows you to easily remove it if desired.
6.  On the "Manage Tag" screen, click on "Required Hashtags" input and a dropdown list shows all of the hashtags that have been defined or “No Results Found” if none exist. Once you choose a hashtag, it is added to the field with an "x" icon that allows you to easily remove it if desired.

Note:

-   The inputs in both “Component Hashtags” and “Required Hashtags” allow you to start typing to search for hashtags with the results displaying that contain that string.
-   For more information about "Required Hashtags" input, see at [Configure Port](#configure-port).

7.  Once you have added all the hashtags you require, click the \[Save\] button.

Procedure of the "Manage Tag" screen at the ["Flow Graph](#flow-graph-overview)" screen

The "Manage Tag" screen can also be found on the Element and Contract on the "Flow Graph" screen as described below, but it will only display the "Component Hashtags" field and doesn't require you to connect all Elements that have a relationship with "Required hashtags".

1.  On the Element or Contract, drag the blocks have a suitable model inside those blocks into the workboard.
2.  Click the \[Flow Graph\] button on the bottom toolbar.
3.  Do 2 cases below:

4.  Case 1. Click on each State shape {"Start state shape"; "End state shape"; "Join state rectangle shape"; "Join state diamond shape"}.
5.  Case 2. Click and push \[Command\] or \[Shift\] buttons on the keyboard at the same time on the "Start state shapes" with a state shape that belongs to one of 3 state shapes {"End state shape"; "Join state rectangle shape"; "Join state diamond shape"}.

6.  Click on {Manage Hashtags} option and a "Manage Tag" screen appears and shows a "Component Hashtags" input field.
7.  On the "Manage Tag" screen, click on "Component Hashtags" input and a dropdown list shows all of the hashtags that have been defined or “No Results Found” if none exist. Once you choose a hashtag, it is added to the field with an "x" icon that allows you to easily remove it if desired.

Note:

-   The inputs for “Component Hashtags” allow you to start typing to search for hashtags with the results displaying that contain that string.

6.  Once you have added all the hashtags you require, click the \[Save\] button.

#### Recommendation Feature

The “Recommendation” feature reminds and guides you to finish the steps on the workboard. Once you complete all of the recommendation steps, you will be ready to deploy.

![](/assets/images/lokahi/image30.png)

Figure 82

Attention: The "Recommendation" feature is only available on the Element/Contract. At Logit, some feature of recommendation will be limited.

Procedure for Recommendations when no hashtags or only “Component hashtags” were added by engineers to the component(s):

1.  Go to the workboard of the Logit/Element/Contract and click on the \[Recommendation\] button in the bottom toolbar in the bottom right of the screen.
2.  Once you click on \[Recommendation\], a sidebar opens on the workboard in the right side of the screen with 2 tabs: "Should Do" and "Should Not Do".  
    \[Note: If the workboard is empty, the initial status of the "Should Do" tab includes a message "Drag at least one Component into the workboard" and "Should Not Do" will be empty.\]
3.  When you drag the block(s) onto the Logit/Element/Contract’s workboard that has no hashtags or only “Component hashtags” then the “Should do” tab in the "Recommendation" sidebar will state "You need to connect all Components together".

\[Note: For more information about “Component Hashtags”, see at [Manage Hashtags](#manage-hashtags) \]

4.  Once you have connected 2 blocks by an arrow, the “Should Do” will change message to "Set the parameters for the connection between {the component at the root of the arrow} with {the component at the end of the arrow}" and a "Fix it" button and "Show" button is enabled.
5.  Once you click on the "Show" button, it highlights the arrow between the 2 blocks on the workboard.
6.  Once you click the "Fix it" button, it automatically opens the ["Step 1: Make your connection"](<#define-a-connection-(make-your-connection)>) screen of the arrow connection between the 2 blocks on the Workboard.
7.  When you have not defined a port for a Logit/Element layer, it appears a recommendation box "Please add at least one port".
8.  Once you finish defining the connections, the requirements for this notification in the "Recommendation" sidebar will disappear and you can move on to other recommendations or if all are done you are ready to deploy.

Procedure for Recommendations when both "Component Hashtags" and "Required Hashtags" were added by engineers to the component(s):

1.  Go to the workboard of the Element/Contract and drag the block that has only "[Required Hashtags](#configure-port)" as a part of the Logit onto the Workboard.
2.  Click on the \[Recommendation\] button in the bottom toolbar and a sidebar will open on the workboard in the right side of the screen with 2 tabs: "Should Do" and "Should Not Do".  
    \[Note:If the workboard is empty, the initial status of the "Should Do" tab includes a message "Drag at least one Component into the workboard" and "Should Not Do" will be empty.\]
3.  The "Should Do" tab will state:

4.  Case 1 The required hashtag in set at input port: A recommendation "Use components relate to one of {the hashtags appear on the "Required Hashtags" input at anywhere of that Logit} You should use any components have relationship with "{the hashtags appear on the "Required Hashtags" input}" at "output ports"" appears with a "Fix it" button below.
5.  Case 2 The required hashtag in set at output port: A recommendation "Use components relate to one of {the hashtags appear on the "Required Hashtags" input at anywhere of that Logit} You should use any components have relationship with "{the hashtags appear on the "Required Hashtags" input}" at "input ports"" appears with a "Fix it" button below.

6.  Once clicked "Fix it" button, it shows a suggestion bar contains the Logit layers have "Required hashtags" in the "[Component Hashtags](#manage-hashtags)" input satisfy:

7.  That "Register" or "Operation" block has "Required hashtags" in the "Component Hashtags" input.
8.  That "Register" or "Operation" block has "Required hashtags" in the "Component Hashtags" input has to set a port.
9.  That "Register" or "Operation" block has "Required hashtags" in the "Component Hashtags" input and has been set to a port which has the right port type with the port of the "Register" or "Operation" has "Required hashtags".
10. The "Operation" cannot be required to connect with the other "Operation", so even if 3 things above are satisfied, the block containing the port satisfied won’t appear in the suggestion bar.

11. Once dragged the block on the suggestion bar, a box has a content "Make Connection for {the component contains only "Required Hashtags"} with {the component contains only "Component Hashtags"} Drag arrow to connect from {the component contains only "Required Hashtags"} to {the component contains only "Component Hashtags"} to make the connection for them" appears and has a "Fix it" button and "Show" button.
12. Click the "Show" button and it will highlight the 2 blocks on the Workboard.
13. If you click the "Fix it" button, it automatically draws an arrow from the block that has "Required hashtags" to the block that has "Component Hashtags" in the workboard.

\[Note: You can also connect yourself by [dragging an arrow](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>) instead of using the “Fix It” button\]

8.  Once the 2 blocks are connected by an arrow, the “Should Do” box changes to "Set the parameters for connection between {the block at the root of the arrow} with {the block at the top of the arrow}". And the "Fix it" button and "Show" button are enabled again.
9.  Once you click on the "Show" button, it highlights the arrow connection between the 2 blocks.
10. Then, you can click the "Fix it" button and it automatically opens the ["Step 1: Make your connection"](<#define-a-connection-(make-your-connection)>) screen of the arrow connection between the 2 blocks on the Element's/Contract’s Workboard.
11. When you have not defined a port for a Logit/Element layer, it appears a recommendation box "Please add at least one port".
12. Once you finish defining the connections, the requirements for this notification in the "Recommendation" sidebar will disappear and you can move on to other recommendations or if all are done you are ready to deploy.

Other Recommendation examples:  
The examples below do not include a comprehensive list of every possible recommendation, but provide some base information for certain examples to provide guidance for how to utilize the recommendation feature.

1.  Once you set the Statement at [Flow Graph](#flow-graph-overview): The system may provide a recommendation after completing the Formal verification process if something is discovered to be wrong, then you would see a notification that states "Update your model to make State ... and State ... are eventually active/exclusive" in the "Recommendation" sidebar.  This lets you know that you have to fix the model (on the Logit/Element) to let the path of messages go to the State you set in the Flow Graph.
2.  If you have dragged a Logit block onto the workboard that has a valid model but doesn't have a Register block to initiate a [“Start State” and “End State”](#flow-graph-overview) into the Element's Workboard, the "Recommendation" sidebar will display 2 messages: "Add at least one Start to complete your model" and "Add at least one End to complete your model".
3.  When a block has an invalid model, "Recommendation" sidebar will display a message: "Update or replace '<Component Name>' Component with a valid Component", '<Component Name>' Component is not a valid model, please update or replace this Component by removing it and using another valid Component."
4.  If you delete the ports used to make a connection between blocks, the "Recommendation" sidebar will display a notification: "Update parameters for connection between "..." and "..." and a message: "This connection's parameters are not valid, please update them."
5.  The statements have set at [“Global Rules” and “Local Rules”](#global-and-local-rule) when get the FALSE value, then in the “Recommendation” will appear a box has the content "Update your model to reach {the statement sentence is False}" requires you to update your model to get the statement as you want. If you don't want to update, just delete that statement on the "Global Rules" or "Local Rules" input at ["Component Port" screen](#configure-port). The result of the statement of “Local Rules” will return and display at “Recommendation” sidebar at the Logit layer when that statement gets the “False” value. The result of the statement of “Global Rules” will return and display at the “Recommendation” sidebar at the Element/Contract layer when that statement gets the “False” value.

#### Flow Graph Overview

The “Flow Graph” feature allows you to configure the flow graph by connecting the lower layers. You can set the statement for your flow graph by clicking on the “Flow Graph” button at the bottom of the workboard. The “Flow Graph” statement is the condition of the shapes on the flow graph that allows those shapes to work and to allow the messages to go into the flow graph.

![](/assets/images/lokahi/image78.png)

Figure 83

Attention:

-   The \[Flow Graph\] button and the "Flow Graph" screen is only available on the Element and Contract. Even if you don't have any blocks on the workboard, the \[Flow Graph\] button will still appear on the bottom toolbar but the flow graph will just be blank when you click on it.

-   Engineering note:  To draw a flow graph, the model has to be a [valid model](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer).

Definition and Features of Flow Graph

The shapes in the flow graph have 3 types which are a circle, a rectangle or a diamond. Those shapes in the flow graph have been called “State”.

![](/assets/images/lokahi/image34.png)

Figure 84

1.  The “Flow Graph” shapes and their attributes are defined in the following manner:

-   The definition of the "Start state shape":  The "Start state shape" is created when a "Register" block only connects and points to the "Operation" block(s).  \[Note: An “Operation block cannot be at the starting point of a model.\]
-   The definition of the "End state shape": The "End state shape” is created when a "Register" block is connected and pointed from the "Operation" block(s).  \[Note: An “Operation block cannot be at the end point of a model.\]
-   The definition of the "Join state rectangle shape": The "Join state rectangle shape" is created when an "Operation" block is connected and pointed from more than 1 "Register" block and that "Operation" block has to connect and point to another "Register" block.
-   The definition of the "Join state diamond shape": The "Join state diamond shape" is created when an "Operation" block connects and points to more than 1 "End state shape" and 1 "Join state rectangle shape" at the same time; or more than 1 "Join state rectangle shape"; or more than 1 "End state shape".
-   The definition of the arrow: An arrow has been created by the “Register” block(s) are not the "Start state shape", "End state shape" and the “Operation” block(s) are not the "Join state rectangle shape", the "Join state diamond shape".
-   The definition of the "Join State Circle Shape":  the "Join State Circle Shape" only appears if the "Register" block is not "Start state shape", "End state shape" and does not point to the "Operation" block(s) are not the "Join state rectangle shape", the "Join state diamond shape" and that "Register" block has to be added a hashtag at Logit layer. This State will disappear once deleted all hashtags of this “Register” block at Logit. \[Note: This "Join State Circle Shape" does not appear if that “Register” block points to the "Operation" block(s) are the "Join state rectangle shape", the "Join state diamond shape", that Register's hashtags will be displayed in the other "Join State" at Flow Graph.\]

2.  The "Statement" box within the “Flow Graph” is created by clicking on the options of a “Statements” menu by highlighting a shape or multiple State shapes in the “Flow Graph”.  Once the “Statements” menu appears in the bottom of the screen you can click on the option you want to select and a “check” symbol appears and a statement appears in the "Statements" sidebar displaying the action.

1)  Case 1: The “Statements” Menu includes 1 option: {Manage Hashtags}

1)  This occurs when you click on one of the “Start State” shapes.
1)  The "Manage Hashtag" option of a “Statements” menu: Once clicked on {Manage Hashtags} option, a "Manage Tag" screen appears and shows a "Component Hashtags" input field. Once clicked on that "Component Hashtags", a dropdown list shows all hashtags have been defined. Once chosen the hashtags for that State or group of suitable State, then click the \[Save\] button on "Manage Tag" screen. Those hashtags will display beside the number of that State.
1)  The hashtags at Flow Graph of which layer belong to that layer and not affect like the hashtags at Logit layer. The hashtags at flow graph don't join to the statement of ["Global Rules" and "Local Rules"](#global-and-local-rule) at the Logit layer. And when adding additional hashtags at the Logit layer, it automatically updates those hashtags on Element/Contract 's Flow graph. It does not update the hashtags at Contract layer's flow graph if add hashtags at Element layer's flow graph.

1)  Case 2: The “Statements” menu has these 2 options: {Manage Hashtags; Eventually Active}

1.  This occurs when you click on one shape that is NOT a Start State shape.
2.  This occurs when you select both a "Start state shape" and another one of the 4 state shapes {"End state shape"; "Join state rectangle shape"; "Join state diamond shape"; “Join State Circle Shape”} at the same time using click and hold \[Command\]/\[Ctrl\] or \[Shift\].
3.  The meaning of the "Eventually Active" option is the message that belongs to the State shape or the one connected to the "Start state shapes" must belong to one of 4 state shapes {"End state shape"; "Join state rectangle shape"; "Join state diamond shape" ; “Join State Circle Shape”}.

![](/assets/images/lokahi/image62.png)

Figure 85

3.  Case 3:  The “Statements” menu has these 3 options: {Eventually All Active; Eventually At Least One Active; Exclusive}

1)  The options for “Eventually All Active”, ”Eventually At Least One Active”, and “Exclusive” appear when you select at least 2 state shapes at the same time that do not include a Start state shape or when you select at least 2 state shapes AND a Start state shape.

2)  The meaning of “Eventually All Active”, “Eventually At Least One Active” and “Exclusive”:

-   "Eventually All Active" option is that messages coming to the group of State shapes must "arrive at the same time".

-   "Eventually At Least One Active" option is the message that comes to the group of State shapes must "arrive at least one state shape of the group of State shapes".

-   "Exclusive" option is the messages come to the group of State shapes must "not arrive at the same time".

4.  Case 4: The “Statements” menu does not show any options

1)  This occurs when you select 2 Start state shapes at the same time with the \[Command\]/\[Ctrl\] or \[Shift\] buttons.

2)  You can select one option or more than one option from the “Statements” menu by ticking the box next to the option(s) you require.

3)  You can click on one or multiple of “Eventually All Active”, ”Eventually At Least One Active”, or “Exclusive”  and a “check” symbol appears and a statement appears in the "Statements" sidebar that displays the number of that state in the flow graph.
    Note:  You can untick the options to delete.  Or you can delete the statements by clicking on the “Delete” icon next to those statements.
4)  Once you tick the radio box, it changes the color from black to orange and in the body of the Flow Graph screen and it will display a combination of the State shapes that have been selected with this option.

    Note:  You are allowed to group State(s) with more than one option of the 3 options {Eventually All Active; Eventually At Least One Active; Exclusive}, but the options in the combination cannot be impacting each other.

5)  Move Feature:  Click and hold at the same time to move in the body of the "Flow Graph" screen:

When clicking on the shape:

a. You can click and hold on a shape to move the entire flow and change the graph to another presentation view. Once you let go of the click, the shape will be placed in the new place on the space of the body of the "Flow Graph" screen.

When clicking on empty space or an arrow:

a. If you click and hold any point in empty space or an arrow, a blurred black circle will appear and it will move the screen view in any direction that you drag. Once you release the click, it will show the new screen view.

5.  The “Flow Graph” \[Zoom in\] and \[Zoom out\] buttons can be used with a mouse or trackpad:

a. The default zoom is set to 100%.

b. Once clicked on "-" Zoom in icon button:

Case 1 in \[10% -> 100%\]: when clicking the "-" icon it decreases 10% will minus in the zoom numbers.

Case 2 in \[100% -> 200%\]: when clicking the "-" icon it decreases 20% will minus in the zoom numbers.

Case 3 in \[200% -> 400%\]: when clicking the "-" icon it decreases 50% will minus in the zoom numbers.

c. Once clicked on "+" Zoom out icon button:

Case 1 in \[10% -> 100%\]: when clicking the "+" icon it increases 10% will plus in the zoom numbers.

Case 2 in \[100% -> 200%\]: when clicking the "+" icon it increases 20% will plus in the zoom numbers.

Case 3 in \[200% -> 400%\]: when clicking the "+" icon it increases 50% will plus in the zoom numbers.

6.  \[Full screen\] button:

a. Once you click on the \[Full screen\] icon in the "Flow Graph" screen, it will close the "Add Component menu" sidebar on the left and the "Recommendation" sidebar on the right (if these sidebars are already opened) and cover the entire workboard.

b. You can then click the \[Full screen\] icon to close full the "Flow Graph" screen and it will open the "Add Component menu" sidebar and "Recommendation" sidebar again (if these sidebars were already opened) and returns to the normal “Flow graph” view (covering the lower part of the workboard).

7.  \[Exit\] button: You can click on the "x" icon of the "Flow Graph" screen to close it entirely. You then have to click the \[Flow Graph\] button to open again.
8.  \[Flow Graph\] button: You can click on the \[Flow Graph\] button to see the State status of the flow graph.
9.  \[Model detail\] button: You can click on the \[Model detail\] button to see the detail status of the flow graph (entire of the net).

“Flow Graph” Procedure:

1.  On the workboard of the Element/Contract, click on \[Flow Graph\] in the bottom toolbar.
2.  Drag the Logit/Element blocks with a model inside into the Element's/Contract's workboard.
3.  Click the \[Flow Graph\] button on the bottom toolbar.
4.  Once you drag the Logit/Element blocks with a model inside onto the Element's/Contract's workboard and click on the \[Flow Graph\] button. A "Flow Graph" screen appears and displays from the bottom toolbar to the middle of the workboard. The "Flow Graph" screen has:

\+ The \[Save\] button disabled, a "Zoom in and Zoom out" button group with the default 100%, a "Full screen" icon button and a "Exit" icon button.

\+ In the body of the "Flow Graph" screen singly placed in the screen.

Note: If you drag the valid blocks onto the workboard and after that you change that model of that block become to [a valid model](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer) and click on the \[Flow Graph\] button, the "Flow Graph" screen will display only the “Start State Shape”.

5.  Connect the the Logit/Element blocks to create an arrow:

Case 1: If the arrow connecting the blocks does not have a defined connection, the flow graph will not display. If we access the “Statements” menu {Eventually Active; Eventually All Active; Eventually At Least One Active; Exclusive}  a warning pop up "! Flow Graph" and state "Your model has not been completed. Please finish all the tasks on the recommendation list to set these statements." This lets us know we have to connect the flow graphs to create a bigger flow graph, then we can set the statements.

Case 2: If the arrow connecting the blocks has a defined connection, then the "Flow graph" screen can display the bigger flow graph and allow us to set these statements in the “Statements” menu {Eventually Active; Eventually All Active; Eventually At Least One Active; Exclusive}.

6.  The statement saves the State of the grouping and sets the options for that group and the statements will appear in the "Statements" sidebar and are arranged with the newest at the bottom of the Statements list. Then the \[Save\] button is enabled.
7.  Once you click the \[Save\] button, it sends the statements in to Lokahi for formal verification to check the rightness of the State of that Flow Graph and updates the New list of Statements into "Statements" sidebar (the older list of statements will be deleted) and at the same time it will send the “Statement” list to save the setting of the entire State shape of that flow graph to the Lokahi server to check the correctness of the statements of the flow graph. Then the \[Save\] button is then disabled.
8.  If the result from the Lokahi Formal verification process is False, a message will appear "Update your model to make State ... and State ... are eventually active/exclusive" in the "Recommendation" sidebar to let you know that you have to fix the model (the model on the Logit/Element) in order to allow the path of messages to go to the State you set in the Flow Graph.

\[Note:  If you update the flow graph again by adding or deleting block(s) to extend or decrease the net but you do not change or delete the statements, then an error warning "Statement error" may display and it won't send those error statements to the Lokahi server. When you hover over an "i" icon in this case, a message shows up with "Statement error because {the Numbers of those States have missed} have been deleted, you should delete this statement".\]

9.  Once you have completed the Flow graph and all of the items in the [Recommendation feature](#recommendation-feature), you are potentially ready to [deploy](#h.3ew3d88u4eb6) from the Contract.

#### Add Data Sidebar

The “Add Data” sidebar allows you to add the data to the “Register” block(s) on the Logit of a project at the Element/Contract’s layer when you don’t have permission to manipulate on the lower layer.

Procedure

1.  If you want to add a message at Element or Contract, you have to tick 2 checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract" on the “[Markings](#edit-markings)” screen of the “Register” block which you want to add.
2.  Open Element/Contract’s workboard.
3.  Drag a valid Logit/Element block into the workboard. A layer is valid when it has a valid model inside. For more information about a valid model, go to [A Logit Flow On Lokahi](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer).
4.  Click on the \[Add Data\] button at the bottom toolbar.
5.  Once dragged some valid blocks into the workplace, even if it has not created a valid model on that layer, it opens on the right side of the workboard page a “Add Data” sidebar. And show the boxes corresponding with all the “Register” blocks are allowed to add data on Element/Contract belonging to the valid model of the Logit/Element block.
6.  Once clicked the box of Logit block on the "Add Data" sidebar of Element, it shows all of the "Register" blocks of Logit block has “Register” blocks have been ticked the "Allow to add data in Element/Contract" checkboxes will be displayed by a box has the name of the "Register" block.
7.  If at Element or Contract has defined connection between 2 “Register” blocks - it means in "Step 2: Define your connection" screen, you have chosen to merge those 2 “Register” blocks have been merged into one “Register” block, it will display the “Register” name has been chosen to represent for both “Register” blocks. Once click on the “Register” box in the “Add Data” sidebar, it shows all “Register” blocks have been merged with at maximum 3 messages in the list of message if it has added and that “Register” box is just only appeared under the Logit box contains that “Register” block has been chosen as a representation, and in the Logit box contains the “Register” block didn't be chosen as a representation will be disappeared.
8.  Once clicked the box of Element block on the "Add Data" sidebar of Contract, it shows all the Logit blocks have “Register” blocks have been ticked the "Allow to add data in Element/Contract" checkboxes will be displayed by a box has the name of the "Register" block.
9.  We can name the “Register” block on the Logit's workplace to display the Register's name in the "Add Data" sidebar. If we don't name the Register block, it will display the name "register".
10. Once click on the box on the "Add Data" sidebar to expand the box, it shows the type of that Register and the first 3 messages of the list of messages of that "Register" blocks and the number of a message in one row. And at the bottom of the box, it has a "Add or show more message" button.
11. It will update the data which is added at Logit on the higher layer at the "Add Data" sidebar if that Logit/Element block has not been added to any data in the higher layer.
12. It won't update the data which is added at Logit on the higher layer at the "Add Data" sidebar if that Logit/Element block has been added data in the higher layer..

Attention: This feature depends on inheritance to avoid the conflict.

13. Once clicked on the "Add or show more message" button, it opens the "Markings" screen of the "Register" block. We can add more messages but can not change the type of that Register.

Note:

-   When you don't choose any Logit/Element block on the Element/Contract's workplace, it shows all boxes of the Register blocks have permission to "allow user to add data".
-   Once you choose a Logit/Element block or select a group, it shows only a box of the Register block has permission to "allow user to add data"  or the group of "Register" blocks on the "Add Data" sidebar.

#### Global and Local Rule

The “Global and Local rules” feature allows you to set the statement for the model to check if the message in the “Register” block can reach the other “Register” on the model or not. If the result of the statement is false, it will let you know you have to fix the model to satisfy your purpose by a recommendation.

![](/assets/images/lokahi/image87.png)

Figure 86

Definition for the Global and Local Rules

1.  The “Global Rules” and “Local Rules” inputs are enabled to enter only at “[Component info](#configure-port)” of Logit layer.
2.  The statements at "Global Rules" input are just affected at Element and Contract. The statements at "Local Rules" input are just affected at Logit.
3.  It will suggest the hashtags have been defined to be like a sensor to set on a “Register” block. The sensor will get “True” value or active if it has the message stays at that “Register” block at a time on the time axis. And the sensor will get a “False” value if it does not have any message at that “Register” block at a time on the time axis.
4.  There are two types of a hashtag can work on this feature: "#is\_" and "#now\_" these are the prefixes of a hashtag could add.

-   "#now\_": when the hashtag containing the prefix “now” is true at a state, it is true only at that state. It means it sets “True” for the hashtag at that “Register” block at a time when having a message at that “Register” block. When you set the hashtag has the prefix “#now”, it is like when you set a sensor to check whether or not the message can go to the “Register” block where the sensor is set. It exists the time that the sensor cannot get true when another “Register” block that the message can go don't set the sensor there in the model or according to the logic of the model the message cannot go to the “Register” block has been set the hashtag with the prefix “#now\_”.
-   "#is\_": when the hashtag containing the prefix “is” is true at a state, it is true for all the states from that point until the end of execution. When you set the hashtag has the prefix “#is”, it is like when you set all sensors are the hashtag has prefix “#now” in the rest of the road which begins from the “Register” block that you set the hashtag has the prefix “#is” to the end “Register” block where the message can go. (Attention: There are some “Register” blocks where the message cannot go if the “Operation” block cannot fire the message to that “Register” block. For more information about how the message can fire through an “Operation” block, see at [A Logic Flow On Lokahi](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer))

\[Note: the normal hashtag corresponds with the hashtag containing prefix “now”. Ex: #a is equal #now_a\]

5.  The hashtag will use the temporal logic and logical operators to make an statement (expression) with the hashtags have prefix:

a. Temporal operators

-   “always”: Want all time in the all time axis. It means:

*   With the “Register” blocks: when you ask all the time the “Register” blocks of the model where the message(s) can reach are active in many ways of the message can go - corresponding with many time axis. If there is at least one time axis the message cannot go to the “Register” block has set a hashtag that it can go, the result of the statement is “False” even if it exists the time axis the token can go to all “Register” blocks.
*   With the statement: those statements always get “True” value.

-   “eventually”: Want a moment in the all time axis. It means

*   With the “Register” blocks: when you ask at least one time the “Register” block of the model where the message(s) can reach are active in many ways the message can go - corresponding with many time axis. If it exists at least one time axis the message cannot go to the “Register” block has set a hashtag that it can go, the result of the statement is “False” even if it exists the time axis the message can go to that “Register” block.
*   With the statement: those statements at least one time get “True” value.

-   “exclusive”: Don't happen at the same time. It means:

*   With the “Register” blocks: at least in one time a “Register” block contains those hashtags or those hashtags are in the different "Register" block, but those hashtags are active at the same time in the time axis.
*   With the statement: those statements get “False” value at the same time at least one time in the time axis.

\[Note: + The time axis is a case which is started from the first movement action of the message at the "Start Register" starts until the time which is all messages cannot go to any Register)

\+ A point of time is an action in the model that has the messages move from one Register to another Register.\]

b. The logical operators

-   and
-   or
-   not
-   imply:

\- Common format of “imply” operator: {clause A imply clause B}. It means when clause A is False, don’t care about clause B, the result of the statement is True. The statement is only False when clause A is True and clause B is False.

\- Example for “imply” operator: (#is_payment is always active) imply (#is_shipping is eventually active):

-   The meaning of the statement above is: If #is_payment always active, then #is_shipping will be active at some time in the future (at least one).
-   This statement gets a “false” value if #is_payment is always active and #is_shipping is always inactive.
-   This statement gets a “true” value:

-   if #is_payment is active at some points (but not all points) and #is_shipping is always inactive.
-   if #is_payment is always active and #is_shipping will be active at some time in the future (at least one).

\- This statement: “#is_payment imply (eventually active #is_shipping)” requires when the previous hashtag happened, the next hashtag has to happen after that in the time axis.

\[Note: The “Start Register” block can affect the result of the statement of the model. If that “Register” block is a “Start Register” block so when you set the hashtags contain prefix “#is\_” or “#now\_” there, those hashtags will get “True” value or active. For more information about the “Start Register” block, see [A Logit Flow On Lokahi](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer) \]

6.  It suggests the key words to connect the hashtags to create a statement: is, not, is not, are, are not, implies, imply, eventually active, always active, and, or.
7.  Some rules when enter in the “Global Rules” and “Local Rules” inputs:

8.  “is” = “are”
9.  “is not” = “are not”
10. “imply” = “implies”
11. “if {clause A} then {clause B}” = “{clause A} imply {clause B}”.

\=> So we can use the verbs above don’t worry about grammar.

5.  The chain of hashtag is the hashtags are connected by “and” or “or” operator. Ex: #a and #b or #c.
6.  Only allowing separating the chain of hashtag clauses becomes a group of the hashtag by "()". Ex: #a and (#x or #d). A group of hashtag is (hashtag + {and, or} + hashtag + {and, or} hashtag .....) .
7.  Do not allow separating the clauses by “()”. Ex: ((#a is eventually active) and (#b is eventually active)) is not always active; => Cannot enter in the “Global Rules” and “Local Rules” inputs.
8.  Just at the end of the hashtag chain is an object clause {" is/ are” + “eventually / always active"} to create a complete clause. A clause is a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}. Ex: (#a and #b or #c) are eventually active
9.  An object clause is “Exclusive”, and has to have more than one group of hashtags connect together by “and” operator. Ex: (#a or #b) and (#c and #d) are exclusive
10. You have to use the hashtag that has been defined at “[Define Hashtags](#h.9dillg985o1w)” screen.
11. Have to separate the statement by ";". Ex: #a are eventually active ; (#b or #c) are eventually active
12. When not entering enough the elements of an expression format, it warns "Wrong Expression".

13. Some representative expression formats:

14. a hashtag + verb{is, is not, are, are not} + object{eventually active, always active}; . Ex: #is_a is always active; #now_a is eventually active; #a and #b are not always active;
15. a hashtag + {and, or} + a hashtag + {and, or} + a hashtag .... + verb{is, is not, are, are not} + object{eventually active, always active, exclusive}; . Ex: #is_a and #now_b are not always active; #a or #b are eventually active; #now_a and #now_b are exclusive;
16. a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}+ {and, or} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active} + ...{more clause} ; . Ex: #a is eventually active and #b is always active;
17. a group of hashtag + {imply, implies} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active, exclusive}; . Ex: #a implies #b is eventually active;
18. a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}) + …{more clause} + {imply, implies} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active} + ….{more clause} ; . Ex: #a is eventually active imply #b is always active;
19. (a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active} + {imply, implies} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}) + verb{is, is not, are, are not} + object{eventually active, always active} ; . Ex: (#a is eventually active imply #b is always active) is eventually active;
20. object{eventually active, always active} + a group of hashtag; . Ex: always active #a; eventually active #a;
21. object{eventually active, always active} + (hashtag + {and} + hashtag + {or} hashtag .....); . Ex: eventually active #now_a or #now_b;
22. object{eventually active, always active} +(hashtag + {imply, implies} + hashtag); . Ex: eventually active #now_a imply #now_b;
23. ( a group of hashtag / a hashtag + {imply} + a group of hashtag / a hashtag ) + {and} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag / a hashtag ) + {and} + .....  + object{exclusive}; . Ex: (#now_a and #now_c) and #now_b exclusive; #now_a imply #now_c and #now_a imply #now_b exclusive ; #now_a and #now_a imply #now_b exclusive ;
24. ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + .....  + verb{is,are} + object{exclusive}; . Ex: (#now_a and #now_c) and (#now_b or #now_d) are exclusive; #now_a imply #now_c and #now_a imply #now_b are exclusive ; #now_a and #now_a imply #now_b are exclusive ;
25. object{exclusive} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + .....; . Ex: exclusive (#now_a and #now_c) and #now_b;
26. if {clause A} then {clause B}. Ex: if #a is eventually active then #now_b is eventually active;
27. \+ a group of hashtag + {imply, implies} + (eventually/always active + a group of hashtag ); . Ex: #a imply (eventually active #b); (This statement requires when the previous hashtag happened, the next hashtag has to happen after that in the time axis).

28. Example:

![](/assets/images/lokahi/image85.png)

Figure 87

Valid statements:

-   If #is_payment is true at “Register” block 1, then #is_payment is true at “Register” block 2, 3, 4 and is false at “Register” block 0.
-   If #is_payment is true at “Register” block 1, then #now_payment is true at “Register” block 1, 2, 3, 4 and is false at “Register” block 0.
-   If #now_payment is true at “Register” block 1, then #now_payment is true at “Register” block 1 and is false at “Register” block 0, 2, 3, 4.
-   If #now_payment is true at “Register” block 1, then #is_payment is true at “Register” block 1 and is false at “Register” block 0, 2, 3, 4.

Procedure

1.  Define the hashtag with the prefix #is\_ and #now\_ for a hashtag.
2.  Add those hashtags in the "Component Hashtags" input of "[Manage Tag](#manage-hashtags)" once clicked on a “Register” block of model then click "Manage Tags" icon.
3.  At Logit, click on "Edit" at the "Add Component" sidebar.
4.  Goto "Component Info" tab, then add the statement in the "Global Rules" input if you want to check the statement at the Element or Contract layer and add in the "Local Rules" input if you want to check the statement at the Logit layer.
5.  Depending on the model, the statement will return the result is TRUE or FALSE value. If the statement is FALSE, in the “Recommendation” sidebar will appear a box with the content "Update your model to reach {the statement sentence is False}" requires you to update your model to get the statement as you want. If you don't want to update, just delete that statement on the "Global Rules" or "Local Rules" input at "Component Port" screen.
6.  The statement contains only the hashtag does not add in the model or The statement contain the hashtag does not add in the model combines with the hashtag is added in the model and the result of that statement is False, in Recommendation sidebar appears a box with the title: "Add the hashtags "{the hashtag does not add in the model}" to your components", body: "These hashtags are not existed in your components so we can not reach "{the statements in this case}". Note: the statement has the same hashtag is not added and the statement is False, it will combine the statement in one recommendation for one hashtag.

Example:  "#a is eventually/always active". If the hashtag #a is not added, the statement is False => So it warns.

7.  The statement containing the hashtag does not add in the model combined with the hashtag is added in the model and the result of that statement is True, it suppose that statement containing the hashtag does not add in the model does not exist.

Example: "#a eventually active or #b eventually active". If #a eventually active of these statement is true, we pass them even #b does not exist.

\[Note: The result of the statement of “Local Rules” will return and display at the “Recommendation” sidebar at the Logit layer when that statement is “False” value. The result of the statement of “Global Rules” will return and display at “Recommendation” sidebar at Element/Contract layer when that statement is “False” value.\]

#### Decision Block

“Decision” block is a function block that is created by dragging only 2 "[Operation](<#definition-of-a-register-and-operation-block-(at-logit-layer)>)" blocks on the Logit's workplace to use at the Element layer and dragging only one "Decision" block on the Element's workplace to use at the Contract layer.

“Decision” block is used to transfer the value data of one block to another block if one of the values of the input block satisfies the condition is set at that Decision block.

The purpose of limiting the data can go to the next step of the model.

![](/assets/images/lokahi/image80.png)

Figure 88

Procedure for creating a Decision block at Logit layer

1.  Create a new Logit layer. Go to the workboard of that Logit layer.
2.  Drag only 2 "Operation" blocks on the Logit's workplace.

\[

-   Note: Ignore the announcement at the “[Recommendation](#recommendation-feature)” button and sidebar.

-   Attention:

-   If you drag only "[Operation](<#definition-of-a-register-and-operation-block-(at-logit-layer)>)" blocks but more than 2 blocks, it does not create a “Decision” block, even a valid block.
-   If you drag only 2 "Operation" blocks but you make a valid Logit layer by connecting with another “[Register](<#definition-of-a-register-and-operation-block-(at-logit-layer)>)” block and adding some ports for that Logit layer, it will create a normal Logit block and won’t have the functions of a “Decision” block on the Element layer.

\].

3.  Goto Element layer, on the “Add Component” sidebar, appears that the “Decision” block is active and has changed the icon from the normal icon (“Logit”  icon) to the “Decision” icon![](/assets/images/lokahi/image59.png).

![](/assets/images/lokahi/image65.png)

Figure 89

Procedure for creating a Decision block at Element layer

1.  After you have created a “Decision” block. Create a new Element layer. Go to the workboard of that Element layer.
2.  Drag only 1 "Decision" block on the Element's workplace.

\[

-   Note: Ignore the announcement at the “Recommendation” button and sidebar.

-   Attention:

-   If you drag only "Decision" blocks but more than 2 blocks, it does not create a “Decision” block, even a valid block.
-   If you drag only 1 "Decision" block but you make a valid Element layer by connecting with another valid Layer block and adding some ports for that Element layer, it will create a normal Element block and won’t have the functions of a “Decision” block on the Contract layer.

\].

3.  Click on that Decision block, and click on the “Edit Decision” icon. The “Edit Decision” screen appears and types a name.

\[Attention: You have to enter a string to name for the representation variable that will appear in the condition of this Decision block at the Contract layer. Because if you don’t, when you in the Contract layer and click on the Decision block and open the “Edit Decision” screen, a warning is “Please update this {Decision block’s name}” will announce you have to update this Decision block so you can use this Decision block to finish the procedure to connect the Decision block on the model.\]

4.  Goto the Contract layer, on the “Add Component” sidebar, appears that the “Decision” block is active and has changed the icon from the normal icon (“Element”  icon) to the “Decision” icon.

Procedure to connect a Decision block into the model

Note: This procedure is used at the Element and Contract layer.

Attention:

These rules below are used to create a valid block that contains the Decision blocks:

1.  A Decision block has to have at least one input block is a normal block by dragging from the normal block to the Decision block (Recognize by an arrow appears and start from the normal block to the Decision block).
2.  A Decision block should have at least one output block is a normal block by dragging from the Decision block to the normal block (Recognize by an arrow appears and start from the Decision block to the normal block).
3.  If the layer contains a Decision block that doesn’t have the output block of that Decision, it still creates a valid block that can be used on the higher layer or deploy successfully.
4.  If the layer contains a Decision block that doesn’t have the input block of that Decision, it cannot create a valid block and that block cannot use at the higher layer or deploy successfully.
5.  Decision blocks can connect with each other.
6.  Only one connection can be created between the blocks on the Element and Contract layer. And only one direction of an arrow can create between a Decision block and another block.
7.  The block is an input block of the Decision block that has to contain at least one “Register” block or “Operation” block that has set the [output port](#configure-port).
8.  The block is an output block of the Decision block that has to contain at least one “Register” block or “Operation” block has set the input port.
9.  The Decision blocks can connect with each other, but like the rule when you connect a Decision block with the normal block, just only create a direction from this Decision block to the other Decision block.
10. With the chain of the Decision blocks, the variables representing the field of the Register block connected with the input port of the first Decision block are rendered at the "Variable" frame of all the "Edit Decision" screens of the Decision blocks.
11. And all conditions of those Decision blocks will be merged with each other by the "and" operator.

Step 1: Procedure to connect the input block for the Decision blocks

1.  Drag a valid block contains at least one “Register” block or “Operation” block that has set an output port. And drag a Decision block into the workplace.
2.  Connect from the normal block to the Decision block.
3.  A recommendation will appear on the “Recommendation” sidebar to require you to define the connection.
4.  Click on the “Fix it” button at that recommendation or click directly on that arrow and click on the “\$” icon to open the “Choose Represent Value Data” screen.
5.  In the “Choose Represent Value Data” screen”, it requires you to name the fields as representation variables of the “Register” blocks or just choose the “Operation” blocks that are set as an output port of the input block of the Decision.
6.  Choose a name of the “Register” blocks or “Operation” blocks (that “Register” block or “Operation” block is set an output port) in the select box underneath of the sentence “Select Port in {the input block} which you want to connect with {Decision’s name}”.
7.  If the Register block is chosen in the selection box under 'Select Port in "{the input block's name}" which you want to connect with "Decision block name" label, there are:

\+ A disabled field contains the default variable is "transactionID"

\+ The next, on the left, are the fields of the type of that Register block. Each field will display the name of the type which is defined from the basic type and the name of the basic type.

\+ On the right are the inputs that are filled by a name of the type of that Register block. You can change those variables' names by yourself. Or you can let that input empty. Those fields are used to set up the representation variables.

8.  If the Operation block is chosen in the selection box under 'Select Port in "{the input block's name}" which you want to connect with the "Decision block name" label, there is nothing.

\[Attention: Besides the variables have the basic type which is one of basic types {ADDRESS, STRING, INT, BOOL, UNIT, SENDER, BLOCK_NUMBER}, depending on that variable’s type, let choose exactly what comparison operator and value to compare at the “Edit Decision” screen.\]

9.  Click the \[Save\] button of the “Choose Represent Value Data” screen.
10. Once defined successfully, the connection changes from yellow to gray and the recommendation will disappear.

Step 2: Procedure to connect the Decision blocks with the output blocks

1.  Drag a valid block contains at least one “Register” block or “Operation” block that has set an input port. And drag a Decision block into the workplace.
2.  Connect from the normal block to the Decision block.
3.  A recommendation will appear on the “Recommendation” sidebar to require you to define the connection.
4.  Click on the “Fix it” button at that recommendation or click directly on that arrow and click on the “Choose Status” icon to open the “Choose Status and Choose Value Data” screen.
5.  In the “1 Choose Status” screen, it requires you to choose one of both statuses are “No” or “Yes” by clicking on one of both radios. Click \[Next\] button to go to the second step.

\[Note:

-   If you choose the “No” option when the condition at the “Edit Decision” screen is False, the value data will assign to the output block on this “No” branch. The same with the “Yes” option.
-   Can create many branches “No” and “Yes”.

\]

6.  In the “2 Choose Value Data” screen, if the “Decision” block doesn’t have any input block, it will require you to connect the “Decision” block with an input block or another “Decision” block.
7.  Choose a name of the “Register” blocks or “Operation” blocks (that “Register” block or “Operation” block is set an input port) in the select box underneath of the sentence “Select Port in {the output block} which you want to connect with {Decision’s name}”.
8.  The next step, you will enter the expression or variables in the input fields.
9.  If the Register block is an input block that is connected with the Decision block, those fields of that “Register” block will be assigned the variables. Then we can choose which variables of the input block are assigned to which field of the output block of the “Decision” block if the “Register” block is chosen at the output block. Or we just only choose which “Operation” block of the output block to send the variables to.
10. If the “Operation” block is an input block that is connected with the “Decision” block, those variables of the “Register” block point that “Operation” block will be rendered to the output block. Then we can choose which variables of the input block are assigned to which field of the output block of the “Decision” block if the “Register” block is chosen at the output block. Or we just only choose which “Operation” block of the output block to send the variables to.

\[Attention: The variables have the basic type which is one of 6 basic types { STRING, INT, BOOL, ADDRESS, BLOCK_NUMBER, SENDER} except UNIT, depend on that variable’s type, it will filter which variable in the right side is valid. \]

11. If you want to use some [Extra API functions](#add-extra-api-function) to execute once you deploy the contract, click the \[Add Extra API\] button and type one API function that you want to use.
12. Once you choose a value for all variables or not, the \[Save\] button is still enabled to click. Click the \[Save\] button of the “Choose Value Data” screen.
13. Once defined successfully, the connection changes from yellow to gray and the recommendation will disappear. And if you choose the “No” option, the “No” icon will display on that connection, which happens the same when choosing the “Yes” option.

Procedure to connect the Decision blocks with each other in the model

1.  Drag the Decision blocks into the workplace.
2.  Connect the Decision blocks with each other. \[Note: Only create one \]
3.  A recommendation will appear on the “Recommendation” sidebar to require you to define the connection.
4.  Click on the “Fix it” button at that recommendation or click directly on that arrow and click on the “Choose Status” icon to open the “Choose Status and Choose Represent Value Data” screen.
5.  In the “Choose Status” screen, it requires you to choose one of both statuses are “No” or “Yes” by clicking on one of both radios. Click \[Next\] button to go to the second step.  
    \[Note:

-   If you choose the “No” option when the condition at the “Edit Decision” screen is False, the value data will assign to the output block on this “No” branch. The same with the “Yes” option.
-   Can create many branches “No” and “Yes”.

\]

6.  Click the \[Save\] button in the “Edit Decision” screen.
7.  Once defined successfully, the connection changes from yellow to gray and the recommendation will disappear.

Procedure to edit the Decision block

1.  Click on the Decision block into the workplace.
2.  Click the “Edit Decision” icon.
3.  When you haven't connected any input block with the Decision block, in the “Edit Decision” screen the variable frame is empty input. Allow entering the alphabet and number but the number cannot be first.
4.  If the “Decision” block has the input block which has a “Register” block connected with that “Decision” block, the combo box at the “Variable” frame will suggest the variables that were defined at the input connection of the “Decision” block.
5.  If the “Decision” block has the input block which has an “Operation” block connected with that “Decision” block, the combo box at the “Variable” frame will suggest the variables of the “Register” block connected with that “Operation” block at the Logit layer.
6.  The “Edit Decision” screen will display a select box displaying "Number" for the first time. There are 4 options {Number, String, True or False, Customize}:

-   If you choose the "Number" option, after clicking on the frame, it only allows entering the real number on the frame. It cannot enter any alphabet and special character. The operators in the operator select box can use are {>, <, =, >=, <=, <>}.
-   If you choose the "True or False" option, the input frame changes to a select box with 2 options are "True" and "False". The operators in the operator select box can use are {=, <>}.
-   If you choose the "String" option, it allows entering the number, alphabet, and some special character. When entered the wrong some character it will appear a red warning line below the frame: ‘"Value cannot contain some characters like (space, ~, @, #, ') !"’. The operators in the operator select box can use are {=, <>}.
-   "Customize": Allow to type an Expression contains the Variables of Extra API: (blockNumber, sender, contractAddress, value, owner) and the variables and the operator (+, -, \*, /). Allow typing only variables. Don't allow typing the function, boolean expression, a string not an expression.

7.  In the input under type a value or expression that you want to compare with the representation variable you have chosen.
8.  Click the \[Save\] button in the “Edit Decision” screen.

### Dapp

Dapp is an interface to use smart-contract from Lokahi. Dapp displays the information of a contract after deploying successfully on a blockchain. It will inform us about the contract’s information, provide the interface for the account deployed, that contract can add more data, can execute methods, and track the flow of the message in the model. Each manipulation on the interface will require the blockchain, so you have to sign in with an account address through the Meta Mask with the right blockchain.

![](/assets/images/lokahi/image41.png)

Figure 90

Procedure for deploying a contract

1.  Go to the workboard of a Contract layer. Then click the \[Deploy\] button of the toolbar.
2.  Choose the blockchain {Ethereum} which you want to deploy the current Contract on.
3.  Enter in the “Deployment” form the name and version of the Contract will deploy.
4.  Connect with your blockchain that you want to deploy on. To know more please access to [Deploy A Contract From The Workboard](#deploy-a-contract-from-the-workboard).
5.  Once entered and connected with your account, click the \[Deploy\] button on the “Deployment” form.
6.  Click on the [“Transaction history” button](#transaction-icon) next to the \[Deploy\] button at the toolbar.
7.  You can see your contract is now deploying.
8.  After deploying successfully, click on the name of the contract at [“Transactions” screen](#view-deployment-history-of-a-contract-on-the-dashboard) to go to the interface of the Dapp.

Procedure on the Dapp interface

1.  Once clicked on the contract name in the “Transaction” screen, if the contract deploys successfully, it will access the “Choose Transaction ID for use Smart Contract” screen of the Dapp page where you can see all of the transactionID of the contract which you’ve just clicked on the name.

\[Note: With each TransactionID - which you add in the first of each message at the “[Marking](#edit-markings)” screen of each “Register” block - it will only show the messages belong to that transactionID in the model.\]

2.  The first time you access the Dapp interface, you should look on the top of the screen. If there is no need to connect with the blockchain network, it displays the \[Network Configure\] button. If they are connected with the network even if success or failure, it displays \[Network Connected\] status button.
3.  When the connection with the blockchain fails, a red pop up will show and in that pop up have the "Back to Contracts Page" button.
4.  After clicking on the "Back to Contracts Page" button, it will load the "Smart Contracts Projects" page.
5.  When clicking on \[Network Configure\], a form will display underneath of the button:

\+ A switch "Configure with Metamask"

\+ When switching ON, underneath that switch is a form that shows "Notifications Please open metamask to set up network." if you already connected the browser with [Metamask](#configure-the-metamask-and-connect-the-metamask-with-lokahi).

\+ When switching OFF, underneath that switch is a form that shows the "URL blockchain’s network" with the input has the "URL" word.

\+ A \[Submit to fetch contract\] button

6.  When clicking \[Submit to fetch contract\] button:

\+ if the switch "Configure with Metamask" is ON, a green pop up "Fetching contract’s information successfully" appears and the \[Network Configure\] changes to  \[Network Connected\] status.

\+ if the switch "Configure with Metamask" is ON, but have installed Metamask on the browser, a \[Connect with MetaMask\] button appears under the switch. Once clicked on the \[Connect with MetaMask\] button, it will open the Extension page to install MetaMask (can install in Chrome, Opera, FireFox),

\+ if the switch "Configure with Metamask" is OFF, and don't enter any URL or invalid URL in the "URL blockchain’s network" input, once clicked \[Submit to fetch contract\] button a red pop up shows "RPC_URL invalid!

7.  Click on a transactionID is listed on the screen or you can create a new one by clicking on the \[Create New Transaction ID\] button.
8.  It opens a screen to create a Transaction ID. Enter a name for a new Transaction ID and click \[Add\] button.
9.  Once clicked on the Transaction ID, it accesses the “Dashboard” tab of the Dapp page.
10. In the toolbar of Dapp page, if you click on the Menu icon in the left, it will show you 3 options:

11. Go to Project: it will access the Workboard page of the project.
12. Change Project: it will access the “Smart Contract Project” page where all of the projects have the contracts have been deployed successfully.
13. Back to Dashboard: it will access the Dashboard page.

14. If you click on the “Smart Contract” dropdown list, you can see all versions of contract have deployed successfully and you can change alternatively between those contracts’ Dapp interface.
15. The Dashboard tab will show:

\+ A direction link "Smart Contract/{contract's name}": Can click on Smart contract to return the "Smart Contract Project" screen and can choose the other project that has the deployed contract.

\+ Overview frame will show: Contract address frame with copy button and the frame shows the balance and currency and blockchain's name.

\+ Number of viewers can see this contract.

\+ Number of TransactionID of this contract.

13. The Users tab has a table that has a "Users" column showing all viewers can see this contract. The owner can add the viewer in the Contract by clicking the \[Add User\] button to open the "Add User Or Organization To Contract" dialog. In this dialog, you can search the user or organization to add.

\[Note:

-   Only the user has deployed that contract or the user or organization has ["Write" or "Delete" access](#projects) (include add collaborator and transfer case) can see the "Add User" button and can add user or organization for that contract.
-   The User or Organization has "Read" access (they can see the project and all the contracts of that project) only see how many users or organizations, cannot see the "Add User" button.

\]

14. When you have deployed the contract on Ethereum, then at “Sign in” form after clicking \[Sign in\] button, you choose your account address on the “Account” input and “Private Key” then click \[Send to Access\] or just choose one of 10 unlocked account which that you used to deploy your contract.
15. In the “Contract” tab you can execute and add the message on your model. The Contract tab will show:

\+ A left table shows the TransactionID button, you can click to open the TransactionID screen and below it shows all the "CONTRACT INFORMATION", show the Register as nested list:

~ Element name

~ Logit name

~ Register name 1

~ Register name 2

~  …

You can click to open the nested list or click to close.

\+ A right table shows the columns corresponding with the fields of the type of that Register block and a \[Add + {Register's name}\] button. But if the “Register” block doesn't allow you to add data, you cannot see the \[Add + {Register's name}\] button. And if that “Register” block is [allowed to add data](#edit-markings) and your account address doesn’t be allowed to add message (it means that your account address has to have the [permission to add data](#add-permission-to-add-data-for-an-account-on-blockchain) in that “Register” block), you can see the \[Add + {Register's name}\] button but the button will be disabled.

16. After clicking on the \[Add + {Register name}\] button, it will appear in the "Add New {Register name}" frame. Here you can enter values for each type of input. You can add the message by clicking on the \[Add\] button.

\[Note: + When you are not the one who deployed the contract, then you cannot add data in the Dapp interface of that contract. You have to have permission to add data which is provided by the user who deployed the contract, [add permission](#add-permission-to-add-data-for-an-account-on-blockchain) for your address in that “Register” block.\]

17. Once clicked the \[Add\] button in the “Register” form, wait for the transaction to execute successfully to see the message appear on the “Register” form.
18. After that the message will be executed through the transaction which is the “Operation” block on the model. And depending on your model, that message will go to the “Register” which it can reach.
19. There is the “Transaction Activities” sidebar after you click on the Bell icon, it will display all transactions of the contract that are working.

\+ When there are no announcements, it will be displayed "No notifications right now

When you start working on contract, we’ll show the notifications here".

\+ "Hide success transaction" button has two ON_OFF states.

20. After doing a Transaction or Add a message, the "Transaction Activity" column will appear:

\+ "Transaction Successful" box contains a content:

Your transaction has been complete! Please check the "Contract Information" column to track your contract status!

-   "Pending Transaction" box contains a content:

Your transaction is executing, please wait until that transaction is complete!

-   "Pending Transaction for Approval" box contains a content:

Your transaction is waiting for your approval. Please approve or dismiss before doing a new transaction!

With the \[Approve\] and \[Dismiss\] button

-   "Transaction Failed" box contains a content:

Your transaction has been failed! Please check again your contract before doing a new transaction!

21. With the “Pending Transaction” box, you can see the “Operation” name and 2 fields of the expression fields of the “Operation”. Click the “See all data in Transaction” link button to open the details of this transaction.

\[Note:

\+ With the transaction has the [Extra API Function](#add-extra-api-function), once you click the \[Approve\] button on the “Pending Transaction” box, that Extra API function will be done.

\+ With the “deposit” Extra API function, it will appear on the “Pending Transaction” box an input to let you enter the amount of the money that you want to send to the contract address.\]

22. When clicking the \[Approve\] button of the "Pending Transaction" box, it changes to the "Pending Transaction" box. After the transaction is done, the "Pending Transaction" box changes to the  "Transaction Successful" box or "Transaction Failed" box.
23. If the account address is not allowed to execute the transaction, when you click the \[Approve\] button, a red pop up says "Approve transaction failure!" will show.

\[Note: + When you deploy in a blockchain A and there is a transaction need to approve but then you change to the blockchain B, then once clicked \[Approve\] button on the Pending box at "Transaction Activity" sidebar at Dapp page, a dialog "Approve transaction" appears and give a warning is "We found your current blockchain network ID is not equal to this contract network ID. Are you sure you want to approve?".\]

#### Add Permission to Add Data For An Account On Blockchain

The “Add Permission” allows you to add the user’s address account on the blockchain into the “Register” block(s) which have permission “Allow to add data” on the Logit of a project. Then except the user who owns the contract, the user's address account can have permission to add data on the contract’s [Dapp](#h.932d6iw0gppo) interface page.

Note:

-   The user who has deployed the contract will be added data on the contract’s [Dapp](#h.932d6iw0gppo) interface page even if that user’s address has not added the permission.
-   You have to tick 2 checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract" on the “[Markings](#edit-markings)” screen of the “Register” block before you add some account’s address to have permission to add data. Because when you don’t allow to add data, even if the account’s address has been added permission, they cannot add data.

Procedure add permission for at Logit layer

![](/assets/images/lokahi/image54.png)

Figure 91

1.  On the Logit layer, click on the “Register” block. Click on the “Add Permission”![](/assets/images/lokahi/image68.png) icon.
2.  The "Add Permission" screen appears and has 2 tables.

\+ The left table is "List Of Address". It has a "Search" frame and a table that has 1 column is "Address".

\+ The right table is "Add User Address". It has a blank "Address" textbox with placeholder is "E.g 0x45a61BD2E494f78Aa73bD7C1BF8EFF470799d14C", the \[Close\] button enables, and the \[Add\] button disables.

3.  Enter the address in the “Address” textbox.

\[Note:

-   The “Address” textbox allows entering the letters, the number, if enter just one valid character, the \[Save\] button will be enabled. But don't allow only blank space. If enter only blank space, special character, interrupting in the new line and entering blank space, a red message below the "Address" input announces that "Address is invalid!" and \[Add\] button disables.
-   The address is entered in the "Address" input should be a string has the letters are started  from "a" to "f" or from "A" to "F" and "x" and the number is started from "0” to "9" and has exactly 42 characters and right format "0x....". Ex: 0x72D9Ca808747b01e97c38C9Fc95E99FdC0a8Ab1b.
-   When you add the addresses that aren't right with the address format, once clicked \[Deploy\] button, it will display a red warning at the "[Deployment](#h.3ew3d88u4eb6)" form is "Deployed failed. Try again later!".\]

4.  The \[Add\] button is enabled to click.
5.  The address will appear on the left table. You can copy, edit or delete the addresses by hovering on each row, in the right side of the "Address" column, appear a group button {Copy; Edit; Delete}.

\[Note: In the "Lock" state: you can click on the “Add Permission”![](/assets/images/lokahi/image68.png) icon to open the "Add Permission" screen and manipulate on this screen. But after you reload the page, it does not save anything that you have just edited.\]

#### Add Permission For Contract Has Been Deployed

Once you deploy a contract at Workboard, in the “[Transactions](#view-deployment-history-of-a-contract-on-the-dashboard)” screen, as an owner of that contract you can add the user or organization as a member can see the information of the contracts that have been deployed.

![](/assets/images/lokahi/image100.png)

Figure 92

Attention:

1\. Only the user has deployed that contract or the user or organization has ["Write" or "Delete" access](#projects) (include the cases that the user or organization has been added collaborator or transferred the project) can see the icon "Add User" and can add the other user or organization for that contract.

2\. The User or Organization has "Read" access, they can see the project and all the contracts of that project. They only see how many users or organizations and can only see on that contract at the Contracts page and Dapp interface, but they can execute or add data if that user has the account address on the blockchain of the user who has deployed that contract. For more information about the Access ("Read" or "Write" or "Delete"), goto [Projects](#projects).

3\. With the user or organization are added on the contract, they only see how many users or organizations and only can see on that contract at the Contracts page and [Dapp](#dapp) interface, but they can execute or add data if that user has the account address on the blockchain of the user who has deployed that contract.

Procedure to add viewer for the deployed contract

1.  Go to the workboard of a Contract layer. Then click the \[Transaction\] button in the toolbar.
2.  Enter in the “Deployment” form the name and version of the Contract will deploy.
3.  Click on the icon "Add User" at the "Manage Users" column of the “the name of the contract at the “Transactions” screen.
4.  The "Add User or Organization To Contract" dialog appears. The "Add User To Contract" dialog has the list of users or organizations that can see the contract. It will show the label "Owner" is next to the user who owns the contract in the list of users or organizations of the "Add User To Contract" dialog.
5.  The "ADD USER OR ORGANIZATION TO CONTRACT" form contains the input "Search and select Users or Organizations". Type on the input. You can search by email, username, and organization’s name.
6.  Once clicked on the user or organization option, it disappears on the dropdown list and appears a label button has the name of that user or organization in the input Combobox. And the \[Add\] button is enabled.
7.  Once clicked \[Add\] button, those users or organizations in the input Combobox will appear on the list of the "Add User To Contract" dialog.
8.  Now, the users or organizations can manipulate that contract.

## REGISTRATION

9

### User Account Sign Up

You can register an account at the user level on the “Sign Up” page of Lokahi by accessing the “Login” page and then click on the “Sign up” link below the \[Login\] button.

![](/assets/images/lokahi/image40.png)

Figure 93

#### Creating An Account

1.  Enter in “Username” field: Use the alphabet or numbers to type a name for your account but do not use blank spaces and special characters (the only special characters allowed are ".", "\_", "@" or "-"). The username must include at least 3 characters and less than 128 characters.
2.  Enter in the “Email” field: Use a valid email to register. This email will be used to verify your account to complete the registration process.
3.  Enter in the “Password” field: Your password must be at least 8 characters and can use the alphabet, numbers, special characters, and blank spaces.
4.  Enter in the “Confirm Password” field: Type exactly the same string typed in “Password” field to verify that password will be used to log in.
5.  Check the checkbox "I accept and confirm that I have read and agree to the End-User License Agreement (EULA) of Lokahi".
6.  After entering enough information into the 4 required fields and checking the “I accept” checkbox, the \[Create new Account\] button will be enabled for you to click on to register your account.
7.  Upon clicking \[Create new Account\] check your email inbox and you will see an email has been sent from Lokahi. Open that mail and click on the link to complete the registration. The link will open the “Login” page on Lokahi and a green pop-up will appear that says "The account has been verified!", allowing you to use your account.

Note:         The email verification link will no longer be valid until you click on that link. You can resend the verification email by logging in again, and a dialog box will appear after you click on the \[Login\] button with information to let you resend the verification email.  Please use the resend button instead of re-registering, as you will have to wait 30 minutes to use the same email to register again.

#### Logging Into An Account

You can log into an account on the “Login” page of Lokahi by using your username or your verified email address along with the password chosen during registration.

![](/assets/images/lokahi/image81.png)

Figure 94

Procedure

1.  Enter in the “Username” field: type your username or the email address used to register and verify your account in Lokahi.
2.  Enter in the “Password” field: type the password for your account.
3.  After entering enough information into these two fields, the \[Login\] button will be enabled for you to click and login to your account. After logging in, it will load the Dashboard page.

Note:        If you used an account that was registered but has not been verified via your email address, you will see a ‘Login Failed’ caution dialog box stating "Your email is not valid. Please check your inbox to verify email confirmation. Don't see the email? RESEND EMAIL."

#### Change An Account’s Password

You can change an account’s password by accessing the “Login” page of Lokahi then click on the “Forgot Password?” link below the \[Login\] button. It will access the “Reset Password” page.

![](/assets/images/lokahi/image24.png)

Figure 95

Procedure

1.  Enter in the “Email” field: type your email used to register and verify your account in Lokahi.
2.  After entering a valid email in the “Email” field, the \[Reset Password\] button will be enabled for you to click on to begin the resetting of the password process.
3.  After clicking the \[Reset Password\] button, you can login to your email and you will see a mail has been sent from Lokahi. Open that mail and click on the link to complete the resetting password process.
4.  Once clicked on the “Change Password” link, it accesses the “Reset Your Password” page. Now, you can enter a new password.
5.  Once clicked \[Submit\] button, it announces to you that “Your changes have been saved! Now you can Log in with the new password". And an email is sent to your email with the content "This is a confirmation that the password for your account {your email address} has just been changed.".

Note:        The email link will only be valid for 1 hour.

## LAYER LEVELS & USER PERMISSIONS

10

### Contract

-   Contract is what gets created in the Contract layer.
-   Contract is the highest layer and can be deployed to the blockchain.
-   Contract uses the Elements have been configured to create the model.
-   All user levels could use this layer.

### Element

-   Element is what gets created in the Element Layer.
-   Element is the medium layer and the layer provides directly to the Contract layer to create a model.
-   Element uses the Logits have been configured to create the model.
-   Administrator, Engineer and Advanced user level could use this layer.

### Logit

-   Logit - is what gets created in the Logit layer.
-   Logit is the lowest layer and the layer provides directly to the Element layer to create a model.
-   Logit uses the register and transaction blocks to create the model.
-   Administrator and Engineer user level could use this layer.

### The Roles And The Functions Of Each User: User Permissions

There are 4 roles in Lokahi, with a Business User account, Advanced user account, Engineer and Administrator each having different levels of user permissions within the platform.

#### 1\. Administrator

-   An administrator can authorize and grant rights to users and has access to all permission and abilities  of an engineer, advanced user, and Business User account.
-   As an administrator you can create, view, manage, manipulate, deploy and edit the Logit, Element and Contracts of all projects in your organization. An administrator can access all layers (Logit, Element and Contract) from a project‘s layer list on the dashboard, and on the “Layer” dropdown menu on the workboard.

#### 2\. Engineer

-   As an Engineer your permissions include the ability to create, view, manage, manipulate, deploy and edit the Logit, Element and Contracts.  The engineer has access to all these levels of layers for projects created by the engineer themselves, or those projects created by other engineers, Business Users and advanced users that have been assigned or granted permission, and has all of the abilities listed in the advanced user and Business User permissions.
-   The Engineer has the ability to create and configure the Logit and Elements to promote Elements up a level for use on the layers above in contracts created by standard and advanced users to which the engineer is assigned or granted permission.
-   An engineer can access the lower layers (Logit and Element) from the dashboard of the project or on the workboard in a project‘s layer dropdown list.

![](/assets/images/lokahi/image63.png)

Figure 96

-   In addition, from the Contract workboard you can access the Element below easily by double clicking on any Element icon on the workboard. You can use the same action in the Element workboard, to go down into the Logit by double clicking on the Element icon on the workboard.

\[insert video of clicking through layers\]

#### 3\. Advanced User

-   As an advanced user, you can create, view, manage, manipulate, deploy and edit the Element and Contracts of all of the projects you have created and any projects you have been granted permission.  Advanced users also have all the abilities listed in the Business User permissions as well.
-   Advanced users can access the Element below from the project menu on the dashboard, and in the project‘s layer dropdown list on the workboard.
-   In Contract’s workboard, you can go into An Element by double clicking on the Element icon on the workboard.
-   You are able to create and configure the Element as an advanced user, but you need the Logit Elements to be created by an engineer or administrator account, and you may have to request Elements if the ones required are not available in your Element tray.

#### 4\. Business User

-   As a Business User, you can create, view, manage, manipulate the Contracts of all of project you have created or have been assigned.
-   In Contract’s workboard, you can not go into An Element.
-   You are able to create and configure the Contract as a Business User, but you need the Logit and Element to be created by an advanced user, engineer or administrator account, and you may have to request Elements if the ones required are not available in your Element tray.

## ABOUT LOKAHI

11

### Introduction: Lokahi Web Application

The “Lokahi” web application guideline describes how to use the Lokahi web application to create and manipulate projects and contracts, the methods utilized to build Components and promote them between the Logit, Element and Contract components for use in projects on the workboard and the manner in which to determine administrator authority and disseminate permissions across a subset of users.

In addition, this guideline provides an introductory overview of the tasks that can be performed within the Lokahi system and includes rudimentary instructions that describe each of the tasks.

The documentation focuses on guiding the implementation of the tasks through defined roles of each user managing the projects and contracts, including the following information:

-   Registration of an account
-   Login and changing Password
-   Introducing the levels of components, projects and contracts
-   The tasks and manipulations of projects and contracts via the Dashboard
-   The roles and administrative functions of each account in managing projects and collaborations
-   The tasks and manipulations on the Workboard
-   Guidance on how to deploy Contracts

#### What is Lokahi?

Lokahi is a new breed of tool that uses a customizable and easy to learn visual language to design software. The application was built to simplify Blockchain, IoT, and Web Services integrations but can also be used to simplify a broad range of system development requirements.

Lokahi does not require someone to know how to program in a language such as Java, Python, etc. as it has mathematically based instruction sets that can be interpreted by decoders on blockchain, IoT devices, and web servers. The instruction sets are not compiled or interpreted code, since code contains bugs even after long testing cycles.

#### Visual Language

Lokahi supports a visual language that allows users to build out complex requirements by dragging and dropping components on a workboard. The work is almost entirely done with the mouse and requires almost no typing. The visual language uses custom and stock components to represent data and Logic flows.

#### Collaborative Environment

Lokahi has full support for collaboration and has built-in support for agile methodologies. This is ideal for the development of complex systems where Contract knowledge is spread across more than one Contract and system experts. Transfer of knowledge from business to technical teams is often fraught with the potential for errors through miscommunication. Lokahi addresses this danger by allowing requirements to be entered into the tool by the person most familiar with the requirements. Ferdon’s team of engineers can collaborate with the onsite team to add custom capabilities to the Contract language.

#### Rapid Application Development of Custom Elements

Lokahi uses meta-modeling to create an assembly line for the creation of building blocks, making it possible to scale the rapid development of custom Contract languages through a process of component development and refinement. Thus existing building blocks are used to build higher-level building blocks that abstract away more of the technology and align more with business requirements.

Ferdon supports its customers by using Lokahi for Rapid Application Development (RAD) of custom Contract components. These components can then be remotely added to augment the customers' Contract language. Turnaround times for assembling custom Contract components is usually a matter of a few days.

#### Highest Levels of Reliability

Because Lokahi does not generate code, programmer error doesn’t exist. Errors of mistakes in Logic can still occur but are much less frequent because we are not double and triple handling requirements with programmers and software testers. Lokahi’s execution language was designed around formal methods including automatic theorem proving and model checking. Lokahi uses the same kinds of formal verification processes used in the development of mission critical applications such as software used in an airport control room or software built for medical devices. Deep analysis are continuously performed on the design during development and reports can be generated and reviewed that highlight design flaws.

#### Simulation Instead of Deployment and Testing

Lokahi allows entire sub-systems that may include blockchain, IoT and web services to be designed in one place. The subsystems can be simulated to provide deep insights into how the application would function. Simulation can be done in minutes allowing the several variations of a solution to be tried at a low cost. Problems that are identified and isolated during simulation can be fixed quickly and at low cost. Long develop, deploy, and test cycles are no longer needed.

#### Deployment Plans

Lokahi design is at the Logical layer. Deployment plans allow the same Logical design to be deployed to various blockchain technologies, IoT devices and web servers. This means that the same design could be deployed across several systems running different hardware, or different flavors of blockchain or instance. Technology changes down the road are painless and often only require a redeployment.

#### Immutable Deployments and Hardware Pinning IoT and Blockchain

Lokahi is often used to model Logit for combination of blockchain smart contracts, IoT devices, and web services. These components can be configured with security credentials that pin the components to specific hardware devices and to specific versions of other components. This is useful when designing for multi-party applications where the parties don’t completely trust each other. For instance, an IoT device that registered the arrival of packages on a blockchain might be used for billing purposes. In this case both parties could approve the design of the system and the components would then be deployed to an immutable status so neither party could modify any part of the system without all parties knowing.

\>        [10](<#creating-a-new-contract-layer-(dashboard)>)

[Add Business Logic to A Contract Layer (Workboard)](<#add-business-logic-to-a-contract-layer-(workboard)>) [11](<#add-business-logic-to-a-contract-layer-(workboard)>)

[Creating Elements](#creating-elements) [13](#creating-elements)

[Creating A New Element Layer (Dashboard)](<#creating-a-new-element-layer-(dashboard)>) [13](<#creating-a-new-element-layer-(dashboard)>)

[Configuring An Element (Workboard)](<#configuring-an-element-(workboard)>) [14](<#configuring-an-element-(workboard)>)

[Creating Logit](#creating-logit) [16](#creating-logit)

[Creating a New Logit Layer (Dashboard)](<#creating-a-new-logit-layer-(dashboard)>) [16](<#creating-a-new-logit-layer-(dashboard)>)

[Configuring A Logit On The Workboard](#configuring-a-logit-on-the-workboard) [17](#configuring-a-logit-on-the-workboard)

[FORMALLY VERIFYING AGREEMENTS](#formally-verifying-agreements) [18](#formally-verifying-agreements)

[Recommendation Feature & Flow Graph](#h.mka07lgg6t) [19](#recommendation-feature-&-flow-graph)

[Checking for Correctness](#checking-for-correctness) [19](#checking-for-correctness)

[DEPLOYING TO THE BLOCKCHAIN](#deploying-to-the-blockchain) [22](#deploying-to-the-blockchain)

[Deploy Contract to Blockchain](#deploy-contract-to-blockchain) [22](#deploy-contract-to-blockchain)

[Deploy Contract Layer (Workboard)](<#deploy-contract-layer-(workboard)>) [23](<#deploy-contract-layer-(workboard)>)

[DASHBOARD NAVIGATION OVERVIEW](#dashboard-navigation-overview) [24](#dashboard-navigation-overview)

[Menus & Buttons on the Dashboard](#menus-&-buttons-on-the-dashboard) [24](#menus-&-buttons-on-the-dashboard)

[(1) Dashboard (+)](<#(1)-dashboard-(+)>) [24](<#(1)-dashboard-(+)>)

[(2) Project Menu](<#(2)-project-menu>) [25](<#(2)-project-menu>)

[(3) Search & Filter Projects](<#(3)-search-&-filter-projects>) [26](<#(3)-search-&-filter-projects>)

[(4) Layers Menu On Dashboard (Contract)](<#(4)-layers-menu-on-dashboard-(contract)>) [27](<#(4)-layers-menu-on-dashboard-(contract)>)

[(5) Elements Menu On Dashboard (Elements)](<#(5)-elements-menu-on-dashboard-(elements)>) [27](<#(5)-elements-menu-on-dashboard-(elements)>)

[(6) Adjust Themes](<#(6)-adjust-themes>) [28](<#(6)-adjust-themes>)

[(7) User Profile & Settings](<#(7)-user-profile-&-settings>) [29](<#(7)-user-profile-&-settings>)

[DASHBOARD TASKS AND MANIPULATIONS](#dashboard-tasks-and-manipulations) [30](#dashboard-tasks-and-manipulations)

[Creating Projects](#creating-projects) [30](#creating-projects)

[Create New Project On The Dashboard](#create-new-project-on-the-dashboard) [30](#create-new-project-on-the-dashboard)

[Duplicate A Project On The Dashboard](#duplicate-a-project-on-the-dashboard) [32](#duplicate-a-project-on-the-dashboard)

[Rename A Project On The Dashboard](#rename-a-project-on-the-dashboard) [32](#rename-a-project-on-the-dashboard)

[Delete A Project On The Dashboard](#delete-a-project-on-the-dashboard) [33](#delete-a-project-on-the-dashboard)

[Creating Layers On The Dashboard](#creating-layers-on-the-dashboard) [33](#creating-layers-on-the-dashboard)

[Create New Contract On The Dashboard](#create-new-contract-on-the-dashboard) [33](#create-new-contract-on-the-dashboard)

[Create New Element on the Dashboard](#create-new-element-on-the-dashboard) [34](#create-new-element-on-the-dashboard)

[Manipulating Layers On the Dashboard](#manipulating-layers-on-the-dashboard) [35](#manipulating-layers-on-the-dashboard)

[Duplicate A Contract On The Dashboard](#duplicate-a-contract-on-the-dashboard) [35](#duplicate-a-contract-on-the-dashboard)

[Duplicate An Element On The Dashboard](#duplicate-an-element-on-the-dashboard) [35](#duplicate-an-element-on-the-dashboard)

[Rename A Contract On the Dashboard](#rename-a-contract-on-the-dashboard) [36](#rename-a-contract-on-the-dashboard)

[Rename An Element On The Dashboard](#rename-an-element-on-the-dashboard) [36](#rename-an-element-on-the-dashboard)

[Delete A Contract On The Dashboard](#delete-a-contract-on-the-dashboard) [36](#delete-a-contract-on-the-dashboard)

[Delete An Element On The Dashboard](#delete-an-element-on-the-dashboard) [37](#delete-an-element-on-the-dashboard)

[View Deployment History Of A Contract On The Dashboard](#view-deployment-history-of-a-contract-on-the-dashboard) [37](#view-deployment-history-of-a-contract-on-the-dashboard)

[Navigating Projects & Layers On The Dashboard](#navigating-projects-&-layers-on-the-dashboard) [39](#navigating-projects-&-layers-on-the-dashboard)

[Filter Projects & Layers On Dashboard](#filter-projects-&-layers-on-dashboard) [39](#filter-projects-&-layers-on-dashboard)

[Search On Dashboard Page](#search-on-dashboard-page) [40](#search-on-dashboard-page)

[Page Break On Dashboard Page](#page-break-on-dashboard-page) [41](#page-break-on-dashboard-page)

[Project Full Screen Page](#project-full-screen-page) [41](#project-full-screen-page)

[Filter On Project Full Screen Page](#filter-on-project-full-screen-page) [42](#filter-on-project-full-screen-page)

[Search On Project Full Screen Page](#search-on-project-full-screen-page) [43](#search-on-project-full-screen-page)

[Page Break On Project Full Screen Page](#page-break-on-project-full-screen-page) [43](#page-break-on-project-full-screen-page)

[Project Description On Full Screen Page](#project-description-on-full-screen-page) [44](#project-description-on-full-screen-page)

[User Profile & Setting](#user-profile-&-setting) [45](#user-profile-&-setting)

[My Profile](#my-profile) [45](#my-profile)

[User Management](#user-management) [47](#user-management)

[Organization](#organization) [49](#organization)

[Projects](#projects) [53](#projects)

[WORKBOARD NAVIGATION OVERVIEW](#workboard-navigation-overview) [56](#workboard-navigation-overview)

[Menus & Buttons On The Workboard](#menus-&-buttons-on-the-workboard) [56](#menus-&-buttons-on-the-workboard)

[(1) Add Component: Groups Menu (Contract)](<#(1)-add-component:-groups-menu-(contract)>) [57](<#(1)-add-component:-groups-menu-(contract)>)

[(2) Add Component: Groups Menu (System Element)](<#(2)-add-component:-groups-menu-(system-element)>) [58](<#(2)-add-component:-groups-menu-(system-element)>)

[(3) Add Component: Groups Menu (Logit Element)](<#(3)-add-component:-groups-menu-(logit-element)>) [58](<#(3)-add-component:-groups-menu-(logit-element)>)

[(4) Layers Dropdown Menu (Contract)](<#(4)-layers-dropdown-menu-(contract)>) [59](<#(4)-layers-dropdown-menu-(contract)>)

[(5) Layers Dropdown Menu (Elements)](<#(5)-layers-dropdown-menu-(elements)>) [60](<#(5)-layers-dropdown-menu-(elements)>)

[(6) Accessing The System Tray Icons](<#(6)-accessing-the-system-tray-icons>) [60](<#(6)-accessing-the-system-tray-icons>)

[(7) Edit Logit Element Settings](<#(7)-edit-logit-element-settings>) [61](<#(7)-edit-logit-element-settings>)

[(8) Edit Element Settings](<#(8)-edit-element-settings>) [61](<#(8)-edit-element-settings>)

[(9) Edit Contract Settings](<#(9)-edit-contract-settings>) [61](<#(9)-edit-contract-settings>)

[(10) Access Help Center](<#(10)-access-help-center>) [61](<#(10)-access-help-center>)

[WORKBOARD TASKS & MANIPULATIONS](#workboard-tasks-&-manipulations) [62](#workboard-tasks-&-manipulations)

[Creating Contracts And Elements On The Workboard](#creating-contracts-and-elements-on-the-workboard) [62](#creating-contracts-and-elements-on-the-workboard)

[Create New Contract Layer On The Workboard](#create-new-contract-layer-on-the-workboard) [62](#create-new-contract-layer-on-the-workboard)

[Creating A New Element On The Workboard](#creating-a-new-element-on-the-workboard) [62](#creating-a-new-element-on-the-workboard)

[Creating A New Logit Layer On The Workboard](#creating-a-new-logit-layer-on-the-workboard) [63](#creating-a-new-logit-layer-on-the-workboard)

[Configure A Contract Layer On The Workboard](#configure-a-contract-layer-on-the-workboard) [63](#configure-a-contract-layer-on-the-workboard)

[Configuring An Element On The Workboard](#configuring-an-element-on-the-workboard) [65](#configuring-an-element-on-the-workboard)

[Configuring A Logit Layer On The Workboard](#configuring-a-logit-layer-on-the-workboard) [66](#configuring-a-logit-layer-on-the-workboard)

[Duplicate A Contract On The Workboard](#duplicate-a-contract-on-the-workboard) [68](#duplicate-a-contract-on-the-workboard)

[Duplicate An Element On The Workboard](#duplicate-an-element-on-the-workboard) [68](#duplicate-an-element-on-the-workboard)

[Delete A Contract On The Workboard](#delete-a-contract-on-the-workboard) [69](#delete-a-contract-on-the-workboard)

[Delete An Element On The Workboard](#delete-an-element-on-the-workboard) [69](#delete-an-element-on-the-workboard)

[Navigating Between Layers on The Workboard](#navigating-between-layers-on-the-workboard) [69](#navigating-between-layers-on-the-workboard)

[Edit Layer On The Workboard](#edit-layer-on-the-workboard) [70](#edit-layer-on-the-workboard)

[Navigating The Add Component Sidebar Menu On The Workboard](#navigating-the-add-component-sidebar-menu-on-the-workboard) [70](#navigating-the-add-component-sidebar-menu-on-the-workboard)

[Edit Layer In The Add Component Sidebar On The Workboard](#edit-layer-in-the-add-component-sidebar-on-the-workboard) [72](#edit-layer-in-the-add-component-sidebar-on-the-workboard)

[Configure The Private Blockchain At The Workboard](#configure-the-private-blockchain-at-the-workboard) [74](#configure-the-private-blockchain-at-the-workboard)

[Configure The Metamask and Connect The Metamask With Lokahi](#configure-the-metamask-and-connect-the-metamask-with-lokahi) [74](#configure-the-metamask-and-connect-the-metamask-with-lokahi)

[Deploy A Contract From The Workboard](#deploy-a-contract-from-the-workboard) [76](#deploy-a-contract-from-the-workboard)

[View Deployment History Of A Contract From The Workboard](#view-deployment-history-of-a-contract-from-the-workboard) [77](#view-deployment-history-of-a-contract-from-the-workboard)

[Workboard Toolbar (Top Right Of Screen)](<#workboard-toolbar-(top-right-of-screen)>) [78](<#workboard-toolbar-(top-right-of-screen)>)

[Download Icon](#download-icon) [79](#download-icon)

[Transaction Icon](#transaction-icon) [79](#transaction-icon)

[Print / Save PDF Icon](#print-/-save-pdf-icon) [79](#print-/-save-pdf-icon)

[Find Icon](#find-icon) [79](#find-icon)

[Hide/Show name Icon](#hide/show-name-icon) [80](#hide/show-name-icon)

[Zoom Button](#zoom-button) [80](#zoom-button)

[Workboard Manipulations](#workboard-manipulations) [80](#workboard-manipulations)

[The “Lock” status](#the-“lock”-status) [80](#the-“lock”-status)

[Instance Block](#instance-block) [81](#instance-block)

[Right Click On A Block](#right-click-on-a-block) [83](#right-click-on-a-block)

[Hover On A Block](#hover-on-a-block) [83](#hover-on-a-block)

[Double Click On A Block (at Contract or Element)](<#double-click-on-a-block-(at-contract-or-element)>) [83](<#double-click-on-a-block-(at-contract-or-element)>)

[Change the Name Of Block](#change-the-name-of-block) [84](#change-the-name-of-block)

[Click On An Element Block (at Contract)](<#click-on-an-element-block-(at-contract)>) [84](<#click-on-an-element-block-(at-contract)>)

[Click On A Logit Block (at Element)](<#click-on-a-logit-block-(at-element)>) [85](<#click-on-a-logit-block-(at-element)>)

[Definition Of A Register And Operation Block (At Logit Layer)](<#definition-of-a-register-and-operation-block-(at-logit-layer)>) [85](<#definition-of-a-register-and-operation-block-(at-logit-layer)>)

[Click On A Register or Operation Block (Logit)](<#click-on-a-register-or-operation-block-(logit)>) [86](<#click-on-a-register-or-operation-block-(logit)>)

[Connecting Blocks On The Workboard (Drag An Arrow)](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>) [87](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>)

[Create Corner Or Angle For An Arrow](#create-corner-or-angle-for-an-arrow) [87](#create-corner-or-angle-for-an-arrow)

[Click On An Arrow](#click-on-an-arrow) [88](#click-on-an-arrow)

[Select A Group](#select-a-group) [89](#select-a-group)

[Define A Connection (Make Your Connection)](<#define-a-connection-(make-your-connection)>) [90](<#define-a-connection-(make-your-connection)>)

[Configure Port](#configure-port) [93](#configure-port)

[Definition Basic Of The Unit Block And The Logic Flow On The Lowest Layer](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer) [96](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer)

[Define Type](#define-type) [96](#define-type)

[Edit Markings](#edit-markings) [99](#edit-markings)

[Variable](#variable) [101](#variable)

[Edit Guard](#edit-guard) [103](#edit-guard)

[Edit Expression](#edit-expression) [105](#edit-expression)

[Add Extra API Function](#add-extra-api-function) [108](#add-extra-api-function)

[Create & Define Hashtags](#create-&-define-hashtags) [109](#create-&-define-hashtags)

[Manage Hashtags](#manage-hashtags) [111](#manage-hashtags)

[Recommendation Feature](#recommendation-feature) [112](#recommendation-feature)

[Flow Graph Overview](#flow-graph-overview) [115](#flow-graph-overview)

[Add Data Sidebar](#add-data-sidebar) [121](#add-data-sidebar)

[Global and Local Rule](#global-and-local-rule) [122](#global-and-local-rule)

[Decision Block](#decision-block) [128](#decision-block)

[Dapp](#dapp) [133](#dapp)

[Add Permission to Add Data For An Account On Blockchain](#add-permission-to-add-data-for-an-account-on-blockchain) [137](#add-permission-to-add-data-for-an-account-on-blockchain)

[Add Permission For Contract Has Been Deployed](#add-permission-for-contract-has-been-deployed) [139](#add-permission-for-contract-has-been-deployed)

[REGISTRATION](#registration) [140](#registration)

[User Account Sign Up](#user-account-sign-up) [140](#user-account-sign-up)

[Creating An Account](#creating-an-account) [141](#creating-an-account)

[Logging Into An Account](#logging-into-an-account) [142](#logging-into-an-account)

[Change An Account’s Password](#change-an-account’s-password) [143](#change-an-account’s-password)

[LAYER LEVELS & USER PERMISSIONS](#layer-levels-&-user-permissions) [144](#layer-levels-&-user-permissions)

[Contract](#contract) [144](#contract)

[Element](#element) [144](#element)

[Logit](#logit) [145](#logit)

[The Roles And The Functions Of Each User: User Permissions](#the-roles-and-the-functions-of-each-user:-user-permissions) [145](#the-roles-and-the-functions-of-each-user:-user-permissions)

[1\. Administrator](#1.-administrator) [145](#1.-administrator)

[2\. Engineer](#2.-engineer) [145](#2.-engineer)

[3\. Advanced User](#3.-advanced-user) [146](#3.-advanced-user)

[4\. Business User](#4.-business-user) [147](#4.-business-user)

[ABOUT LOKAHI](#about-lokahi) [147](#about-lokahi)

[Introduction: Lokahi Web Application](#introduction:-lokahi-web-application) [147](#introduction:-lokahi-web-application)

[What is Lokahi?](#what-is-lokahi?) [148](#what-is-lokahi?)

[Visual Language](#visual-language) [148](#visual-language)

[Collaborative Environment](#collaborative-environment) [148](#collaborative-environment)

[Rapid Application Development of Custom Elements](#rapid-application-development-of-custom-elements) [148](#rapid-application-development-of-custom-elements)

[Highest Levels of Reliability](#highest-levels-of-reliability) [148](#highest-levels-of-reliability)

[Simulation Instead of Deployment and Testing](#simulation-instead-of-deployment-and-testing) [149](#simulation-instead-of-deployment-and-testing)

[Deployment Plans](#deployment-plans) [149](#deployment-plans)

[Immutable Deployments and Hardware Pinning IoT and Blockchain](#immutable-deployments-and-hardware-pinning-iot-and-blockchain) [149](#immutable-deployments-and-hardware-pinning-iot-and-blockchain)

## GETTING STARTED

1

### Lokahi User Account Sign Up

You can register an account at the user level on the “Sign Up” page of Lokahi by accessing the “Login” page and then click on the “Sign up” link below the \[Login\] button.

#### Creating An Account

1.  Enter text in the “Username” field: Use the alphabet or numbers to type a name for your account but do not use blank spaces and special characters (the only special character allowed is"\_"). The username must include at least 3 characters and less than 128 characters.
2.  Enter text in the “Email” field: Use a valid email to register. This email will be used to verify your account to complete the registration process.
3.  Enter in the “Password” field: Your password must be at least 8 characters and can use the alphabet, numbers, special characters, and blank spaces.
4.  Enter in the “Confirm Password” field: Type exactly the same string typed in “Password” field to verify that password will be used to log in.
5.  Check the checkbox "I accept and confirm that I have read and agree to the End-User License Agreement (EULA) of Lokahi".
6.  After entering enough information into the 4 required fields and checking the checkbox “I accept”, the \[Create new Account\] button will be enabled for you to click on to register your account.
7.  Upon clicking \[Create new Account\] check your email inbox and you will see an email has been sent from Lokahi. Open that email and click on the link to complete the registration. The link will open the “Login” page on Lokahi and a green pop-up will appear that says "The account has been verified!", allowing you to use your account.

Note: The email verification link will be valid until you click on the link. You can resend by logging in again, and using the resend button.  If you re-register with the same email, you will have to wait 30 minutes.

#### Logging Into An Account

You can log into an account on the “Login” page of Lokahi by using your username or your verified email address along with the password chosen during registration.

Procedure

1.  Enter in the “Username” field: type your username or the email address used to register and verify your account in Lokahi.
2.  Enter the “Password” field: type the password for your account.
3.  After entering enough information into these two fields, the \[Login\] button will be enabled for you to click and login to your account. After logging in, it will load the Dashboard page.

Note: If you used an account that was registered but has not been verified via your email address, you will see a ‘Login Failed’ caution dialog box stating "Your account has not been verified. Please check your email to verify, thank you.! Don't see the email? RESEND EMAIL" If you have a different issue, you can also see [Change An Account’s Password](#change-an-account’s-password) for additional assistance.

## BUILDING BLOCKCHAIN SOLUTIONS

2

### Creating Projects

On the Lokahi dashboard, you can start a new project by clicking on the circular [\[+\] BUTTON](#create-new-project-on-the-dashboard) in the upper right hand side of the screen.

#### Procedure for Creating a New Project (Dashboard)

After clicking on the circular + button on the dashboard, a “New Project” popup screen appears over the Dashboard page, where you can enter a name and choose a template source if required.

Procedure

1.  Click on the \[New Project\] icon button on the Dashboard.
2.  Enter in the “Name” field of the "New Project" screen.
3.  Click the \[Choose Source\] button, which takes you to the next step to choose the source you want to use as a starting point for the project. There are 3 ways to create a new project with 3 corresponding tabs appearing on the next screen of “New Project” screen:

\+  On the “Seed” tab, you can create from the source templates.

\+ On the “Duplicate” tab, you can create from the projects that have been created in your account.

\+ On the “Import” tab, you can create from the projects that have been created in your account and another account that were downloaded. For more information about how to download a project, see at the [Download Project](#download-icon).

4.  After completing these 2 steps, the \[Create\] button is enabled for you to click to create your project.  
    For more detailed information, see [Create New](#create-new-project-on-the-dashboard) [Project On The Dashboard](#create-new-project-on-the-dashboard).

Note: After creating a new project, a “Create New Component or Contract” screen appears that allows you to create a first layer for that project.

### Creating Contract

Following the [Creating Projects](#creating-projects) process, if you are viewing the “Create New Component or Contract” screen, you can skip to step 2 below.  Starting with step 1 below guides you through the process of creating a new layer from the dashboard.

For more detailed information about the layer’s types, see [Layer Levels & User Permissions](#layer-levels-&-user-permissions).

![](/assets/images/lokahi/image31.png)

Figure 1

#### Creating A New Contract Layer (Dashboard)

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Contract” screen will pop up and you will see "Contract” as an option.  Underneath click on \[Create New Contract\] which will take you to the "Create New Contract" screen. Enter in \[Name\] field of the "Create New Contract" screen.
3.  After entering a name for the Contract layer, the \[Create New Contract\] button will be enabled for you to click on to create your contract.
4.  After creating the Contract, you will be directed back to the dashboard and will see a green message that says ‘Create Successfully!’.  You can then navigate to the project on the dashboard or [search for the Contract](#search-on-dashboard-page), and open the Contract to begin work on the workboard.  
    For more detailed information, see [Create New Contract on the Dashboard](#create-new-contract-on-the-dashboard), and for how to set up a basic configuration see [Add Business Logic to a Contract Layer](<#add-business-logic-to-a-contract-layer-(workboard)>).

Note: You can use the same name for multiple layers of this project. Also, if a project has more than 6 layers on the Dashboard, you can scroll to the right to the 6th project and click “Show more” or click on the project name to view all of the layers on the [Project Full Screen Page](#project-full-screen-page). In addition, you have the option to [Create a New Contract on the Workboard](#create-new-contract-layer-on-the-workboard) if preferred.

#### Add Business Logic to A Contract Layer (Workboard)

Once you have created a new Contract layer, you are now able to design a process on the workboard to  build the Contract using the pre-configured Element blocks from the ‘Add Component Menu’ in the sidebar. Contract is what gets created in the Contract layer.

![](/assets/images/lokahi/image7.png)

Figure 2

Procedure

1.  After creating a Contract, access the Contract’s workboard to define the process.
2.  To make a connection between two Element blocks, drag and drop one Element block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Element block onto the workboard nearby.
3.  To connect the two blocks, hover over the first Element block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  The next step is to configure the connection on the arrow between 2 Elements at Element/Contract’s workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
5.  Next, drag an input/output shape in column 1 to the desired output/input shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
6.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
7.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable you to click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

8.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no blocks are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks are unconnected, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.
9.  If the \[Deploy\] button is not enabled, you can click on the \[Recommendation\] button at the bottom of the page and a “Recommendation” sidebar appears with the warnings box to announce which arrow(s) you need to define or some block need to connect.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

10. If all arrows are defined without warnings at “Recommendation” sidebar, you are now potentially ready to move to [Deploying to the Blockchain](#deploying-to-the-blockchain). Now you finish creating a Contract which is what gets created in the Contract layer.
11. You can add data for the Contract at the “Add Data” sidebar.

For more information about the “Add Data” feature, see [Add Data Sidebar](#add-data-sidebar).

Note: In the bottom left hand corner of the screen, there is a \[Settings\] button that allows you to rename the Contract you are working on if desired.

### Creating Elements

If you have just finished completing the [Creating Projects](#creating-projects) process and are viewing the “Create New Component or Contract” screen, you can skip to step 2 below.  Starting with step 1 guides you through the process of creating a new system Element from the dashboard.  See Creating

#### Creating A New Element Layer (Dashboard)

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Element” as an option.  Underneath click on \[Create New Element\] which will take you to the "Create New Element" screen. Enter in \[Name\] field, select or create a category and choose an icon.
3.  Once the name, category and icon are completed, the \[Create New Element\] button will be enabled for you to click to create the Element.
4.  After creating the Element, you will be directed back to the dashboard and will see a green message that says ‘Create Successfully’. You can then navigate to the project on the dashboard or [search for the Element](#search-on-dashboard-page) and open the Element to begin work on the workboard.

Note: You can use the same name among multiple Elements in the same project. For more detailed information see [Create New Element on the Dashboard](#create-new-element-on-the-dashboard).

#### Configuring An Element (Workboard)

After you have [created a new Element](<#creating-a-new-element-layer-(dashboard)>), you are now able to configure the Element on the workboard. Element is what gets created in the Element layer.![](/assets/images/lokahi/image82.png)

Figure 3

Procedure

1.  After creating an Element layer, access the Element’s workboard to define the process.
2.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
3.  To connect the two blocks, hover over the first Logit block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
5.  The next step is to configure the connection on the arrow between 2 Logits at Element workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.

![](/assets/images/lokahi/image61.png)

Figure 4

6.  Next, drag an input/output shape in column 1 to the desired output/input shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
7.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
8.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable you to click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

9.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no blocks are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks are unconnected, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

10. In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#edit-layer-in-the-add-component-sidebar-on-the-workboard)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
11. Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type depending on the parameters set in the “Register” blocks and “Operation” blocks of the Logit block that was configured as an input and an output port. You can choose how many options you want by ticking on a checkbox in front of each option. After chosen, that Logit block will provide the input or output or both to become the input and output ports of the Element you are configuring.
12. Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again.
13. At the top of the window, click on the “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
14. Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the system Element available at the Contract for use at the Contract level.
15. Now, you finish creating Elements which is what gets created in the Element layer.

Tip:  When you are on the Contract, you can quickly move down to the workplace of any Element by double clicking on any block icon on the workboard.

Tip: You can group Elements by clicking and dragging to highlight any group of Element blocks to create a new Element.  Once you release the selection, the group of Elements will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen. You can configure inputs/outputs, name, category and choose an icon for the new Element and then click the \[Create\] button to finish the creation of a new Element process.

### Creating Logit

If you have just finished completing the [Creating Projects](#creating-projects) process and are viewing the “Create New Component or Contract” screen, you can skip to step 2 below.  Starting with step 1 guides you through the process of creating a new Logit from the dashboard.  See Creating

#### Creating a New Logit Layer (Dashboard)

You can create a new Logit layer from the workboard of any Contract or Element by navigating to the ‘Dropdown Menu” at the top of the screen as an engineer or admin.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Logit” as an option.  Underneath click on \[Create New Logit\] button which will take you to the "Create New Logit" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter \[Name\] field of “Create New Logit" screen.  You can use the alphabet, numbers, blank spaces, and special characters to type a name for your layer.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, and some special characters (like “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing the steps above, the \[Create New Logit\] button will be enabled for you to click on to create the Logit.
7.  Once created, the Logit will be visible on every Element and every Contract of the project that it was created in.

#### Configuring A Logit On The Workboard

After you have [created a new Logit](#creating-a-new-logit-layer-on-the-workboard), you are now able to configure the Logit on the workboard. Logits is what gets created in the Logit layer.

Procedure

1.  After creating a Logit, access the Logit’s workboard to define the process.
2.  To make a connection between two blocks, “drag and drop” one “Register” or “Operation” block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd block onto the workboard nearby.
3.  To connect the two blocks, hover over the first block and ‘click and drag’ on one of the 4 squares that appear and drag the arrow to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#edit-layer-on-the-workboard)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
5.  Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type or both. You can choose one option. After chosen, that Logit block will have the input or output or both.
6.  Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button, and the "Required Hashtags" input. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again. You can add a required [hashtag](#manage-hashtags) for a port to let that port will require you to connect with other Logit blocks on the Element layer.
7.  At the top of the window, click on the “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
8.  Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the Logit available at the Element layer.
9.  Next, you can edit and configure your model.
10. With the “Register” blocks, you can choose the types that are defined at “[Define Type](#define-type)” screen by clicking on the “Register” block then choose the “Edit Markings” option once clicked “Add Markings” icon. Then choose what “Register” block is allowed to [add data](#add-data-sidebar) at Element or Contract. For more details about the process to choose type and configure for a “Register” block,  go here [Edit Markings](#edit-markings).
11. Click on the arrow connect from “Register” block to “Operation” block then click “Add Variable”![](/assets/images/lokahi/image14.png) icon, the “Variable” screen appears to let you choose the variables of the message of the “Register” block. For more details about the process to choose variable, go here [Variable](#variable).
12. With the “Operation” blocks, you can set the condition for transition of the variables of the message in the “Register” block by clicking on “Operation” block then choose “Edit Guard” option once clicked “Add Guard” ![](/assets/images/lokahi/image22.png) icon. For more detail about the process to set the condition for transition, go here [Edit Guard](#edit-guard).
13. Click on the arrow connect from “Operation” block to “Register” block then click “Add Expression”![](/assets/images/lokahi/image20.png) icon, the “Edit Expression” screen appears to let you regulate the output of the “Operation” block, by creating a new message and depending on the condition of the output, the type of message can then be created. For more detail about the process to regulate the output of the “Operation” block, go here [Edit Expression](#edit-expression).
14. Now, you finish creating Logits which is what gets created in the Logit layer.

Tip:  You can move between layers by double clicking on any block icon on the workboard.

Tip: You can group a part of Logit by clicking and dragging to highlight any group of Logit’s blocks to create a new Logit.  Once you release the selection, the group of Logit’s blocks will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen. You can configure inputs/outputs, name, category and choose an icon for the new Logit and then click the \[Create\] button to finish the creation of a new Logit process.

## FORMALLY VERIFYING AGREEMENTS

3

### Recommendation Feature & Flow Graph

#### Checking for Correctness

The process of formally verifying is a step to check the correctness of the statements in a flow graph that has been created on the workboard, and the [Recommendation](#recommendation-feature) feature can help guide you through the process. The statement is the state that has been set for a state shape of the flow graph to satisfy a condition for the action of the messages that are moving inside the flow graph.  For more information and definition of the Element(s) inside the flow graph, see [Flow Graph](#flow-graph-overview).

In this section, we are going to describe specifically the steps to set up a flow graph and you can use the Recommendation feature as a guide.

Procedure

1.  After you have created and configured the Logit/Elements, open the workboard of the Element/Contract.
2.  The “Recommendation” button in the bottom toolbar displays the number of recommendations to create a complete flow graph. Click on the \[Recommendation\] button at the bottom toolbar to open the “Recommendation” sidebar. For more information about the “Recommendation” feature, see [Recommendation](#recommendation-feature), including how to use the “Show” and the “Fix it” functions.
3.  The “Recommendation” feature will require you to create a model of blocks in the workboard. The first time, you are required to “Drag at least one Logit/Element block onto the workboard”. The Logit created at the logit between “Register” block(s) and “Operation” block(s) could have hashtags and the Recommendation feature would inform you to define a relationship between blocks with hashtag requirements. For more information about the Hashtag, the way to define a hashtag and how to add a hashtag, see [Define Hashtag](#manage-hashtags) and [Manage Tag](#manage-hashtags).

![](/assets/images/lokahi/image30.png)  
Figure 5

4.  Once defined and you’ve resolved the recommendations, you can click the \[Flow Graph\] button in the bottom toolbar to open the “Flow Graph” screen. If that block in the workboard contains a model of “Register” and “Operation” blocks confirmed as valid, the “Flow Graph” screen will display a connection model of the shapes. For more definition about the State Shape(s), see [Flow](#flow-graph-overview) [Graph](#flow-graph-overview).

![](/assets/images/lokahi/image17.png)

Figure 6

1.  If the block has a “Required Hashtag” as described in the “[Configure Port](#configure-port)” section, the “Recommendation” sidebar will then require you to use the blocks that are related to the hashtag(s) in the “Required hashtags” input and you should use all Components that have a relationship with “{those required hashtags}” at the input or output port.
2.  You can use the Recommendation sidebar to reveal a list of blocks that the required hashtag appears within and you can use the “Show” button to assist. Once you drag a block onto the workboard the requirement message changes to “Make a connection between the block(s) requiring the hashtag and the block containing the required hashtag”. Click the “Fix it” button and it will connect automatically.
3.  After you go through the process of [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>) to create an arrow then the "Flow graph" screen will display a flow graph and allow us to set the statements.

Note: If the arrow connecting the blocks does not have a defined connection, a “Flow Graph” cannot be created properly.

4.  Once connected, the Recommendation message changes to “Set the parameters for connection between the block requiring the hashtag and the block containing the required hashtag”. To define a connection, see [Define A Connection](<#define-a-connection-(make-your-connection)>).

5.  When you click on the \[Flow Graph\] button in the bottom toolbar, you can select a group of State shape(s) or one State shape and choose the option of a “Statements” menu which include “Eventually Active” for one or “Eventually All Active”, ”Eventually At Least One Active”, or “Exclusive” for multiple selections as detailed in the [“Flow Graph”](#flow-graph-overview) section.
6.  Once you have selected the States and set the options for that group, the statements appear in the "Statements" sidebar and are arranged with the newest at the bottom of the Statements list. Then the \[Save\] button is enabled.
7.  Once you click the \[Save\] button, it sends the statements in to the Lokahi formal verification process to check the rightness of the State of that Flow Graph and updates the New list of Statements in the "Statements" sidebar (the older list of statements will be deleted) and at the same time it will send the “Statement” list and save the setting(s) of the entire State shape of that flow graph. Then the \[Save\] button is disabled.
8.  If the result once the Lokahi performed the Formal verification process is wrong, a message pops up with "Update your model to make State ... and State ... are eventually active/exclusive" in the "Recommendation" sidebar to let you know that you have to fix the model to allow the path of messages to go to the State you set in the Flow Graph.
9.  Once you have completed the Flow graph and all of the items in the [Recommendation feature](#recommendation-feature), you are potentially ready to [deploy](#deploy-a-contract-from-the-workboard) from the Contract.

Note: We can add more hashtags for a State shape in the “Flow Graph” screen to create a relationship for that block to use it on the Contract. For more information about how to Manage Tags in the “Flow Graph” screen, see [Flow Graph](#flow-graph-overview) (number 8).

## DEPLOYING TO THE BLOCKCHAIN

4

### Deploy Contract to Blockchain

Now that you have [Created a Project](#creating-projects), [Created a Contract](#creating-contract) and [added the Business](<#add-business-logic-to-a-contract-layer-(workboard)>) [Logit](<#add-business-logic-to-a-contract-layer-(workboard)>) to the Contract you are ready to deploy. If once used an Element is invalid on the workboard of the Contract, then click the \[Deploy\] button, an error message under the \[Deploy\] button warning that "Deployed failed! Your model has not been completed. Please finish all the tasks on the recommendation list to deploy" to let you know you have to choose another Element block or have to finish all tasks on “Recommendation” sidebar.

![](/assets/images/lokahi/image13.png)

Figure 7

#### Deploy Contract Layer (Workboard)

Procedure

1.  Access the Contract layer’s workboard.
2.  Click the “Deploy” icon in the upper right hand toolbar. A “Deployment” form expands down.
3.  Choose the blockchain you want to deploy on.
4.  If you choose “Ethereum” you need to include an address account and the private key so you can deploy the Contract agreement:

5.  Enter in the “Account Address” field of "Deploy" screen.
6.  Enter in the “Private Key” field of the "Deploy" screen.

7.  If you choose another blockchain {Fabric; Ropsten; Stand Alone; Concord; others}, you can choose to set a name and version for that Contract, but those are optional fields.
8.  Click the \[Deploy\] button. After clicking the \[Deploy\] button, the contract address is displayed that has been returned from the blockchain. You can click the “Show more transaction” or \[Transaction\] button at the toolbar to observe the contract’s status during or after the process.

For more information, go to [Deploy a Contract](#deploy-a-contract-from-the-workboard).

For more information about the “Show more transactions” window, go to [View Deployment History of an Contract](#view-deployment-history-of-a-contract-from-the-workboard).

## DASHBOARD NAVIGATION OVERVIEW

5

### Menus & Buttons on the Dashboard

![](/assets/images/lokahi/image97.png)

Figure 8

#### (1) Dashboard (+)

\-Easily create a [New Project](#create-new-project-on-the-dashboard) on the dashboard by clicking the circular (+) button.

![](/assets/images/lokahi/image27.png)

Figure 9

#### (2) Project Menu

![](/assets/images/lokahi/image36.png)

Figure 10

Hover over any individual project on the Dashboard to reveal the “Project Menu” for that project.  
 -[Create A New Layer](#creating-layers-on-the-dashboard) \-[Duplicate Project](#duplicate-a-project-on-the-dashboard)  
\-[Rename Project](#rename-a-project-on-the-dashboard)  
 -[Delete Project](#delete-a-project-on-the-dashboard)

#### (3) Search & Filter Projects

![](/assets/images/lokahi/image28.png)

Figure 11

![](/assets/images/lokahi/image83.png)

Figure 12

[Search For Project Or Layer](#search-on-dashboard-page) on Dashboard       Navigate Projects through Page Breaks On Dashboard -[Filter Projects](#filter-on-project-full-screen-page) by multiple categories -> Source  
        -> Type  
        -> Data  
        -> State

#### (4) Layers Menu On Dashboard (Contract)

![](/assets/images/lokahi/image84.png)  
Figure 13

Manipulate layer within a project easily from dashboard view

-[See Contract Addresses](#view-deployment-history-of-a-contract-on-the-dashboard): Allows You To View History (Only available for contracts that have been deployed)

-[Duplicate Layer](#duplicate-a-contract-on-the-dashboard)

-[Rename Layer](#rename-a-contract-on-the-dashboard)  
\-[Delete Layer](#delete-a-contract-on-the-dashboard)

#### (5) Elements Menu On Dashboard (Elements)

![](/assets/images/lokahi/image105.png)  
Figure 15

Manipulate Elements within a layer easily from the dashboard view

\-[Duplicate Layer](#duplicate-a-contract-on-the-dashboard)

\-[Rename Layer](#rename-a-contract-on-the-dashboard)  
\-[Delete Layer](#delete-a-contract-on-the-dashboard)

#### (6) Adjust Themes

![](/assets/images/lokahi/image102.png)

Figure 16

Easily adjust the colour scheme of the Lokahi platform to suit your environment or preferences.

#### (7) User Profile & Settings

![](/assets/images/lokahi/image57.png)

Figure 17  
Configure your account and settings.

## DASHBOARD TASKS AND MANIPULATIONS

6

### Creating Projects

#### Create New Project On The Dashboard

On the Lokahi dashboard, you can create a new project by clicking on the \[New Project +\] button in the upper right hand side of the screen.

![](/assets/images/lokahi/image27.png)  
Figure 18

A “New Project” screen appears, where you can enter a name then you choose a source for the project:

![](/assets/images/lokahi/image88.png)  
Figure 19

Procedure

1.  Click on the \[New Project\] icon button on the Dashboard.
2.  Enter the \[Name\] field of "New Project" screen.  You can use the alphabet or numbers to type a name for your project name but don't use a blank space or special characters except underscore "\_".  
    \[Restrictions:  If you type a special character in the “Name” field, a red message announces that "Project name is invalid!" to warn you. If you type a project name that already exists, a red message announces an error message "Name has existed!”. If you type more than characters limitation, a red message announces "Your project name is too over characters limitation!" and the \[Create\] button will disable refusing permission to create a new project.\]
3.  Next, click the \[Choose Source\] button, which takes you to the next step to choose the source you want to use as a starting point for the project. There are 3 ways to create a new project with 3 corresponding tabs appearing on the next screen of “New Project” screen:

\+ On the “Seed” tab, you can create from the source templates.

\+ On the “Duplicate” tab, you can create from the projects that have been created in your account.

\+ On the “Import” tab, you can create from the projects that have been created in your account and another account that was downloaded.

4.  After completing these 2 steps, the \[Create\] button is enabled for you to click to create your project.

Note: Immediately after creating a new project, the “Create New Component or Contract” screen is displayed to let you create a first agreement for that project.

#### Duplicate A Project On The Dashboard

You can duplicate an existing project by hovering over the project on the dashboard and then opening “Project menu” to choose the “Duplicate” option. A "Duplicate Project" dialog box appears and allows you to name the newly duplicated project.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options. Click on the "Duplicate" option.
2.  A "Duplicate Project" dialog box appears. Enter in \[Name\] field.  You can use the alphabet or numbers to type a name for your project name but don't use a blank space or special characters except underscore "\_".  
    \[Restrictions:  If you type a special character in the “Name” field, a red message announces that "Project name is invalid!" to warn you. If you type a project name that already exists, a red message announces an error message "Name has existed!”. If you type more than characters limitation, a red message announces "Your project name is too over characters limitation!" and the \[Create\] button will disable refusing permission to create a new project.\]
3.  After entering a valid name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate.

Note: The duplicated project will include all layers and store all manipulations and Elements in the original project but will not include the deployment history and the contract addresses. The duplicated project is dated as a new project and displayed at the top in dashboard as the most recent and any Contract or Element within the project are given the current date as well.

#### Rename A Project On The Dashboard

You can rename an existing project by hovering over the project on the dashboard and then opening “Project menu” to choose the “Rename” option. A "Rename Project" dialog box appears and allows you to rename the project.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options. Click on the "Rename" option.
2.  A “Rename” dialog box appears. Enter in \[Name\] field.  You can use the alphabet or numbers to type a name for your project name but don't use a blank space or special characters except underscore “\_”.  
    \[Restrictions:  If you type a special character in the “Name” field, a red message announces that “Project name is invalid!” to warn you. If you type a project name that already exists, a red message announces an error message “Name has existed!”. If you type more than characters limitation, a red message announces “Your project name is too over characters limitation!” and the \[Create\] button will disable refusing permission to create a new project.\]
3.  After entering a valid name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the project.

#### Delete A Project On The Dashboard

You can delete an existing project by opening “Project menu” and choosing the “Delete” option.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options. Click on the "Delete" option.
2.  A dialog box asks “Are you sure you want to delete project {project’s name} ?” with 2 options, “Yes” and “No”.  Click “Yes”.
3.  After deleting the project, a green pop-up displays a message that says “Delete Project Successfully!”.

Additional: You cannot reverse the project deletion, so consider carefully before deleting.

### Creating Layers On The Dashboard

Creating layers on the dashboard can be done easily by navigating to a specific project and accessing the ["Project Menu"](<#(2)-project-menu>) project menu dropdown and selecting a new layer.

#### Create New Contract Layer On The Dashboard

After you have [created a project](#create-new-project-on-the-dashboard) on the dashboard the “Create New Component or Contract” screen is displayed and you can skip to step 2 below if you are at that point.  Starting with step 1 guides you through the process of creating a new Contract layer from any project on the dashboard.

![](/assets/images/lokahi/image94.png)

Figure 20

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Contract” screen will pop up and you will see "Contract” as an option.  Underneath click on \[Create New Contract\] which will take you to the "Create New Contract" screen. Enter in the “Name” field of the "Create New Contract" screen.
3.  After entering a name for the Contract layer the \[Create\] button will be enabled for you to click on to create your Contract.
4.  After creating the Contract, you will be directed back to the dashboard and will see a green message that says ‘Create Successfully’. You can then navigate to the project on the dashboard or [search for the layer](#h.p6sgdzbu80rp), and open the Contract to begin work on the workboard.  
    For more information, see [Create New Contract on the Dashboard](#h.zsie3z4q7nk).

Note: You can use the same name for multiple layers of this project. Also, if a project has more than 6 layers on the Dashboard, you can scroll to the right to the 6th project and click “Show more” or the project name to view all of the layers on one full screen and create a new layer from that window. For more information see the [Project Full Screen Page](#project-full-screen-page).

#### Create New Element Layer On The Dashboard

After you have [created a project](#create-new-project-on-the-dashboard) on the dashboard the “Create New Component or Contract” screen is displayed and you can skip to step 2 below if you are at that point.  Starting with step 1 guides you through the process of creating a new component from any project on the dashboard.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Elements” as an option.  Underneath click on \[Create New Element\] which will take you to the "Create New Element" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter in the “Name” field of the "Create New Element" screen.  You can use the alphabet, number, blank space, and special characters to type a name for your Element.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the Element. You can use the alphabet, numbers, blank spaces, and some special characters (like: “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing to enter the name, the \[Create\] button will be enabled for you to click on to create the Element.
7.  Once created, the Element will be visible on every Element and every Contract of the project that it was created in.

Additional: You can use the same name for multiple Elements within the project.

#### Creating New Logit Layer On The Dashboard

After you have [created a project](#create-new-project-on-the-dashboard) on the dashboard the “Create New Component or Contract” screen is displayed and you can skip to step 2 below if you are at that point.  Starting with step 1 guides you through the process of creating a new component from any project on the dashboard.

Procedure

1.  On the Dashboard page choose one project and click on “Project Menu” icon is next to the project name to show all options then click on "New".
2.  A “Create New Component or Contract” screen will pop up and you will see "Logit” as an option.  Underneath click on \[Create New Logit\] button which will take you to the "Create New Logit" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter \[Name\] field of “Create New Logit" screen.  You can use the alphabet, numbers, blank spaces, and special characters to type a name for your layer.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, and some special characters (like “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing the steps above, the \[Create New Logit\] button will be enabled for you to click on to create the Logit.
7.  Once created, the Logit will be visible on every Element and every Contract of the project that it was created in.

### Manipulating Layers On the Dashboard

#### Duplicate A Contract Layer On The Dashboard

You can duplicate an existing Contract layer by navigating to a project on the dashboard and then hovering over the specific layer you would like to duplicate and accessing the “Three Dots Menu” and choosing the “Duplicate” option.

Procedure

1.  Choose one Contract layer of a project, hover on top of that Contract's frame to reveal the “Three Dots Menu”  in the upper right hand corner of the Contract frame. Click on the “Three Dots Menu” button to show all options. Click on the "Duplicate" option.
2.  A "Duplicate" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Contract layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate the Contract layer.

Note: The duplicated Contract layer will store all manipulations and components in the original Contract layer but will not include the deployment history and the contract addresses. The duplicated Contract layer is dated as a new Contract layer and displayed as the top slide in the project as the most recent with the current date.

#### Duplicate An Element Layer On The Dashboard

You can duplicate an existing Element layer by navigating to a project on the dashboard and then hovering over the specific Element layer you would like to duplicate and accessing the “Three Dots Menu” and choosing the “Duplicate” option.

Procedure

1.  Choose one Element layer of a project, hover on top of that Element's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Element frame. Click on the “Three Dots Menu” button to show all options. Click on "Duplicate" option
2.  A "Duplicate" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Element layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate the Element layer.

Note: The duplicated Element layer will store all manipulations and Elements in the original Element. The duplicated Element layer is dated as a new Element layer and displayed as the top slide in the project as the most recent with the current date.

#### Duplicate An Logit Layer On The Dashboard

You can duplicate an existing Logit layer by navigating to a project on the dashboard and then hovering over the specific Logit you would like to duplicate and accessing the “Three Dots Menu” and choosing the “Duplicate” option.

Procedure

4.  Choose one Logit layer of a project, hover on top of that Logit's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Logit frame. Click on the “Three Dots Menu” button to show all options. Click on "Duplicate" option
5.  A "Duplicate" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Logit layer.
6.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate the Logit layer.

Note: The duplicated Logit layer will store all manipulations and Logits in the original Logit. The duplicated Logit layer is dated as a new Logit layer and displayed as the top slide in the project as the most recent with the current date.

#### Rename A Contract Layer On the Dashboard

You can rename an existing Contract by navigating to a project on the dashboard and then hovering over the specific Contract you would like to rename and accessing the “Three Dots Menu” and choosing the “Rename” option.

Procedure

1.  Choose one Contract layer of a project, hover on top of that Contract's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Contract frame. Click on the “Three Dots Menu” button to show all options. Click on the "Rename" option.
2.  A "Rename" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Contract layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the Contract layer.

#### Rename An Element Layer On The Dashboard

You can rename an existing Element layer by navigating to a project on the dashboard and then hovering over the specific Element you would like to rename and accessing the “Three Dots Menu” and choosing the “Rename” option.

Procedure

1.  Choose one Element layer of a project, hover on top of that Element's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Element frame. Click on the “Three Dots Menu” button to show all options. Click on the "Rename" option
2.  A "Rename" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Element layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the Element layer.

#### Rename An Logit Layer On The Dashboard

You can rename an existing Logit layer by navigating to a project on the dashboard and then hovering over the specific Logit you would like to rename and accessing the “Three Dots Menu” and choosing the “Rename” option.

Procedure

1.  Choose one Logit layer of a project, hover on top of that Logit's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Logit frame. Click on the “Three Dots Menu” button to show all options. Click on the "Rename" option.
2.  A "Rename" dialog box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Logit layer.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to rename the Logit layer.

#### Delete A Contract Layer On The Dashboard

You can delete an existing Contract layer by navigating to a project on the dashboard and then hovering over the specific Contract layer you would like to delete and accessing the “Three Dots Menu” and choosing the “Delete” option.

Procedure

1.  Choose one Contract layer of a project, hover on top of that Contract's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Contract frame. Click on the “Three Dots Menu” button to show all options. Click on the "Delete" option.
2.  A dialog box asks "Are you sure you want to delete contract {Contract’s name}?” with 2 options, “Yes” and “No”.  Click “Yes”.
3.  After deleting the Contract layer, a green pop-up displays a message "Delete Successfully!”.

Note: You cannot reverse the agreement deletion, so consider carefully before deleting.

#### Delete An Element Layer On The Dashboard

You can delete an existing Element layer by navigating to a project on the dashboard and then hovering over the specific Element layer you would like to delete and accessing the “Three Dots Menu” and choosing the “Delete” option.

Procedure

1.  Choose one Element layer of a project, hover on top of that Element's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Element frame. Click on the “Three Dots Menu” button to show all options. Click on the "Delete" option.
2.  A dialog box asks "Are you sure you want to delete element {Element’s name}?” with 2 options, “Yes” and “No”.  Click Yes.
3.  After deleting the Element layer, a green pop up displays a message "Delete Successfully!”.

Note: You cannot reverse the Element deletion, so consider carefully before deleting.

Delete An Logit Layer On The Dashboard

You can delete an existing Logit layer by navigating to a project on the dashboard and then hovering over the specific Logit layer you would like to delete and accessing the “Three Dots Menu” and choosing the “Delete” option.

Procedure

1.  Choose one Logit layer of a project, hover on top of that Logit's frame to reveal the “Three Dots Menu” in the upper right hand corner of the Logit frame. Click on the “Three Dots Menu” button to show all options. Click on the "Delete" option.
2.  A dialog box asks "Are you sure you want to delete logit {Logits name}?” with 2 options, “Yes” and “No”.  Click Yes.
3.  After deleting the Logit layer, a green pop up displays a message "Delete Successfully!”.

Note: You cannot reverse the Logit deletion, so consider carefully before deleting.

#### View Deployment History Of A Contract On The Dashboard

You can check the deployment history of a Contract that has deployed on the dashboard.

![](/assets/images/lokahi/image45.png)  
Figure 21: The rocket icon indicates a Contract agreement has a deployment history

Procedure

1.  Choose a Contract that has a rocket icon, then hover on top of that Contract's frame to reveal the "Three Dots Menu" and click on it to show all options. Click on "See Contract Addresses" option.

2.  A screen pops up with the title "Transactions". The default filter is set to ALL in the "Filter by:" section that includes 4 options {All; Success; Pending; Failed}.

![](/assets/images/lokahi/image77.png)  
Figure 22

3.  The view in the middle of the screen has 6 columns {Name; Version; Address/TxHash; Blockchain; Age; Status} with the following descriptions:  
    \+ Name: the name of contract in the Deployment process. If a name was not input during the deployment, the name will automatically default to the name of the Contract.  
    \+ Version: The newest version of the contract. If a version was not provided during deployment, it will automatically default to "0".  
    \+ Address/TxHash: The Hash address or contract address from the blockchain server.  
    \+ Blockchain: It displays which blockchains were chosen during Deployment.  
    \+ Age: The time counts from the time when the web has received the contract address to the current time.  
    \+ Status: Displays the current status of that contract. The 3 status options are {Pending; Success; Failed}.

1.  "Pending" when the TxHash was received but is still waiting for the contract address.
1.  "Failed" when the blockchain server can't send back the contract address.
1.  "Success" when the blockchain server sent back the contract address.

1.  Once clicked on the \[Clear All\] button, a confirmation dialog box has the "Clear All" title appears and shows the content "Are you sure you want to clear all contracts?". Once clicked the \[Yes\] button, the Transactions screen clears all the contracts have been deployed and the Rocket icon of that Contract is changed from "Deployed" state to "Not yet deployed" state.

\[Note: The default view displays 5 contract addresses in a page, with the new contract address in the first position in the first page. You can use the page break at the bottom of the screen to see additional deployments beyond the original 5.\]

### Navigating Projects & Layers On The Dashboard

#### Filter Projects & Layers On Dashboard

You can filter the projects or layers by using the filter group on the Dashboard. The filter can be based on the template source of the project, the layer type {Logit; Element; Contract}, the status of Contract {Deployed; Not Deployed}, the created date of the project, the order by time and by alphabetical order of the project or layer’s name.

For more information about the layer’s types, see [Layer Levels & User Permissions](#layer-levels-&-user-permissions).

![](/assets/images/lokahi/image29.png)

Figure 23

Procedure

1.  Click on \[Filter\] button. A “Filter” form displays 5 options: SOURCE, LAYER’S TYPE, PROJECT/LAYER’S CREATION DATE, SORT BY, SHOW BLANK PROJECT
2.  After clicking on the "Source" combobox, the template source options are displayed to let you choose which source you’d like to include after you click \[Search\] in the “Filter” form.
3.  The “Layer’s Type” switch is always on “ON” status at the first time and it automatically includes all 4 boxes {Logit; Element; Deployed Contract; Not Deployed Contract} as already ticked. Once you select the desired layers and click the \[Search\] button, any project that doesn’t have any layers belonging to the layer type is ticked will disappear on the Dashboard page in the search results. If you change the “Layer’s Type” switch to “OFF”, all 4 options will disappear and the result always has 4 layer type, since only Contract layers can be deployed and therefore have a status. If you don’t tick any boxes in the “Layer’s Type” part, then the result has only a blank project or doesn’t have any project.
4.  Tick the "Show Blank Project" checkbox, the result is the project doesn’t have any layers, so if the "Show Blank Project" checkbox is unchecked, the blank project will disappear from the Dashboard page.
5.  When the Filter form initially pops up, the "Project’s Creation Date" section is switched to "OFF" status. When you change to "ON" status 2 inputs appear {From; To} with date ranges. The default is set "From" as "Jan 1, 1970" and "To" date is the current date, so all projects will display on the Dashboard page by default. You can set the period of time in which projects were created to display. The projects that were not created during the range will disappear during the search results.  You can change the “Project’s Creation Date” switch back to the default of OFF to remove the date filter.
6.  The "Sort by" section, includes a "Sort by" combobox with 4 options to choose from {Ascending time; Descending time; A-> Z; Z->A}, allowing you to sort by time or alphabetical order. The default option is "Descending", so all projects are filtered by the descending time that they were created by default.
7.  If you click the \[Clear\] button at the bottom of the “Filter” form, it will clear all the filtered results and return you to the dashboard screen.
8.  Once you have made all of your selections from the previous steps, when you click on the \[Search\] button in the “Filter” form, it will filter the projects according to your chosen selections.

#### Search On Dashboard Page

You can search for project(s) or layer(s) by typing into the “Search” input frame at the top of the Dashboard page.

![](/assets/images/lokahi/image3.png)

Figure 24

Procedure

1.  Click into the “Search” input frame and enter text in the “Search” input frame.
2.  After entering, the result could show:

\+ Case 1 “The search results only with project(s)”  The search terms will be highlighted within the resulting project(s) name and display only those projects with a green rectangle highlighting the resulting terms within the project title, but will not display any of the layers within that project on the dynamic search results.  The layers within the resulting project(s) can be displayed and accessed by clicking on the project itself from the search results.

\+ Case 2 “The search results only with layer(s)”  The search terms will be highlighted within the resulting layer name(s) and display only those layers with a green rectangle highlighting the resulting terms within the actual layer title.  These layers will be displayed in the frame below the title of the project, so the project is visible even if it does not include the search terms because the layers contained within the project do contain the search terms.

\+ Case 3 “The search results with projects and layers”  The search terms will be highlighted within the resulting project(s) name along with the resulting layer name(s) and display all projects and layers with a green rectangle highlighting the resulting terms within the project or layer titles.

Note: When the search doesn't return a result, the dashboard page won't display any projects or layers.

#### Page Break On Dashboard Page

The dashboard default view shows a limited number of projects per page, but you are able to change the number of rows displayed with the dropdown menu, or scroll right and left through the pages of projects.

![](/assets/images/lokahi/image55.png)

Figure 25

Procedure

1.  The page break group on the top right has 4 Elements which include the number of projects per page setting \[5, 10 or 20 rows per page\], "Current Page \[current projects\] of \[total projects\]", the \[Previous page\] arrow and the \[Next page\] arrow.
2.  The \[Previous page\] arrow and the \[Next page\] arrow are disabled when the number of projects is equal to less than the number of rows per page selected on the dropdown.
3.  When there are pages available to scroll through the \[Next\] arrow is active, but once you reach the last page available the \[Next\] arrow is inactive and only the \[Previous page\] arrow is enabled.
4.  When you are on the first page the \[Previous\] arrow is inactive, but the \[Previous\] button is active once you click through to any page after the first page.

#### Project Full Screen Page

With the projects that have more than 6 layers on the Dashboard, you can scroll to the right to the 6th project and a frame will display the number of additional layers available.  Hover over the frame and click on “Show more” or click on project name and the project will expand to a full screen view of all the layers in that one project. The Project Full Screen page has a very similar layout and navigation to the dashboard functions.  Scroll to the right to reveal the last frame with the number of additional layers.

![](/assets/images/lokahi/image4.png)  
Figure 26: Click ‘Show More’ to navigate to the Project Full Screen Page

Procedure

1.  On the Dashboard, choose a project that has more than 6 layers.
2.  Scroll to the end. You will see a frame that displays the number of the additional layers.
3.  Hover over that frame and click on the \[Show more\] button or click on the project name. It will access the “Project Full Screen Page” to see all agreements of that one project.

#### Filter On Project Full Screen Page

You can filter layers by using the filter group on the Project Full Screen Page. The filter can be based on the layer type {Logit; Element; Contract}, the status of Contract {Deployed; Not Deployed}, the created date of the layer, the order by time and by alphabetical order of the layer’s name.

![](/assets/images/lokahi/image51.png)  
Figure 27: Project Full Screen displays all layers in one project and Filter frame

For more information about the layer’s types, see [Layer Levels & User Permissions](#layer-levels-&-user-permissions).

Procedure

1.  Click on the \[Filter\] button. A “Filter” form displays 3 options: LAYER’S TYPE, LAYER’S CREATION DATE, SORT BY
2.  The “Layer’s Type” section automatically includes all 4 boxes {Logit; Element; Deployed Contract; Not Deployed Contract} as already ticked. Once you select the desired layers and click the \[Search\] button, any layer that doesn’t belong to the layer type that is ticked will disappear on the Dashboard page in the search results. If you don’t tick any boxes in the “Layer’s Type” part, all layers will appear once you click the \[Search\] button on “Filter” form.
3.  When the Filter form initially pops up, the "Layer’s Creation Date" section is switched to "OFF" status. When you change to "ON" status 2 inputs appear {From; To} with date ranges. The default is set "From" as "Jan 1, 1970" and "To" date is the current date, so all layers will display on the Dashboard page by default. You can set the period of time in which layers were created to display. The layers that were not created during the range will disappear during the search results.  You can change the “Layer’s Creation Date” switch back to the default of OFF to remove the date filter.
4.  The "Sort by" section, includes a "Sort by" combobox with 4 options to choose from {Ascending time; Descending time; A-> Z; Z->A}, allowing you to sort by time or alphabetical order. The default option is "Descending", so all layers are filtered by the descending time that they were created by default.
5.  If you click the \[Clear\] button at the bottom of the “Filter” form, it will clear all the filtered results and return you to the dashboard screen.
6.  Once you have made all of your selections from the previous steps, when you click on the \[Search\] button in the “Filter” form, it will filter the layers according to your chosen selections.

#### Search On Project Full Screen Page

You can search the layers within the project by typing in the “Search” input frame on the Project Full Screen Page.

Procedure

1.  Click into the “Search” input frame.
2.  Enter text into the “Search” input frame.
3.  The search terms will be highlighted within the resulting layers name(s) and display only those layers with a green rectangle highlighting the resulting terms within the actual layer title.

Note: When the search doesn't return a result, the page won't display any projects or layers.

#### Page Break On Project Full Screen Page

The Project Full Screen page default view shows a limited number of projects per page, but you are able to change the number of rows displayed with the dropdown menu, or scroll right and left through the pages of layers within the project.

Procedure

1.  The page break group on the top right has 4 Components which include the number of rows per page setting \[5, 10 or 20 rows per page\], "Current Page \[current layers\] of \[total layers\]", the \[Previous page\] arrow and the \[Next page\] arrow.
2.  The \[Previous page\] arrow and the \[Next page\] arrow are disabled when the number of layers is equal to less than the number of rows per page selected on the dropdown.
3.  When there are pages available to scroll through the \[Next\] arrow is active, but once you reach the last page available the \[Next\] arrow is inactive and only the \[Previous page\] arrow is enabled.
4.  When you are on the first page the \[Previous\] arrow is inactive, but the \[Previous\] button is active once you click through to any page after the first page.

#### Project Description On Full Screen Page

You can add the diagram and description for your project at Full Screen Page of that project.

![](/assets/images/lokahi/image8.png)

Figure 28

Procedure

1.  Once clicked on the "Project Description" option in the "Project Menu" at Dashboard, it accesses to the Full Screen page and opens the "Editing with Smart contract" screen.
2.  Once you click the \[Click to upload Diagram here\] link button at the first time after you click the \[Edit\] button, it opens a window to choose the picture to upload. Once it uploaded the picture on the "Editing with Smart contract" screen and saved it, this button does not appear again.
3.  Once clicked the \[Upload diagram\] button, it opens a window to choose the picture to upload. It allows saving the { jpeg, svg, png} picture format.
4.  It allows entering any character on the "Write description for project" textbox.
5.  Click \[Save\] button.

### User Profile & Setting

You can check your profile and edit the information related to your account like organization, project, user management by clicking on the account icon at Dashboard page then choose “My Profile” option.

#### My Profile

At the “My Profile” tab, you can see your account’s information like username, your email is used to register an account, your role, you can change your password, and you can upload your avatar.

Procedure to change the password at “My Profile” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.

![](/assets/images/lokahi/image43.png)

Figure 29

2.  Click on the sentence “Change Password”.

![](/assets/images/lokahi/image64.png)

Figure 30

3.  A “Change Password” dialog appears.

![](/assets/images/lokahi/image66.png)

Figure 31

4.  You can change your password and do not need to send a verification link to your email. You have to fill your current password and your new password. Then click the \[Save\] button.

Note: You have to enter a password that satisfies like a password format when you Sign Up, click [User Account Sign Up](#user-account-sign-up) for more information.

Procedure to upload your avatar at “My Profile” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Hover on the frame that shows your first character in your username to see the \[Change\] button.
3.  Click on the \[Change\] button and choose your image that you want to upload for your avatar.

#### User Management

At the “User Management” tab, only administrator accounts can open this tab. The administrator can see all accounts’ information like username, the email address used to register an account, the account’s role. The administrator can add a new user, delete a user, and assign or change a role for a user.

Procedure to add new user at “User Management” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Choose the “User Management” tab.

![](/assets/images/lokahi/image25.png)

Figure 32

3.  Click on the \[Add New User\] button.
4.  The next tab has a direction which is “User Management / Add User” displays.

![](/assets/images/lokahi/image49.png)

Figure 33

5.  Enter in the fields which are required are: “Display Name” ,“Username”, “Email”, “Password”, and “Confirm Password”.

Note: You have to enter in these fields which satisfy as when you Sign Up, click [User Account Sign Up](#user-account-sign-up) for more information.

6.  Check the “Can create new project” checkbox if you want that account is able to create a new project.
7.  Choose a role for that project by clicking on one of four radio checkboxes.

Note: Click [The Roles And The Functions Of Each User: User Permissions](#the-roles-and-the-functions-of-each-user:-user-permissions) for more information about the role of user.

8.  The \[Create\] button can be enabled to click.
9.  Once clicked the \[Create\] button, a green pop up “Add User Successfully!” appear.
10. Then a verification link is sent to that email of that user account. Like the [User Account Sign Up](#user-account-sign-up) process.

Procedure to change the role of an existed user at “User Management” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Choose the “User Management” tab.
3.  Hover on the row contains that user’s information.
4.  Click on the three dots icon button.
5.  Choose the “Show details” option. Or click on that username.
6.  The next tab has a direction of “User Management / {Username}” displays.
7.  The fields are disabled are: “Display Name” ,“Username”, and “Email”.
8.  You can change the role by ticking another radio checkbox.
9.  Then click the \[Save\] button. A green pop up announces “Update User Successfully!”.

Procedure to delete a user at “User Management” tab

1.  Click on the account icon at Dashboard page then choose “My Profile” option.
2.  Choose the “User Management” tab.
3.  Hover on the row contains that user’s information.
4.  Click on the three dots icon button.
5.  Choose the “Delete” option. Or choose the “Show details” option then click the \[Deleted User\] button.
6.  A dialog box "Delete User" has content is "Are you sure you want to delete user "{username}"?".
7.  If you click on the \[Yes\] button, a green pop up shows up and announces "Delete User Successfully!”, it returns to the first screen of the "User Management" tab. That user does not exist anymore.

#### Organization

At the “Organizations” tab, you can see all organizations that you have taken part in like organization names, the members of those organizations, the number of projects of those organizations owned. The administrator account manages all organizations even if they don’t take part in it. You can create your own organization but cannot delete that organization except the administrator account. But you can assign or revoke the “Admin” role, or remove or add the other member if you have an “Admin” role in that organization.

Procedure to add new organization at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.

![](/assets/images/lokahi/image38.png)

Figure 34

2.  It opens the “Organizations” tab.

![](/assets/images/lokahi/image37.png)

Figure 35

3.  Click on the \[Add Organization\] button.
4.  It shows the "New Organizations" dialog box.

![](/assets/images/lokahi/image15.png)

Figure 36

5.  Enter a string in the “Organization Name” input. It requires entering at least 3 characters and less than 128 characters. It does not allow you to enter the special characters and blank space except "\_".
6.  Once entered a valid string into the "Organization Name" input, the \[Create\] button will be enabled. Once clicked on the \[Create\] button, a green pop up announces "Create Organization Successfully!" and a new organization appears at the first row of the table. That new organization has already a member as admin is the user who created that organization.

Procedure to add member at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.
5.  Choose the “Show details” option. Or click on that organization name.
6.  Click on the \[Add Member\] button.
7.  It shows the "Add Members" dialog box.
8.  Once you click on the "Dropdown" icon and don't have any option, it shows a label "No options". We have to type to search. We can search by email and username, it will respond no more than 10 results per searching time. Once you choose one option, the number of 10 users is decreased one.
9.  Once clicked on the user option, it disappears on the dropdown list and appears a label button has the name of that user in the input combobox.
10. Once clicked on the"x" icon on the labels have been added, that label button disappeared from the input combobox and appears again on the dropdown list.
11. Once clicked on the"x" icon near the "dropdown" icon, all the user labels which have been added will be cleared and that "x" icon will disappear.
12. One clicked the \[Cancel\] button or the "X" exit icon, the dialog will be closed.
13. The \[Add\] button only enables if you have at least one user. Once clicked \[Add\] button, a green pop up shows "Add User To Organization Successfully!" and in the table appears that user in the first row.
14. Once entered in the input combobox the options in the dropdown list will be filtered the username which has the string has been entered.

Note: Just administrators can do this “Add Members” feature.

Procedure to assign or revoke or remove member at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.

![](/assets/images/lokahi/image73.png)

Figure 37

5.  Choose the “Show details” option. Or click on that organization name.
6.  Hover on the row contains a user.
7.  Click on the three dots icon button.
8.  Once clicked the "Assign Admin" option, in the "Role" column, the label "Admin" will be added in the "Role" column of the account which is assigned. And the green pop up shows "Make Admin Of Organization Successfully!".
9.  Once clicked "Revoke Admin", in the "Role" column, the label "Admin" will disappear in the "Role" column of the account which is assigned. And the green pop up shows "Remove Admin Of Organization Successfully!".
10. Once clicked "Remove", a confirmation dialog has the title "Remove User" appears and has the content "Are you sure you want to remove '{username}' from the organization 'Organization's name'?". If you click the \[No\] button or the "x" exit icon, it closes the dialog. If you click \[Yes\] button, the green pop up shows "Delete User From Organization Successfully!".

Note: Just an administrator or user who has an admin role on an organization can do these features: assign, revoke and remove.

Procedure to delete a organization at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.
5.  Choose the “Delete” option. Or choose the “Show details” option then click the \[Deleted Organization\] button.
6.  A dialog box "Delete Organization" has content is "Are you sure you want to delete organization "{Organization’s name}"?".
7.  If you click on the \[Yes\] button, a green pop up shows up and announces "Delete Organization Successfully!, it returns to the first screen of "Organizations" tab. That organization does not exist.

Note: Just administrator can do this “Delete Organization” feature.

Procedure to show more projects that organization owned at “Organizations” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option.
2.  It opens the “Organizations” tab.
3.  Hover on the row contains that organization’s information.
4.  Click on the three dots icon button.

![](/assets/images/lokahi/image101.png)

Figure 38

5.  Choose the “Show details” option. Or click on that organization name.
6.  Once clicked on the "Show more" button at "Projects Owned by {Organization's name}" form, it accesses the "Projects" tab and shows all the projects of that organization is owning.

![](/assets/images/lokahi/image35.png)

Figure 39

#### Projects

At the “Projects” tab, you can see all projects of that account are created or took part in. The administrator account manages all projects even if it doesn’t take part in. The user owned that project or the user as admin role of an organization owned that project: can do the “Add Collaborator” feature to add user or organization to have “Read”, or “Write”, or “Delete” access on a project; can transfer a project from user or organization (each user has “Admin” role in that organization) owned it to an organization will own that project; can delete project.

Note: Only the user owned that project or the user as admin role of an organization owned that project can see the group of buttons \[Add Collaborator\], \[Transfer Project\], \[Delete Project\]. If it doesn't belong to any case above, it cannot do any feature of those buttons.

![](/assets/images/lokahi/image12.png)

Figure 40

Procedure to add collaborators for user or organization at “Projects” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option or “My Profile” option.
2.  It opens the “Organizations” tab or “My Profile” tab. Choose the “Projects” tab.
3.  Click on the project name in the table. That project has to be created by that user account that is logging in.
4.  Click on the \[Add Collaborators\] button.
5.  Once clicked on the \[Add Collaborators\] button, a dialog has the title "Add Collaborators" appears and has an input combobox. The \[Add\] button is disabled. There are:

-   A input combobox has a placeholder "Search and Select Users or Organizations"
-   The "Access" with 3 radio tick boxes are "Read", "Write" and "Delete".
-   The \[Cancel\] and \[Add\] buttons.

6.  Once you click on the "Dropdown" icon and don't have any option, it shows a label "No options". We have to type to search. We can search by email, username and organization. It will respond to no more than 10 results per searching time in 2 parts which are User and Organization.
7.  Once clicked on the user or organization option, it disappears on the dropdown list and appears a label button has the name of that user or organization in the input combobox. And the \[Add\] button is enabled and the "x" icon appears near the "dropdown" icon.
8.  Once clicked on the "x" icon on the labels which have been added, that label button disappeared from the input combobox and appeared again on the dropdown list.
9.  Once clicked on the "x" icon near the "dropdown" icon, all the user or organization labels have been added and will be cleared all and that "x" icon will disappear. Then the \[Add\] button is disabled.
10. One clicked the \[Cancel\] button or the "X" exit icon, the dialog will be closed.
11. Once clicked \[Add\] button, a green pop up shows "Grant Rights To Project Successfully!" and in the “User” table appears that user in the first row with an "X" icon on the "Access" column or if is is an organization, it appears on the “Organization” table under the “User” table in the first row with an "X" icon on the "Access" column but under the organization owner that project if it is. Even if you transfer that project to the organization that contains the user has been added collaborator before, it still displays the "X" icon.
12. Once entered in the input combobox the options in the dropdown list will be filtered by which username and the organization name in the string has been entered.
13. When hover each tickbox, a tooltip appears:

-   With "Read": "Can access to see projects but cannot edit, delete or duplicate projects."
-   With "Write": "Has full access with Read. Can access to edit or duplicate projects."
-   With "Delete": "Has full access with Read and Write. Can access to see, edit, delete or duplicate projects.".

14. Once added colaborator, that user will appear on the "User" table of "Projects" tab that organization and all users belong to that organization will appear on the "User" table and "Organization" table of "Projects" tab with:

-   if tick "Read": in the "Access" column appears "Read";
-   if tick "Write": in the "Access" column appears "Read" and "Write";
-   if tick "Delete": in the "Access" column appears "Read", "Write" and "Delete";

15. And an "X" icon appears in each row of the "Organization" table, it does not appear in each row all users belong to that organization.
16. When clicking on the "X" icon, a "Remove Collaborator" dialog appears and asks you "Are you sure you want to remove {organization name}'s access to {user/organization owned the project}/{project name}?".
17. If you click the \[Yes\] button, the green pop up shows "Remove Rights To Project Successfully!". And that organization and all users belonging to that organization will disappear from the "User" table and "Organization" table of "Projects" tab.
18. Once open again the "Add Collaborators" dialog, in the combobox, it still displays that organization has added collaborators.
19. If we use that organization has been added collaborator to add collaborator again with changing the access, it will update again the access of that organization and all users belong to that organization on the project.

Procedure to transfer project is owned by a user to an organization at “Projects” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option or “My Profile” option.
2.  It opens the “Organizations” tab or “My Profile” tab. Choose the “Projects” tab.
3.  Click on the project name in the table. That project has to be created by that user account that is logging in.
4.  Click on the \[Transfer Project\] button.
5.  Once clicked on the \[Transfer Project\] button, a dialog with the title "Transfer Project" appears and shows a combobox has a placeholder "Search and Select Organizations". The \[Add\] button is disabled. And the \[Cancel\] button is enabled.
6.  Once you click on the "Dropdown" icon and don't have any option, it shows a label "No options". We have to type to search. We can search by organization name. It will respond no more than 10 results per searching time in a part is Organization. If a project is owned by an organization, then that organization is not listed on the dropdown list.
7.  Once clicked on an organization option, it is held in the dropdown list and appears as the organization name in the input combobox. It just allows choosing one option. And the \[Transfer\] button is enabled.
8.  One clicked the \[Cancel\] button or the "X" exit icon, the dialog will be closed.
9.  Once clicked \[Transfer\] button, a green pop up shows "Transfer Project Successfully!" and access to the first page of "Project" tab. When clicking on that project, it appears on the first row of "Organization" table (always), with the "OWNER" label beside has transferred from the user who owned that project to all of user of that organization and the users of that organization will be added in the "User" table without "X" icon in the "Access" column (because all those users now have full access "Read", "Write" and "Delete").

Procedure to delete project is owned by a user or an organization at “Projects” tab

1.  Click on the account icon at Dashboard page then choose “Organizations” option or “My Profile” option.
2.  It opens the “Organizations” tab or “My Profile” tab. Choose the “Projects” tab.
3.  Click on the project name in the table. That project has to be created by that user account that is logging in.
4.  Click on the \[Delete Project\] button.
5.  Once clicked on the \[Delete Project\] button, a dialog box "Delete Project" has content is "Are you sure you want to delete project "{Project name}"?".
6.  If you click on the \[Yes\] button, a green pop up announces "Delete Project Successfully!" and that row contains that Project has disappeared on the “Projects” table.

## WORKBOARD NAVIGATION OVERVIEW

7

### Menus & Buttons On The Workboard

The Workboard is the primary area to design Contracts and Elements.

![](/assets/images/lokahi/image104.png)

Figure 41

#### (1) Add Component: Groups Menu (Contract)

On the Contract workboard, you can edit the name, icon, duplicate and delete Element blocks.  
![](/assets/images/lokahi/image50.png)

Figure 42

-[Edit Element Block Name & Icon](#h.vg5t2b1nht9n)

-[Duplicate Elements](#duplicate-a-contract-on-the-workboard)

-[Delete Elements](#delete-a-contract-on-the-workboard)

#### (2) Add Component: Groups Menu (System Element)

On the Element workboard, you can edit the name, icon, duplicate and delete Elements.

![](/assets/images/lokahi/image52.png)

Figure 43

-[Edit Logit Block Name & Icon](#h.cf4bpk5qhwyt)

-[Duplicate Logits](#duplicate-a-contract-on-the-workboard)

-[Delete Logits](#delete-a-contract-on-the-workboard)

#### (3) Add Component: Groups Menu (Logit Element)

#### ![](/assets/images/lokahi/image99.png)

Figure 44

#### (4) Layers Dropdown Menu (Contract)

On the Contract workboard Layers dropdown Menu you can create new and edit existing layers.

![](/assets/images/lokahi/image93.png)

Figure 45

\-[Create New Layer](#create-new-contract-layer-on-the-workboard)

#### (5) Layers Dropdown Menu (Elements)

![](/assets/images/lokahi/image16.png)

Figure 46

\-[Create New Layer](#create-new-contract-layer-on-the-workboard)

\-Create New Elements

\-Admin & Engineers Navigate Between Layers Menus

#### (6) Accessing The System Tray Icons

![](/assets/images/lokahi/image18.png)

Figure 47

-[Download Workboard Process](#download-icon)

-[Formal Analysis Checks](#transaction-icon)  
\-[Print](#print-/-save-pdf-icon)

-[Find Elements On The Workboard Via Search](#find-icon)

-[Deploy](#h.3ew3d88u4eb6)

#### (7) Edit Logit Element Settings

![](/assets/images/lokahi/image46.png)

Figure 48  
[Bottom Left Settings Icon on Workboard Screen](#h.qhwk13qfkym6)

#### (8) Edit Element Settings

![](/assets/images/lokahi/image46.png)

Figure 49

[Bottom Left Settings Icon on Workboard Screen](#h.qhwk13qfkym6)

#### (9) Edit Contract Settings

![](/assets/images/lokahi/image46.png)

Figure 50  
[Bottom Left Settings Icon on Workboard Screen](#h.qhwk13qfkym6)

#### (10) Access Help Center

![](/assets/images/lokahi/image42.png)

Figure 51

\-[Trigger Onboarding Tutorial](#h.xp4rp89eeex0)

## WORKBOARD TASKS & MANIPULATIONS

8

### Creating Contracts And Elements On The Workboard

#### Create New Contract Layer On The Workboard

You can create a new Contract layer from the workboard of any layer by navigating to the “Layer dropdown Menu” at the top of the screen.

Procedure

1.  Access the "Layer dropdown Menu" at the top of the screen (located next to the name of the current layer you are currently viewing). You will see the name of the current layer you are viewing, below it click on the \[New\] button to show the "Create New Component or Contract" screen (You also have the option to click on the menu of the current layer and ‘duplicate’ the current layer, for more information see [duplicate a Contract on the workboard](#duplicate-a-contract-on-the-workboard)).
2.  A new window will pop up and you will see "Contract”, underneath click on \[Create New Contract\] which will take you to the "Create New Contract" screen. Enter in the “Name” field of the "Create New Contract" screen.
3.  After entering a name for the Contract layer the \[Create\] button will be enabled for you to click on to create your Contract.
4.  After creating the Contract, you will be directed back to the workboard of the Contract you were viewing and will see a green message that says ‘Create Successfully’.  To access your new Contract return to the “Layer Dropdown Menu” and select the newly created Contract.

#### Creating A New Element On The Workboard

You can create a new Element layer from the workboard of any Contract or Element by navigating to the “Layer Dropdown Menu” at the top of the screen.

Procedure

1.  On the Workboard, open the "Layer Dropdown Menu", click on \[New\] button.
2.  A “Create New Component or Contract” screen will pop up and you will see " Elements” as an option. Underneath click on \[Create New Element\] which will take you to the "Create New Element" screen where you will enter the \[Name\] field, select a category and choose an icon.

3.  You can also create an Element in the “Add Component” menu sidebar from the Workboard on the Contract or Element. If no Elements have been created yet for the project you will see a message "You don't have an Element" and below a \[Create\] button to click on, which will take you to the “Create New Component or Contract” screen. If categories do exist, then right click on the title of the category that you want to create a new Element in, and select \[New Element\] which will take you to the “Create New Component or Contract” screen.

4.  Enter in the “Name” field of the "Create New Element" screen. You can use the alphabet, number, blank space, and special characters to type a name for your Element.
5.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, blank spaces, and special characters (like: “\_”) to type a name for your category.
6.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
7.  After completing the steps above, the \[Create\] button will be enabled for you to click on to create the Element.
8.  Once created, the Element will be visible on every Contract of the project that it was created in.

Additional: You can use the same name for multiple Elements within the project.

#### Creating A New Logit Layer On The Workboard

You can create a new Logit layer from the workboard of any Contract or Element by navigating to the “Layer Dropdown Menu” at the top of the screen.

Procedure

1.  On the Workboard, open the “Layer Dropdown Menu", click on the \[New\] button.
2.  A “Create New Component or Contract” screen will pop up and you will see "Logit” as an option.  Underneath click on \[Create New Logit\] which will take you to the "Create New Logit" screen where you will enter the \[Name\] field, select a category and choose an icon.
3.  Enter \[Name\] field of “Create New Logit" screen.  You can use the alphabet, number, blank space, and special characters to type a name for your Logit.
4.  Select a "Category" from the dropdown list of default categories or you can type a new category for the layer. You can use the alphabet, numbers, blank spaces, and special characters (like: “\_”) to type a name for your category.
5.  The \[Choose icon\] button is enabled and you have the option to click and select the icon of your choice, or upload an icon if preferred on the next window.
6.  After completing the steps above, the \[Create\] button will be enabled for you to click on to create the Element.
7.  Once created, the Logit will be visible on every Element of the project that it was created in.

#### Configure A Contract Layer On The Workboard

Once you have created a new Contract layer, you are now able to design a process on the workboard to  build the Contract using the pre-configured Element blocks from the ‘Add Component Menu’ in the sidebar.

Procedure

1.  After creating a Contract layer, access the Contract’s workboard to define the process.
2.  To make a connection between two Element blocks, drag and drop one Element block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Element block onto the workboard nearby.  You can use the [Recommendation feature](#h.hn8dssee8jg2) to guide you.
3.  To connect the two blocks, hover over the first Element block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  The next step is to configure the connection created by the arrow to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue blox will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
5.  Next, drag an input shape in column 1 to the desired output shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
6.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
7.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable so you can click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

8.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no blocks are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks which are unconnected exist, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.
9.  If the \[Deploy\] button is not enabled, you can click on the \[Recommendation\] button at the bottom of the page and a “Recommendation” sidebar appears with the warnings box to announce which arrow(s) you need to define or some block need to connect.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

10. If all arrows are defined without warnings at the “Recommendation” sidebar, you are now potentially ready to move to [Deploying to the Blockchain](#deploying-to-the-blockchain). Now you finish creating a Contract which is what gets created in the Contract layer.
11. You can add data for the Contract at the “Add Data” sidebar.

For more information about the “Add Data” feature, see [Add Data Sidebar](#add-data-sidebar).

Note: In the bottom left hand corner of the screen, there is a \[Settings\] button that allows you to rename the Contract layer you are working on if desired.

#### Configuring An Element On The Workboard

After you have [created a new Element](<#creating-a-new-element-layer-(dashboard)>), you are now able to configure the Element on the workboard.

Procedure

1.  After creating an Element layer, access the Element’s workboard to define the process.
2.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
3.  To connect the two blocks, hover over the first Logit block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
4.  To make a connection between two Logit blocks, drag and drop one Logit block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd Logit block onto the workboard nearby.
5.  To connect the two blocks, hover over the first Logit block and ‘click and drag’ on one of the 4 squares that appear and drag the line to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).
6.  The next step is to configure the connection on the arrow between 2 Logit at Element’s workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an “Add Component” ![](/assets/images/lokahi/image23.png) icon that allows you to configure the connection. Click on the “Add Component” ![](/assets/images/lokahi/image23.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
7.  Next, drag an input shape in column 1 to the desired output shape in column 2 to define the input/output connection. When a connection is successful, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.
8.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.
9.  In the left table, depending on your connection type you have made you will see the “[Variable](#variable)” screen, “[Edit Expression](#edit-expression)” screen or “Merge Component” screen. If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will enable so you can click.

For more information about “Step 1: Make Your Connection” screen and “Step 2: Define your connection”, go to [Define A Connection](<#define-a-connection-(make-your-connection)>).

10. Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined and no block are unconnected, you are allowed to deploy. If not all arrows have been defined and some blocks which are unconnected exist, you cannot deploy until you solve all recommendations in the “Recommendation” sidebar.

For more information about the “Recommendation” feature, see [Recommendation Feature](#recommendation-feature).

11. In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#h.qhwk13qfkym6)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
12. Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type depending on the parameters set in the “Register” blocks and “Operation” blocks of the Logit block that was configured as an input and an output port. You can choose how many options you want by ticking on a checkbox in front of each option. After chosen, that Logit block will provide the input or output or both to become the input and output ports of the Element you are configuring.
13. Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again.
14. At the top of the window, click on “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
15. Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the Element available at the Contract for use at the Contract level.
16. Now, you finish creating Elements which is what gets created in the Element.

Tip:  When you are on the Contract, you can quickly move down to the workplace of any Element by double clicking on any block icon on the workboard.Tip: You can group Elements by clicking and dragging to highlight any group of Element blocks to create a new Element.  Once you release the selection, the group of Elements will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen.  You can configure inputs/outputs, name, category and choose an icon for the new Element and then click the \[Create\] button to finish the creation of a new Element process.

#### Configuring A Logit Layer On The Workboard

After you have [created a new Logit](#creating-a-new-logit-layer-on-the-workboard), you are now able to configure the Logit on the workboard. Logits is what gets created in the Logit.

Procedure

1.  After creating a Logit, access the Logit’s workboard to define the process.
2.  To make a connection between two blocks, “drag and drop” one “Register” or “Operation” block from the “Add Component” sidebar on the left hand side of the screen onto the workboard.  Now drag and drop a 2nd block onto the workboard nearby.
3.  To connect the two blocks, hover over the first block and ‘click and drag’ on one of the 4 squares that appear and drag the arrow to one of the 4 squares that appear on the 2nd block and release, which will create an arrow between the two blocks linking them together. For more information, see [Connecting Blocks on the Workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>).

Attention: A valid model cannot have an “Operation” block at the end point or the starting point of the model. A “Register” block cannot point to a “Register” block and an “Operation” block cannot point to an “Operation” block. A “Register” block can only connect to an “Operation” block and an “Operation” block can connect to a “Register” block.

4.  In the bottom left corner of the workboard there is a settings button at the bottom of the “Add Component” sidebar, click on this \[[Edit](#h.qhwk13qfkym6)\] button. The “Configure port and Component info” screen appears. The “Configure port” tab in the left table shows all combination graphs on the workboard, allowing you to configure inputs and outputs.
5.  Click on a block in the “[Configure Port](#configure-port)” tab. A blue border will surround the block and a list appears with the option to select the input and output type or both. You can choose one option. After chosen, that Logit block will have the input or output or both.
6.  Once you tick a checkbox, the right table of the "Configure port" screen displays a list of "Input port" and "Output port" fields that include "Name", "Description", and the "Write long Description" button, and the "Required Hashtags" input. You can rename and write more descriptions for those ports. You can choose another option for that block by clicking on that block again. You can add a required hashtag for a port to let it require you to connect with other Logit blocks on the Element layer.
7.  At the top of the window, click on the “Component info” tab. You can rename and choose a group category and change the icon for the Element you are configuring.
8.  Once you are finished, click the \[Save\] button and you will be returned to the workboard.  This automatically makes the Logit available at the Element layer.
9.  Next, you can edit and configure your model.
10. With the “Register” blocks, you can choose the types are defined at “[Define Type](#define-type)” screen by clicking on “Register” block then choose “Edit Markings” option once clicked “Add Marking” ![](/assets/images/lokahi/image2.png) icon. Then choose what “Register” block is allowed to [add data](#add-data-sidebar) at Element or Contract. For more details about the process to choose type and configure for a “Register” block,  go here [Edit Markings](#edit-markings).
11. Click on the arrow connect from “Register” block to “Operation” block then click “Add Variable”![](/assets/images/lokahi/image14.png) icon, the “Variable” screen appears to let you choose the variables of the message of the “Register” block. For more details about the process to choose variables, go here [Variable](#variable).
12. With the “Operation” blocks, you can set the condition for transition of the variables of the message in the “Register” block by clicking on “Operation” block then choose “Edit Guard” option once clicked “Add Guard” ![](/assets/images/lokahi/image22.png)icon. For more detail about the process to set the condition for transition, go here [Edit Guard](#edit-guard).
13. Click on the arrow connect from “Operation” block to “Register” block then click “Add Expression”![](/assets/images/lokahi/image20.png) icon, the “Edit Expression” screen appears to let you regulate the output of the “Operation” block, by creating a new message and depending on the condition of the output, the type of message can then be created. For more detail about the process to regulate the output of the “Operation” block, go here [Edit Expression](#edit-expression).
14. Now, you finish creating Logits which is what gets created in the Logit layer.

Tip: You can group a part of Logit by clicking and dragging to highlight any group of Logit’s blocks to create a new Logit.  Once you release the selection, the group of Logit’s blocks will be highlighted in a blue box and you can click “Add Component” ![](/assets/images/lokahi/image23.png) icon which will bring up the [Configure Port](#configure-port) screen. You can configure inputs/outputs, name, category and choose an icon for the new Logit and then click the \[Create\] button to finish the creation of a new Logit process.

#### Duplicate A Contract On The Workboard

On the workboard, you can duplicate an existing Contract by opening the “Layer dropdown Menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Contract and choose the “Duplicate” option.  A "Duplicate Contract" box appears to allow you to provide a new name for the new Contract.

Procedure

1.  One the workboard, open the “Layer dropdown list”, choose a Contract in that list then click the “Three dots menu”, then click on \[Duplicate\] option of the menu.
2.  A "Duplicate Contract" box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Contract.
3.  After entering a name in the “Name” field, the \[Save\] button will be enabled for you to click on to duplicate.

Note:  The duplicated Contract will store all manipulations and Elements in the original Contract but will not include the deployment history and the contract addresses. The duplicated Contract is dated as a new Contract and displayed as the top slide in the project as the most recent with the current date.

#### Duplicate An Element On The Workboard

On the workboard, you can duplicate an existing Element by opening the “Dropdown menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Element and choosing the “Duplicate” option.  A "Duplicate Element" box appears to allow you to provide a new name for the new Element.

1.  One the workboard, open the Layer dropdown list, choose an Element in that list then click the “Three dots menu”, then click on \[Duplicate\] option of the menu.
2.  A "Duplicate Element box appears. Enter in \[Name\] field: Can use the alphabet, number, blank space and special characters to type a name for your Element.
3.  After entering a name in “Name” field, the \[Save\] button will be enabled for you to click on to duplicate.

Note:  The other option to duplicate Elements is in the "Add Component menu" in the sidebar at Contract’s workboard, where you can right-click on any Element block and a "block menu" appears with 3 options {Edit; Duplicate; Delete}, choose \[Duplicate\] option.

#### Delete A Contract On The Workboard

On the workboard, you can delete an existing Contract by opening the “Layer dropdown Menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Contract and choose the “Delete” option.

Procedure

1.  One the workboard, open the Layer dropdown list, choose a Contract in that list then click the “Three dots menu”, then click on \[Delete\] option of the menu.
2.  A dialog box asks "Do you want to delete {this layer}?" with 2 options: “Yes” and “No”. Select Yes.
3.  After deleting the layer, a green popup announces a message that "Delete Successfully!”.

Note: You cannot reverse the Contract deletion, so consider carefully before deleting.

#### Delete An Element On The Workboard

On the workboard, you can delete an existing Element by opening the “Dropdown menu” at the top of the screen and then clicking on the “Three dots menu” of the specific Element and choose “Delete” option.

Procedure

1.  One the workboard, open the “Layer Dropdown Menu” and choose an Element in that list then click the “Three dots menu”, then click on \[Delete\] option of the menu.
2.  A dialog box asks "Do you want to delete {this layer}?" with 2 options: “Yes” and “No”. Select Yes.
3.  After deleting the Element, a green popup announces a message that "Delete Successfully!”.

Note:   The other option to delete Elements is in the "Add Component menu" in the sidebar, where you can right-click on any Element block and a "Block menu" appears with 3 options {Edit; Duplicate; Delete}, choose \[Delete\] option. You cannot reverse the Element deletion, so consider carefully before deleting.

#### Navigating Between Layers on The Workboard

You can see all layers in the current project from the Workboard and move alternatively among the layers by using the “Layer Dropdown Menu” in the toolbar on the Workboard.

Procedure

1.  Click on the “Layer Dropdown Menu” in the toolbar on the Workboard
2.  There are three radio buttons to choose from {Logit; Element; Contract}, select the layer list you would like to access.
3.  Choose the corresponding layer and click on the name of the layer you would like to switch to and it will load on the workboard.

Note: If preferred, you can search for the layer name by typing in “Search” input frame in “Layer dropdown list”. You can also easily create a new layer by clicking on \[New\] button at the bottom of the “Layer dropdown list”.

#### Edit Layer On The Workboard

You can see all layers in the current project from the Workboard and move alternatively among them to edit from the “Layer Dropdown Menu” in the toolbar on the Workboard.

Procedure

1.  Click on the “Layer Dropdown Menu” in the toolbar on the Workboard
2.  There are three radio buttons to choose from {Logit; Element; Contract}, select the layer list you would like to access. If preferred, you can search for the layer name by typing in “Search” input frame.
3.  Choose the corresponding layer and click on the name of the layer you would like to switch to and it will load on the workboard to edit.

#### Navigating The Add Component Sidebar Menu On The Workboard

The “Add Component” sidebar contains all of the Element blocks available within the project for use on the workboard.

![](/assets/images/lokahi/image79.png)

Figure 52

Procedure

1.  You can hide the “Add Component sidebar” menu by clicking on “x” icon to minimize the menu on the left hand side of the screen and clicking on the “Hamburger icon” (Three Horizontal lines) to re-open.
2.  Within the “Add Component sidebar” menu, there may be multiple categories available to minimize and maximize within a drop down list that shows all blocks available for use on the workboard.
3.  You can create a new Element in an existing group category in the “Add Component sidebar” by:

\+ Right clicking on that category and then clicking on the \[New Component\] option of the menu of that group category.  It opens the "Create New Logit" or ”Create New Element” screen to name the Component and choose the group category for the layer belonging to the lower layer type.

\+ If no Component exists In the Contract/Element the "Add Component" sidebar menu will display the message "You don't have an Element/a Logit" and below that a \[Create\] button. When you click on the \[Create\] button, it opens "Create New Logit” or “Create New Element” screen to name and choose a group category for the new Element.

4.  You can delete a category with all of the Components that belong to that category by right clicking on that category then click on \[Delete\] option of the menu of that category. This is a permanent action so consider carefully before deleting any category with the components inside.
5.  You can edit the basic information of a component in the "Add Component" sidebar menu, by right-clicking on any block. A "block menu" appears with 3 options {Edit; Duplicate; Delete}. \[Attention: Depend on your permission, so you can manipulate the feature “Right-clicking on any block” in the “Add Component” menu\].  When you choose the \[Edit\] option you can enter a new name in the “Name” field or change the icon or the source and then the \[Save\] button will be enabled for you to click on to save.

#### Edit Layer In The Add Component Sidebar On The Workboard

You can change the name, icon or category and configure the ports of the current component from the settings button in the bottom left hand corner of the Add Component sidebar.

![](/assets/images/lokahi/image72.png)

Figure 53

Procedure

1.  Click on the \[Edit\] settings icon in the bottom left hand corner of the “Add Component” sidebar.

Case 1: After clicking the "Edit" button the "Configure Port and Component info" screen appears.  If you do not have any blocks on the workboard, the “Configure Port” tab will be blank on the left side with a message on the right side that says "You must configure at least one input or output port. Please configure a port for one of these Components".  You need to return to the workboard and Add Component blocks to the workboard and follow the [Configure Port](#configure-port) instructions.

Case 2:  When you click the "Edit" button the "Configure Port and Component info" screen appears.  If you have placed component blocks on the workboard but have not configured a port yet,  the “Configure Port” screen will display the blocks on the left with the message "You must configure at least one input or output port. Please configure a port for one of these components". You can follow the [Configure Port](#configure-port) instructions to configure and then click the \[Save\] button, and when complete a popup displays the message "Update Successfully".

![](/assets/images/lokahi/image32.png)

Figure 54

Case 3:  After clicking the "Edit" button the "Configure Port and Component info" screen appears. If you have blocks on the workboard and have configured ports, the "Configure port" tab will display all blocks in the left table and in the right table displays a “Configure port” header with the number of blocks selected and it lists each type of port {input, output, both and none port} with the number of each type. After you [configure the port(s)](#configure-port) click the \[Save\] button, a popup displays the message "Update Successfully".

Additional: In the "Component info” tab, the name of the layer is used as the default in the "Name" field and the group is listed in the "Category” field.

![](/assets/images/lokahi/image53.png)

Figure 55

#### Configure The Private Blockchain At The Workboard

You can deploy a Contract to the private blockchain that you want by adding a new option blockchain on the Deployment form at the workboard.

Procedure

1.  Click the \[Deploy\] button on the toolbar to open the deployment form.
2.  Click on the “Deploy to blockchain” selection box.
3.  Click on the \[Custom Blockchain\] option.
4.  Type in the “Name” input and the “URL” input the link of the blockchain server which you want to deploy to.
5.  Click the \[Save\] button to save the new option of blockchain on the web.
6.  You can edit or delete the new blockchain option by hovering on that option and choose “Edit” icon or “Delete” icon

#### Configure The Metamask and Connect The Metamask With Lokahi

You can deploy a Contract to the Ethereum blockchain or any blockchain by using the extension “Metamask”. MetaMask is a bridge that allows you to visit the distributed web. It allows you to run Ethereum dApps.

Procedure

1.  Add the “Metamask” tool on the extension of the browser (support for Chrome, Opera, FireFox).
2.  Add your account address on the Ethereum blockchain or create a new one.
3.  Access to the Lokahi, and it will appear a dialog to let you know that you have to connect “Lokahi” with the “Metamask”. Click the “Connect” button on the dialog to connect with the “Metamask”.

![](/assets/images/lokahi/image58.png)

4.  On the “Metamask” dialog, click on the selection box which is displaying the name of the blockchain. You can choose the Mainnet “Ethereum” or the other Testnet. Or you can add your private Ethereum.
5.  To add the private Ethereum on the Metamask click on the selection box which is displaying the name of the blockchain.
6.  Choose the “Custom RPC” option.
7.  Type the information about the name of the blockchain (as “Ethereum private”), the link of the private blockchain (as “https://www.lokahi.io/ethereum”), and the symbol (as “Eth”).
8.  Click the \[Save\] button.

#### Deploy A Contract From The Workboard

You can deploy a Contract from the workboard once you have gone through formal verification, selected the blockchain destination and entered the pertinent account details \[address and private key for Ethereum, for example\] and click the “Deploy” button in the upper right hand corner of the workboard.

![](/assets/images/lokahi/image67.png)

Figure 56

Procedure

1.  Access the Contract’s workboard and ensure the workboard the Elements are verified for deployment.
2.  Click the “Deploy” icon in the upper right hand toolbar. A “Deployment” form expands down.
3.  Choose the blockchain you want to deploy on.
4.  Enter the in “Name” field of "Deploy" screen: Can use the alphabet, numbers, blank space and special characters to type a name for your agreement ’s contract.
5.  Enter in the “Version” field of the "Deploy" screen: You can only enter a number and three characters are "-", "." and "+".
6.  The subversion field:

\+ When entering the new name and the new version number, the subversion is "1".  
        + When using the same name and the new version number, the subversion is "1".

\+ When using the same name and same version number from the previous deployments, the subversion will increase 1 unit automatically after successfully deploy

7.  If you choose the other blockchain except “Fabric”, you need to include an address account and the private key so you can deploy the Contract.

1.  Enter in the \[Account Address\] field of "Deploy" screen. Can use the alphabet, numbers, blank space and special characters to type your account address.
1.  Enter the \[Private Key\] field of the "Deploy" screen. Can use the alphabet, numbers, blank spaces and special characters to type your private key. And each character will be replaced by a dot.

1.  If you are using the “[Metamask](#configure-the-metamask-and-connect-the-metamask-with-lokahi)” to deploy on the Ethereum blockchain Mainnet and Testnet or your [private Ethereum blockchain](#configure-the-private-blockchain-at-the-workboard), you can switch ON the “Authorize by Metamask” to let the Lokahi automatically connect with the account address on the blockchain that you are in without entering your account address and private key.
1.  A “Connected by Metamask” status button and a sentence “ Please Open Metamask to select the correct network and account to deploy!” appear to let you know that you are connected successfully with Metamask and remind you to choose the correct network.
1.  Click the \[Deploy\] button. After clicking the \[Deploy\] button, the contract address is displayed that has been returned from the blockchain. You can click “Show more transactions” to observe the contract’s status during or after the process, and to [view the deployment history of the Contract](#view-deployment-history-of-a-contract-on-the-dashboard).

Note:  If An Element is invalid on the Contract's workboard, and you click the \[Deploy\] button, an error message under the \[Deploy\] button warning that "Deployed failed! Your model has not been completed. Please finish all the tasks on the recommendation list to deploy".  You’ll need to correct the issue before attempting to deploy again, you can use the [Recommendation](#recommendation-feature) feature to assist with finding the issue.

#### View Deployment History Of A Contract From The Workboard

You can check the deployment history of a Contract from the workboard dashboard.

![](/assets/images/lokahi/image19.png)

Figure 57

Procedure

1.  Access the Contract’s workboard and navigate to the “Deploy” button in the upper right hand corner of the screen.  Click Deploy.
2.  Click Deploy again and a “Show more transactions” link will pop up.  Click on “Show more transactions.”
3.  A screen pops up with the title "Transactions". The default filter is set to ALL in the "Filter by:" section that includes 4 options {All; Success; Pending; Failed}.
4.  The view in the middle of the screen has 6 columns {Name; Version; Address/TxHash; Blockchain; Age; Status} with the following descriptions:  
    \+ Name: the name of the contract named in the Deployment process. If a name was not input during the deployment, the name will automatically default to the name of the Contract.  
    \+ Version: The newest version of the contract. If a version was not provided during deployment, it will automatically default to "0". It shows the version and subversion of the contract.  
    \+ Address/TxHash: The Hash address or contract address from the blockchain server.  
    \+ Blockchain: It displays which blockchains were chosen during Deployment.  
    \+ Age: The time counts from the time when the web has received the contract address to the current time.  
    +Status: Displays the current status of that contract. The 3 status options are {Pending; Success; Failed}.

5.  "Pending" when the TxHash was received but is still waiting for the contract address.
6.  "Failed" when the blockchain server can't send back the contract address.
7.  "Success" when the blockchain server sent back the contract address.

Note: The default view displays 5 contract addresses in a page, with the new contract address in the first position in the first page. You can use the page break at the bottom of the screen to see additional deployments beyond the original 5.

Tip:  You can copy the Constract Address of a deployment by clicking on the document icon.

### Workboard Toolbar (Top Right Of Screen)

The workboard toolbar is in the top right of the screen next to the Deploy button, and contains the “Download Icon”, “Formal Analysis Icon”, “Print/Save Icon” and the “Find Icon”.

![](/assets/images/lokahi/image60.png)

Figure 58

#### Download Icon

The workboard toolbar is in the top right of the screen next to the Deploy button, and the “Download Icon” is located in the toolbar. You can export the Workboard of a layer to save the work at that time and download it in JSON format.

Procedure

1.  In toolbar, click "Download Icon”
2.  When loading is finished, a file with the format “\[account's name\]+\[project's name\]\_\[message auto born \].json” will download.

#### Transaction Icon

The workboard toolbar is in the top right of the screen next to the Deploy button. You can check the deployment history of a Contract that has deployed at Workboard by clicking on the “Transaction” icon.

Procedure

1.  Click on the “Transaction” icon ![](/assets/images/lokahi/image103.png)
2.  Go to the [View Deployment History Of A Contract On The Dashboard](#view-deployment-history-of-a-contract-on-the-dashboard) to see the screen of Transaction history.

#### Print / Save PDF Icon

The workboard toolbar is in the top right of the screen next to the Deploy button, and the “Print Icon” is located in the toolbar. You can print the contents of the Workboard at any time and also have the option to ‘Save as a PDF’ with the date stamp.

Procedure

1.  On the toolbar, click on the Print icon between Find icon and Meta rules icon.
2.  Print screen appears on the top of the page. A screenshot captures the workboard of the session at that time that can be printed or saved as a PDF document.

#### Find Icon

The workboard toolbar is in the top right of the screen next to the Deploy button, and the “Find Icon” is located in the toolbar. You can find any block on the Workboard with the “Find Icon”.

Procedure

1.  Click on the “Find” icon to open the “Find” input frame.
2.  Enter a search text in the “Find” input frame.
3.  The resulting blocks will appear on the workboard while any blocks and ports that do not contain the search characters will be made invisible (blurred).

#### Hide/Show name Icon

You can change the status to “Hide name” to hide all blocks’ name on the workplace or to “Show name” to show all  blocks’ name on the workplace.

Procedure

1.  Click on the “Hide name” icon to change to the “Show name” status.
2.  Click on the “Show name” icon to change to the “Hide name” status.

#### Zoom Button

You can zoom in or zoom out the workboard by using the zoom button in the bottom right part of the screen.

![](/assets/images/lokahi/image86.png)

Figure 59

Procedure

1.  On the workboard, click on the "+" icon. The default value is "100%":  
    Case 1 in \[10% -> 100%\]: when you click the "+" icon it increases 10%.  
    Case 2 in \[100% -> 200%\]: when you click the "+" icon it increases 20%.  
    Case 3 in \[200% -> 400%\]: when you click the "+" icon it increases 50%
2.  On the workboard, click on the "-" icon. The default value is "100%":  
    Case 1 in \[10% -> 100%\]: when you click the "-" icon it decrease 10%  
    Case 2 in \[100% -> 200%\]: when you click the "-" icon it decrease 20%  
    Case 3 in \[200% -> 400%\]: when you click the "-" icon it decrease 50%

Note: The default zoom area is the top-left of the workboard.

### Workboard Manipulations

#### The “Lock” status

This is recognized by a "Lock" icon appearing at the top of the "Add Component" menu and a message box in the workboard announce that "THIS PROJECT HAS BEEN LOCKED! You can not edit this project because another user is working on it.". There are some cases to become the “Lock” state:

![](/assets/images/lokahi/image9.png)

Figure 60

1.  When 2 accounts manipulate the same project at the same time (just Administrator with other user levels), the account that accesses the project first can manipulate the project and the account that accesses after cannot manipulate the project.
2.  When a user only has “[Read](#projects)” access on a project.

#### Instance Block

Definition of Instance: Once dragged the original block on the [“Add Component” sidebar](#navigating-the-add-component-sidebar-menu-on-the-workboard) on the workplace, we created an instance of that original (the copy of the original, the instance inherited from the original block so cannot delete the attributes from the original block).

There are some rules and some attentions to follow when you edit the model:

1.  Update:

1.  Can [change the name of the instance](#change-the-name-of-block) by clicking on the pen icon next to the name of that instance on the workplace, and when [going inside of the instance](<#double-click-on-a-block-(at-contract-or-element)>), the instance name appears on the toolbar under the type name of the layer.
1.  Can change the name of the original block, but don't affect the name of instances that are dragged on the workplace if you haven’t changed the instance’s name on the workplace.
1.  Can [change the type of a Register block](#edit-markings) inside of the instance, but don't affect that Register block inside the original block. And after that, when changing something relates to that Register block inside the original block, it cannot affect that Register block inside the instance.
1.  Can change the type of a Register block inside of the original block, it will affect the instance if you don't change anything like [adding a message](#edit-markings), [changing the type](#define-type), [changing the port](#configure-port), [adding a hashtag](#manage-hashtags),.... relates to that Register block inside of the instance. And it won't affect if we change at least one thing related to that Register block of the instance. Once the type for that Register block is changed, all messages have been added at the Logit/Element instance and the Contract layer will be cleared.
1.  Can add or change the messages, the [expression](#edit-expression) and the [variable](#variable) at some places inside of the instance, but don't affect the same places inside of the original block.
1.  When adding data on the [“Add Data” sidebar](#add-data-sidebar) at the Contract layer for an instance, it affects the Logit layer’s data of that instance.
1.  Can add a message or add an expression or change the variable at some places inside of the original block, it will affect the instance if it doesn't change anything related to those places inside of the instance. And it won't affect if we change at least one thing related to those places inside of the instance.
1.  The changes inside the instance don't affect the original block. But the changes inside of the original block will affect the instance.
1.  Cannot change the status (Yes/No) of the connection from [Decision](#decision-block) block to other block inside instance. But you can change the status (Yes/No) with the connection creates from the new component (between Decision blocks and normal blocks) inside the instance (drag new block inside the instance then create some connections with that block then set the status)
1.  Cannot change the port of the connection from a normal block to a Decision block inside an instance. So when opening the ["Choose Represent Value Data"](#decision-block) screen, it disables the selection box for the port to connect with the Decision block, not allowing it to change.
1.  Can create more connections inside the instance. Can change like the “Expression” screen at Step 2 (the expression in the fields).
1.  Cannot delete at Step 1 with the connections are created in the root block. If hover on the "Delete" icon of that connection, the "Delete" icon will be disabled and it appears a tooltip is "We cannot delete this connection because it's extended from meta type".

1.  Delete

1.  Can delete the instance in the workplace, but doesn’t affect the original block.
1.  Can delete the original block on the “Add Component” sidebar and “Layer” dropdown list and the instance that was dragged on the workplace will be disappeared.
1.  Can delete the new part or change by adding the block on the model inside of the instance, but don't affect the original block. And cannot delete the part of the model as the model of the original block for the first time creating the instance. After that, when changing something inside of the original block, it still affects the instance.
1.  Can delete or change the model inside of the original block, it will affect the instance. And it won't affect the places of the instance that are different from that original block.

1.  Configure Port

1.  Can change the instance by adding some new port inside of the instance or clear those new ports once defined. The ports of the instance are the same as the original block, cannot clear those ports, can only rename those original block's ports and doesn’rsquo;t affect the original block.
1.  Once changed something inside the instance, when changing something inside of the original block, it cannot affect like changing the name of the port to the instance but if change the type of port at Original block, it will clear the old type of port at instance block and keep as the original block’s port.
1.  Can change the port inside of the original block, it will affect the instance.

1.  Access to instance layer

1.  At the higher layer's workplace double click on the instance, we access the workplace of that instance.
1.  At the higher layer's workplace double click on the original block on the “Add Component” sidebar, we access the workplace of that original block and can see the “Layer” dropdown list.
1.  Inside the workplace of that instance, on the toolbar, it displays the name of the instance under the type name of the layer, and doesn't see the “Layer” dropdown list anymore. Next is the “PARENT NAME” with the name of the higher layer containing that instance. The last is the “META TYPE” with the name of the original block of the instance.
1.  Once clicked on the name at the “PARENT NAME” at the toolbar once went inside the instance, it returns to the higher layer that contains that instance. And in the toolbar, appears the “Layer” dropdown list.
1.  Once clicked on the name at the “META TYPE” at the toolbar once went inside the instance, it returns to the original block of the instance. And in the toolbar, appears the “Layer” dropdown list.

1.  Create new layer from an instance

1.  You can [create a layer from the instance's model](#select-a-group), and that layer will appear on the “Layer” dropdown list.

1.  Category

1.  When adding or changing the category on the instance, it will save in the “Component Info” screen of that instance and don't affect the original block, but cannot see that category in the “Add Component” sidebar of the higher layer.
1.  When adding or changing the category on the original block, it will save in the “Component Info” screen of that original block and affect the instance and can see that category in the “Add Component” sidebar of the higher layer.

#### Right Click On A Block

Procedure right click on a block

1.  Right-click on a block in the workboard.  Four green squares appear on the top, bottom, left and right of that block and the block is invisible and disabled.

![](/assets/images/lokahi/image21.png)

Figure 61

2.  You can click on the square to change it to red-state. When in the red-state, that square cannot connect from the red location.
3.  When you close all 4 squares (turning them all red color), the block is invisible and disabled.
4.  You can enable the block again when you click to change the square from red to green for the 4 squares and R-click on the block.

#### Hover On A Block

Procedure hover on a block

1.  The name of the block appears and four (4) small squares appear on the top, bottom, left and right of that block.

![](/assets/images/lokahi/image10.png)

Figure 62

2.  You are able to then click on one of the 4 squares and [Connect blocks on the workboard](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>) by drawing an arrow between 2 blocks.

#### Double Click On A Block (at Contract or Element)

On a higher layer, you can double-click on a block in the workboard to go inside that block at under that layer.

Procedure: double click on a block

1.  Case 1: Open the Contract, double-click on a block in the workboard or in the “Add Component” menu on the left sidebar. It will change from the Contract workboard to the Element workboard (layer below) of the block that has been clicked. Only administrators, engineers and advanced users have the permission to perform this task.
2.  Case 2: Open Element, double-click on a block in the workboard or in the “Add Component” menu on the left sidebar. It will change the Element workboard to the Logit workboard of the block that has been clicked. Only administrators and engineers have the permission to perform this task.
3.  Case 3: On the Logit there is no change if you Double-click on a block in the workboard or in the “Add Component” menu on the left sidebar.

#### Change the Name Of Block

On any layer, you can change a block's name in the workboard. The name in the workboard at first state is the name you named for the layer. After you rename that block's name on the workboard, that name does not affect the layer's name.

Procedure rename for a block at Workplace

1.  Click on a block in the workplace or click the “[Hide/Show name](#hide/show-name-icon)” icon to see the icon to change the block’s name.
2.  Click on the “pencil” icon next to the name of the block.
3.  After clicking on the pencil icon of a block in the workplace, the block's name will be displayed in a form below that block contained in an input field and a button "Description" .
4.  We can enter any character and blank space in that input and the input once clicked on the "Description" button. This description of the Register block will appear under the Register's name on the [Dapp](#dapp) page at the Contract tab.
5.  You can change the name then click “tick” to save. Or click the “X” icon to close the dialog and don’t save the name.

![](/assets/images/lokahi/image92.png)

Figure 63

#### Click On An Element Block (at Contract)

You can click, or double click on a block to manipulate or configure for that block in the Contract workboard.

Procedure click on a block

1.  When you click on a block a blue border surrounds that block and has "x" icon display.  Click the "x" icon to delete the block.

![](/assets/images/lokahi/image96.png)

Figure 64

#### Click On A Logit Block (at Element)

You can click, or double click on a Logit block to manipulate or configure that block on the Element workboard

Procedure: click on a block

1.  Case A: When you click on a block a blue border surrounds that block and has an "x" icon display.  Click the "x" icon to delete the block.  In the Element’s workboard, an "x" and "Add Component" ![](/assets/images/lokahi/image23.png) icons appear as well when you click on a block. Click the "Add Component" ![](/assets/images/lokahi/image23.png) icon, and a “Configure port and Component info” screen appears as described in [Edit Elements / Element Blocks on The Workboard](#edit-layer-on-the-workboard).

![](/assets/images/lokahi/image95.png)

Figure 65

Case B: In the "[Lock](#the-“lock”-status) state:  A locked state means you cannot configure the block. When you still allow you to click on a block, but you cannot see the “x” icon. In the Element, and can click on the "Add Component" ![](/assets/images/lokahi/image23.png) icon to open “Configure port and Component info” screen but you cannot create new Logit from this block because it is locked.

#### Definition Of A Register And Operation Block (At Logit Layer)

A “Register” or “Operation” block are two units of a model and can see at the Logit’s workplace.

Definition of a “Register” block

1.  The “Register” block is a place where you can add the message and contains the message is sent from the “Operation” block.

![](/assets/images/lokahi/image69.png)

Figure 66

Definition of a “Operation” block

1.  The “Operation” block is a place where you can add the condition so if the message is satisfied, the message can go through from the “Register” blocks to the other.

![](/assets/images/lokahi/image98.png)

Figure 67

#### Click On A Register or Operation Block (Logit)

You can click, or right click on a “Register” or “Operation” block to manipulate or configure that block on the Logit’s workboard.

Procedure: click on a block

1.  Case A: When you click on a block a blue border surrounds that block and has an "x" icon display.  Click the "x" icon to delete the block.  In the Logit’s workboard, the "x", "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Markings"![](/assets/images/lokahi/image2.png), "Add Component" ![](/assets/images/lokahi/image23.png) icons appear as well when you click on a “Register” block. And the "x", "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Guard" ![](/assets/images/lokahi/image22.png)icons appear as well when you click on a “Operation” block. Click on "Manage Hashtag"![](/assets/images/lokahi/image6.png) and "Add Markings"![](/assets/images/lokahi/image2.png) to open the "Manage Hashtag" and "Edit Markings" screen. Click the "Add Component" ![](/assets/images/lokahi/image23.png) icon, and a “Configure port and Component info” screen appears as described in [Edit Elements / Element Blocks on The Workboard](#edit-layer-on-the-workboard).

    Case B: In the "[Lock](#the-“lock”-status)" state: When you click on a block, you cannot see "x" icon at three layer types. In the Logit layer, you can see the icons: "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Markings"![](/assets/images/lokahi/image2.png), "Add Guard"![](/assets/images/lokahi/image22.png), and "Add Component"![](/assets/images/lokahi/image23.png). You can click on "Add Component" ![](/assets/images/lokahi/image23.png) icon to open the “Configure port and Component info” screen but cannot create a new Logit layer or edit it from this block. And you can click on the "Manage Hashtag"![](/assets/images/lokahi/image6.png), "Add Markings"![](/assets/images/lokahi/image2.png), "Add Guard"![](/assets/images/lokahi/image22.png) icons to see and can edit but once reloaded the page it does not change anything.

#### Connecting Blocks On The Workboard (Drag An Arrow)

You can connect the blocks on the workboard by hovering over a block to reveal 4 squares and then ‘click and drag’ an arrow from any of the 4 squares to another block to create a connection.

![](/assets/images/lokahi/image76.png)

Figure 68

Procedure

1.  Hover over one block to reveal 4 squares and then ‘click and drag’ an arrow from any of the 4 squares to another block to create a connection. When clicking and dragging on the first block an orange dotted line appears and 4 small squares appear on the top, bottom, left and right of each block on the workboard, providing you with options to drag to make the connection.
2.  Once the connection is successful, it automatically changes the beginning point and the end point into the squares of 2 blocks so that the distance between 2 blocks is the shortest.
3.  The end point corresponds to the head of an arrow.

Note:

-   On the Logit, you cannot connect between 2 Register or 2 Operation blocks. It only allows you to connect between Register and Operation blocks.
-   On the Element or Contract, you can create only one arrow to connect between 2 blocks.
-   If 2 arrows overlap each other, the arrow that is created first will be under the arrow which is created second.

#### Create Corner Or Angle For An Arrow

You can adjust an arrow to add a corner or angle to the arrow by double clicking on the arrow to place a draggable spot on the arrow and then drag to adjust the shape.

![](/assets/images/lokahi/image91.png)

Figure 69

Procedure

1.  When you double-click on an arrow for the first time, it creates an orange spot on that arrow that is draggable to change the shape of the arrow. The spot is a stop spot and you can drag the arrow spot to move the line to suit your needs.  You can create more orange spots on one arrow if needed.
2.  When D-click on that arrow a second time, it deletes that orange spot on that arrow. The section of the arrow contains that spot will return to its previous state as a straight line connection.

#### Click On An Arrow

You can begin to define your connection when you click on an arrow.

![](/assets/images/lokahi/image71.png)

Figure 70

Procedure

1.  On the workboard, when an arrow (port connection) between 2 blocks is yellow, it means the connection has not been defined yet.

Case A: "Not in "[lock](#the-“lock”-status) state": When you click on an arrow, that arrow is highlighted, a blue rectangle box contains that arrow, and displays beside the "Connection"![](/assets/images/lokahi/image1.png) icon, and the "x" icon. If you want to delete the connection, click the “x”. In the Element and Contract, you can click on the "Connection"![](/assets/images/lokahi/image1.png) icon to see the [Step 1: "Make your connections"](<#define-a-connection-(make-your-connection)>) to start configuring the Element. In the Logit, when you click on an arrow connects from “Register” block to “Operation” block, it appears "x" and "Add Variable"![](/assets/images/lokahi/image14.png) icons and if you click on "Add Variable"![](/assets/images/lokahi/image14.png), it opens the “Variable” screen. When you click on an arrow connects from “Operation” block to “Register” block, it appears "x" and "Add Expression" ![](/assets/images/lokahi/image20.png)icons and if you click on "Add Expression", it opens the “Edit Expression” screen.  
Case B: "In the "[Lock](#the-“lock”-status) state": You cannot configure an arrow when in the locked state. You can still click on a yellow arrow, but you cannot see the “x” icon. In the Element and Contract, you see the "Connection"![](/assets/images/lokahi/image1.png) icon and can click on to open "Step 1:Make your connection" and change the connection then define that port and complete the steps but once you reload the page it does not change anything. And in the Logit, you can click on the "Add Variable"![](/assets/images/lokahi/image14.png) icon to see a “Variable” screen or click on the "Add Expression" ![](/assets/images/lokahi/image20.png)icon to see a “Edit Expression” screen and can enter in those screens then save but once you reload the page it does not change anything.

2.  When hovering over the port after clicking a yellow dot appears with a red border that will move on that port if we move the mouse pointer on that port.

#### Select A Group

On the workboard you can use the mouse to highlight and select a group blocks and arrows on the workboard to configure and define that specific group.

![](/assets/images/lokahi/image26.png)

Figure 71

Procedure

1.  When clicking and dragging to select a group, a rectangle will be drawn to highlight the group of Elements together on the workboard.
2.  Once the group is highlighted, an "Add Component" and "x" icon is displayed.

3.  In the Element and Logit workboard we can  click on the "i" icon.
4.  When click the "Add Component" ![](/assets/images/lokahi/image23.png) icon, a "Configure port and Component info" screen appears, with the process as chronicled in the [Edit Elements / Element Blocks on The Workboard](#edit-layer-on-the-workboard) section.
5.  When you click the "x" icon it deletes that group.

6.  We can move the group to a new area on the workboard as desired.

#### Define A Connection (Make Your Connection)

After you have clicked on the "Connection"![](/assets/images/lokahi/image1.png) icon on the workboard of any connection between 2 Logits or 2 Elements at Element/Contract’s workboard, the “Step 1: Make Your Connection” screen appears. You can then define the connection.

![](/assets/images/lokahi/image39.png)

Figure 72

Procedure Step 1 Make your connection

1.  The next step is to configure the connection on the arrow between 2 components in the Element/Contract workboard to create the parameters for a deployment. [Click on the yellow arrow](#click-on-an-arrow) and a blue box will appear around the arrow, with an"Connection"![](/assets/images/lokahi/image1.png) icon that allows you to configure the connection. Click on the "Connection"![](/assets/images/lokahi/image1.png) icon.  The “Step 1: Make Your Connection” screen appears.  Two columns are displayed with inputs and outputs. You can click on each shape to see the description at the bottom of that screen that describes the function.
2.  Next, drag an input shape in column 1 to the desired output shape in column 2 to define the input/output connection. With the condition below, it only allows you to:

-   Only the input port can connect with the output port.
-   Create a connection between the “Register” blocks that are added to the input and output ports and those “Register” blocks that have the same type.
-   Create a connection between an “Operation” block and “Register” block that are added by the input and output ports.
-   Create a connection between an “Operation” block and “Operation” block that are added by the input and output ports.
-   It does not allow you to connect the input and output are added at the “Register” blocks if they have a different type.

3.  The ports in column 2 satisfied with the port being dragged will be kept and their border will change to green color. The port that is being dragged has a required hashtag that is set at "Component Hashtag" of the “Register” or “Operation” block, their shape in column 2 will be kept and full fill green color. The other shapes that are not satisfied with the conditions allowed to connect will disappear in column 2.

For more information about Required Hashtag and Component hashtag, see [Configure Port](#configure-port) and [Manage Hashtags](#manage-hashtags).

4.  When a connection is created successfully, the table on the right side ("My connections" table), will list the connections that have been created. We need to connect at least 1 connection to enable the \[Next\] button at the bottom of the window.

For more information about Register type and how to add, see [Define Type](#define-type) and [Edit Markings](#edit-markings).

For more information about how to set a port, see [Configure Port](#configure-port).

5.  Once connected, click the \[Next\] button. The “Step 2: Define your connection” screen appears.

Attention:

1.  For the input and output port of the Element, you have to tick to choose which input and output of the Element will become the input and output port for that Element.  It cannot create more than one connection with the same id port (each port has an id) so we only create one connection from an input port and an output port with the same id. (You can also place more than one of the same Logit blocks in the Element workboard to create a model so it can be looped again with the same input and output ports’ name when editing the Element).
2.  When delete all connections have been defined at "Step 1", the \[Next\] button changes to \[Save\] button to save editing. And then the gray arrow becomes the yellow arrow once you click the \[Save\] button at "Step 1".
3.  Once deleted some input/output ports at the lower layer, then go back to the layer containing those input/output ports which have made connections before, as the row contains the connection at "Step 1: Make your connection", it will automatically delete those connections related to those ports which have been deleted.
4.  Once merged 2 Registers are the same type on the higher layer at the connection. After that go to the Logit and change the type of one of 2 Registers or the same type but change one of both is auto generate TransactionID the other is not auto generate TransactionID, it displays the connection that has connected between those Register blocks with error message "Connection error" and the "!" icon. The \[Next\] button is disabled. When hovering the "!" icon a tooltip shows "Connection error because it has deleted port". If you delete all "Connection error", the \[Next\] button is enabled if it still has the valid connection.
5.  Once renamed some input/output ports at the lower layer, then go back to the layer containing those input/output ports that have made connection before, as the row contains the connection at "Step 1: Make your connection", it displays the connection has been changed to the new name.
6.  Cannot create a connection between 2 “Register” blocks that have the type containing “String” type at the first field but different status auto-generate transactionID. For more information about transactionID, go to [Edit Markings](#edit-markings).
7.  With the port has the requirement to connect with each other (by using hashtag at “Require Hashtag” input in “[Configure Port](#configure-port)” screen and “Component Hashtag” input in the “[Manage Hashtags](#manage-hashtags)” screen are set at the ports of the layers), it will appear at “Step 1 Make Your Connections” a “Suggested” frame to let you know which ports have to connect with each other. See in figure 72.

![](/assets/images/lokahi/image89.png)

Figure 73

Procedure Step 2 Define your connection

1.  After completing Step 1 “Make Your Connection”, the Step 2 “Define Your Connections” window pops up.  In the left table, depending on the connection you have made, it will display:

-   The connection established from the output port set at "Register" connects to the input port set at "Operation", once you click on that connection, it opens the "[Variable](#variable)" screen.
-   The connection established from the input port set at "Register" connects to the output port set at "Operation", once clicked on that connection, it opens the "[Edit Expression](#edit-expression)" screen.
-   If the connection established from the output port set at "Register" and connects to the input port set at "Register", once you click on that connection, it appears the "Merge Element" screen, and it requires to choose name for Element after merged the “Register” block is set output port with the “Register” block is set input port. After merging those “Register” blocks, the messages that have been added at Logit will be merged and show all messages but still separate into 2 parts belonging to each “Register” block in the "Add Data" sidebar. And  both “Register” blocks will be added under the Register and have been chosen as a representation at "[Add Data](#add-data-sidebar)" sidebar in the higher layer.
-   Once clicked on the connection has been established from connecting an input port is set at "Operation" connects to an output port is set at "Operation", at the left table in the "Step 2 Define your connections" screen, it opens the "Guard" form which will show all conditions (only 2) at Guard screen of each Operation block (only 2) connects with each other by "and" operator.

2.  If you have more than 1 connection, you can then click on the next connection in the “My Connections” tab and repeat.  When you finish clicking on all the connections, the \[Done\] button will be enabled for you to click.
3.  Click the \[Done\] button. After clicking the \[Done\] button, you will be returned to the workboard screen and the arrow will now be changed from yellow to gray color, meaning the arrow has been defined. When all arrows have been defined, you are allowed to deploy. If all arrows have not been defined, the \[Deploy\] button will not be enabled.

Note:

1.  You do not have to set a condition for every connection in all cases. These conditions are the maximum or minimum value to permit between block 1 and block 2. A warning screen will still display as a reminder to set the limit number for those connections, but it is not a requirement.
2.  When you click on the gray connection - connection has been defined, you can click on the tab bar to move between “Step 1 Make Your Connections” and “Step 2 Define Your Connections”.

#### Configure Port

You can select a group and configure that group to create a new layer.

![](/assets/images/lokahi/image47.png)

Figure 74

Procedure Configure port at Logit

1.  When you click on a block in the left table of "Configure port" screen, a drop down list appears with 3 options {Input, Output, Both}.
2.  After you click on a block and choose an option, in the left table of the "Configure port" screen, a frame appears that includes "Name", "Description" input frames, "Write long Description" button and "Clear Port" button, and the "Required Hashtags" input, the "add more" (+) icon button enables.
3.  The "Required Hashtags" input fields are used to add the hashtag for the “Register” block(s) or “Operation” block(s) that have ports (Input or Output). Once added the hashtags, it will require the "Register" or "Operation" block of Logit layer has the "Required hashtags" to connect to the "Register" or "Operation" block of Logit layers have that "Required hashtags" in the "[Component Hashtags](#manage-hashtags)" input according the rule:

+“Operation” cannot connect to “Operation”.

\+ “Register” can connect to “Register” or “Operation”;

\+ The “Register” and “Operation” have to have the satisfied port.

\+ “Register”  connect to “Register”, those “Register” have to have the same type and number of fields are equal because at the type has “String” is the first field the “Register” block can set that “String” field can be the “TransactionID” by switching ON the switch “Auto-generate TransactionID” at “[Markings](#edit-markings)” screen, so if 2 “Register” block have the same type but one has ON and other OFF the switch, it cannot merge together.

4.  The "Add more" (+) icon button enables you to add more “Required Hashtag” field.

\[Note:

1.  When using the hashtags in the same "Required Hashtag" input then click "Fix it" at [Recommendation](#recommendation-feature) sidebar in the higher layer, it shows all the blocks relate to those hashtags and just choose one block in the group of block has a hashtag in the hashtags in "Required Hashtag" input, it will satisfy that recommendation and that recommendation box will be closed.
2.  When using the hashtags in the different "Required Hashtag" inputs then click "Fix it" at Recommendation sidebar in the higher layer, have to choose each block has the hashtags in each "Required Hashtag" input, it will satisfy those recommendations and those recommendations boxes will be closed if each “Required Hashtag” input are connected a block contains those Required hashtags on “[Component Hashtag](#manage-hashtags)” input.\]

3.  When you click outside to not choose the block (named for that port), in the left table of "Configure port" screen, the frame disappears and is replaced by a table that contains the information that: Configure port (\[The number of block(s) selected\] port selected) and below it lists each type of port {input, output, both and none port} with the block's number of each type.

Additional: You can enter any length in the “Description” frame and use any character to name the port.

Procedure Configure port at Element

1.  Click on each Logit block in the left table of the "Configure port" screen, on the left side appears a list that includes all the configurations for the port (chosen input, output or both type) of that Logit block.
2.  After clicking on a block and choosing an option, in the left table of the "Configure port" screen, a frame appears with "Name", "Description" input frames, a "Write long Description" button and "Clear Port" button. You have to name that port.
3.  When you click outside to not choose the block (named for that port), in the left table of "Configure port" screen, the frame disappears and is replaced by a table with the information that: Configure port (\[The number of block(s) selected\] port selected) and below it lists each type of port {input, output, both and none port} with the block's number of each type.

Additional: You can enter any length in the “Description” frame and use any character to name the port.

Procedure Component info at Logit

1.  Enter the “Name” input of "Component info" screen: Allow to enter any character.
2.  Enter or choose the old category names for that layer will be set on the “Add Component” menu.
3.  Click the \[Choose Icon\] button to choose an icon for the layer that will be displayed on the “Add Component” menu. Once you choose the \[Choose Icon\] button, the “Choose Icon” screen appears and then you can choose the already icons or upload your own icon.
4.  The “Global Rules” text box lets you set the statement to check the work status of the “Register” block on the models connected together at the Element or Contract layer.
5.  The “Local Rules” text box lets you set the statement to check the work status of the “Register” block on the model at one Logit layer.

For more information about “Global Rules” and “Local Rules”, see [Global and Local Rule](#global-and-local-rule).

Procedure Component info at Element

1.  Enter the “Name” input of "Component info" screen: Allow to enter any character.
2.  Enter or choose the old category names for that layer will be set on the “Add Component” menu.
3.  Click the \[Choose Icon\] button to choose an icon for the layer that will be displayed on the “Add Component” menu. Once you choose the \[Choose Icon\] button, the “Choose Icon” screen appears and then you can choose the already icons or upload your own icon.

#### Definition Basic Of The Unit Block And The Logic Flow On The Lowest Layer

A valid model has:

-   The model is a connected graph and does not contain any block that does not connect.
-   At least one “Start Register" block (the arrows only begin from that “Register” block) and “End Register" block (the arrows end at that “Register” block).
-   No “Operation” block is the ending point or the starting point of the model.
-   A “Register” block cannot point to a “Register” block in the workplace of the Logit layer.
-   A “Operation” block cannot point to an “Operation” block in the workplace of the Logit layer..
-   Only one arrow can go from a “Register” block to an “Operation” block and only one arrow from an “Operation” block to a “Register” block.
-   Can merge “Register” block with a “Register” block that has the same type in the higher layer.
-   Can merge “Operation” block with a “Operation” block in the higher layer.

An “Operation” block can fire the message:

-   The “Operation” block is a transition of the message.
-   The “Operation” block can fire the message when all the “Register” blocks point to that “Operation” block that has the message. If there exists at least one “Register” block that does not have any message, that  “Register” block cannot fire a message to the “Operation” block which it points to so that “Operation” block cannot fire the message to another “Register” block.

A “Register” block can have the message

-   The “Register” block is a place to contain the message.
-   The “Start Register” block (the arrows only begin from that “Register” block) of the model supposes that it always has the message.
-   If the “Register” block has been added data at Logit, or checked at least one of both options "Allow to add data at Element/Contract" at “[Markings](#edit-markings)” screen, it is supposed to be a “Start Register” in the model, that Register is eventually has the message.

Attention: If a model is invalid at the Logit/Element, it disables the Logit/Element block on the "Add Component" menu in the left sidebar and does not allow you to drag that block onto the workboard.

#### Define Type

The “Define type” feature allows you to define the messages’ type on the Logit for a project.

Note:

-   On the Logit, a “Register” block contains only one type of message.  Many Register(s) could contain many types of message(s). You can define your own type of message on Logit. The type you define will belong to only that project. And the register belongs to one type so you should only add messages that belong to that type.
-   Administrators and Engineers have permissions to manipulate this feature. Follow the steps below to define a type for a message.

Procedure

1.  The \[Define Type\] button ![](/assets/images/lokahi/image48.png) only appears in the "Add Component" sidebar menu on the workboard. At the very bottom of the “Add Component” menu, click on the \[Define Type\] button.
2.  After clicking on the "Define Type" button ![](/assets/images/lokahi/image48.png), a screen appears in the middle of the Workboard page with a title "Define Type". The "Define Type" screen has 2 tables:

![](/assets/images/lokahi/image75.png)

Figure 75

1.  The left table is "List Of Type". It has a "Search" frame and a table with 2 columns: "Name" and "Type". The table will contain all types you have defined.
2.  The right table is "Define Type" which allows you to add more types. It has a blank "Name of Type" input field, a "List of type" table with a combobox dropdown list with a default value is "ADDRESS", a "Add More" (+) icon button that enables you to add another field for your type, the \[Close\] button enables, and the "Save" button which is inactive until you enter a string in the “Name of Type” input field.

3.  Enter in the "Name of Type" input field that you want to add: You can enter the alphabet, numbers, special characters except “.” dot and blank spaces.  
    \[Note: Once you enter at least one valid character, the \[Save\] button will be enabled, but you cannot enter only blank spaces. If you enter only blank spaces or “.”, a red message below the "Name of Type" input announces that "Name type is invalid!" and \[Save\] button disables. If you enter a name that already exists, a red message below the "Type of Marking" input announces that "Type already exists!" and \[Save\] button disables.\]
4.  Clicking the “Add more” (+) icon button allows you to add more combobox options in the “List of type”.
5.  Click on each combobox to choose the type of data for the type you are defining. After clicking on the combobox:

\+ If just has one combobox, a list includes 7 basic types {String; Int;  Bool; Address; Unit; BLOCK_NUMBER; Sender} and all new types which will be defined directly from one of 6 basic types {String; Int;  Bool; Address; BLOCK_NUMBER; Sender} are displayed and you can select and save.

\+ If there is more than one field, the combobox just shows the types which have been defined directly from one of four basic types. The types combine the types that have been defined from one of 6 basic types {String; Int;  Bool; Address; BLOCK_NUMBER; Sender} don't appear in the dropdown list.

\+ If you enter the "Search" input and don't have any result, a sentence appearing in the dropdown list is "No Results found". If you enter and have some result, the dropdown list will keep the results that the string has entered in the "Search" input.

6.  Click \[Save\] button: In the left table the newly created type appears in the last row.
7.  If you want to edit a type that has been defined in the “List of Type” table, hover on the row that contains that Type, at the "Type" column of the right side table, a group button appears {Edit; Delete}. Hover on these icons. Click on the \[Delete\] icon button to delete that type or click on \[Edit\] icon button to edit that type.
8.  When you click the \[Edit\] icon button, it automatically fills in the "Name of Type" input field the Type and in the "List of type" displays all types of that Type. You can change the name and change the type in each combobox or add more. Then click the \[Save\] button to save the changes.

\[Note: If you edit again the types are defined from one of 6 basic types {String; Int;  Bool; Address; BLOCK_NUMBER; Sender}, the "Add more" icon button does not show again. \]

9.  If you click the \[Cancel\] button, it turns the "Define Type" table to the initial state and the \[Cancel\] button disappears and \[Save\] button is inactive.
10. If you enter a name that exists, a red message below the "Name of Type" input announces that "Type has existed!" and \[Save\] button disables.

Attention:

-   When a type has been added to a “Register” block, the expression and variable of the “Operation” block connected to that “Register” block must be declared to correspond to that “Register” block.
-   When the “Register” blocks have not been given a defined type, the “UNIT” type has been added for those “Register” blocks.
-   When the expressions of the “Operation” blocks have not been defined, the “UNIT” message will be returned as well.
-   The “UNIT” type cannot be used to define with the other types.

#### Edit Markings

The “Edit Markings” feature allows you to choose the type of the “Register” block and add the messages (the data) for that “Register” block by clicking on the “Add Marking” ![](/assets/images/lokahi/image2.png)icon on the block and accessing “Edit Markings.”

![](/assets/images/lokahi/image33.png)

Figure 76

Procedure

1.  The "Markings" screen only appears on the Logit after you click on the “Register” block and then click on "Add Marking" ![](/assets/images/lokahi/image2.png)icon then choose the “Edit Markings” option.
2.  After clicking on the “Edit Markings” option, a screen appears in the middle of the Workboard page titled "Markings". The "Markings" screen has 2 tables:

3.  The left table is "List Of Markings"". It includes the "Search" frame and a table with 2 columns "Number" and "Message". The table will contain all messages you have added on this “Register” block.
4.  The right table is "Type of Marking" and allows you to add messages. The right side includes:  a "Type of Marking" combobox with the default type is “Unit”. The "Add Data Of" combobox to move alternatively between the “Markings” screen of the other “Register” block of that Logit or the “Register” blocks are allowed adding data at Element/Contract. The "Add Message" field contains a "Number" input field and a "Message" field.  The \[Close\] button is enabled, and the \[Save\] button disabled until you enter information. The checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract".

5.  Choose one option in the "Type of Marking" combobox:

-   After clicking on the "Type of Marking" combobox, a dialog box "Edit Type" says "If you change the current type, all messages were defined will be deleted. Are you sure change Type?". Click on the \[Yes\] button to reveal the dropdown list. After you choose the Type, the "List of Markings" table will be cleared all messages. If you don't choose one you can click outside the list and all messages and Type types are still there.
-   After clicking \[Yes\] to view the dropdown list, it contains all types defined for this project (including all types have been created but not the 3 basic types {String; Int; Bool} except {Unit}).  At the bottom of the dropdown list there is a "Define Type" option which takes you to the "Define Type" screen so you can create a new type if needed. There is a "Search" input field. If you enter that input and don't have any result, a sentence appears in the dropdown list is "No Results found" and "Add More Type" option to open the "Define Type" screen. If you enter and have some result, the dropdown list will keep the results that the string has entered in the "Search" input.

4.  After choosing the type of Type for the “Register” block, you can add the messages belonging to this Type. In the “Number” input field, enter the number of message(s) that have the same data.
5.  Underneath the “Message” table you have the related input field that you choose from the dropdown:

-   "STRING" input field: Allows you to enter the alphabet, special characters, numbers, blank spaces. The "STRING" is on the top of the form and contains the "STRING" input field.
-   "INT" input field: You are only allowed to enter the integer number. If you enter an invalid value after you click the \[Save\] button a red error message announces that "Value is invalid" below that input field. (Ex: real number, string).
-   "BOOL" input field: Allows you to choose 2 types in combobox {True; False}.
-   "UNIT" input field: Only 1 default value is "Unit", this input is disabled.
-   The field of "BLOCK_NUMBER" and "Sender" type is disabled and displays the sentences which are "@BLOCK_NUMBER@" and "@SENDER@".
-   Other options may exist that were created for that project as well, with the associated information from the 4 basic types ({String; Int; Bool; Unit}) in the input fields.

6.  The "!" ![](/assets/images/lokahi/image74.png) icon in each row can be hovered over to view a tooltip to show all types available in that field.
7.  If you want to edit a message has been added in the “List of Markings” table, hover on the row of the message and on the right side of the column a group button appears {Edit; Delete}. Hover on these icons, and click on \[Delete\] icon button to delete that message or click on \[Edit\] icon to edit that message.
8.  When you click \[Edit\] icon button to edit the message, you can make the changes you prefer and then click the \[Save\] button to save the changes.
9.  If you don’t want to add message at Logit, you can configure that “Register” block can add message in the Element or Contract by ticking 2 checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract" on the “Markings” screen. If you don't tick the checkboxes on the “Markings” screen of a “Register” block, at higher layer, when open the "Add Data" sidebar and choose that block in the workplace, it does not show the "[Add Data](#add-data-sidebar)" box of that “Register” block.
10. You can change to another “Markings” screen of another “Register” by clicking on the "Add Data Of" combo box of a “Register” block, it shows the list of all “Register” blocks of that Logit layer and a "Search" input field.
11. If the “Register” block belongs to another type except for UNIT, the Markings screen will appear the "ADD TRANSACTIONID" form. Only the type has the first field is belongs to "STRING" type, the switch "Add TransactionID" appears. If the first field of that type is not "STRING" type, the switch is replaced by "!" icon with the content is "Only String field is used as a TransactionId" and cannot auto-generate any transactionID by taking the first field of the message, instead of we have to enter our own transactionID.
12. You can enter the transactionID or not, because transactionID to make the message can be distinct.
13. Enter in the fields below then click the \[Save\] button to create a message. \[Note: You can create empty message\]

\[Note:  If you want to update the type, you can navigate to the [“Define type”](#define-type) screen to edit the type. But after you changed the type, when go to the “Markings” screen of a “Register” block which used that type to define the message’s type, all the messages in the "List of Marking" table will have a red button \[Error message\] and under the "Type of Marking" combobox a red message announces "This type has been changed!". That means you have to edit these messages again by clicking on the \[Edit\] button of each message and change the value inside that message to make the message valid. Change the value inside that message then click \[Save\] and the \[Error message\] will disappear at that message. Once you edit all messages, the red message will disappear.\]

#### Variable

The “VARIABLE” feature allows you to choose the variables of the message of the “Register” block to make the condition for a transition to the “Edit Guard” feature of the “Operation” block at the Logit and the message returns after satisfied the condition (If the messages satisfy the condition, it allows those messages go through).

![](/assets/images/lokahi/image56.png)

Figure 77

Procedure

1.  Open Logit of a project. Drag a “Register” block and an “Operation” block to the workboard. Connect the “Register” block to the “Operation” block with an arrow with the root of the arrow at the “Register” block and the arrowhead at the “Operation” block. Click on the arrow between the two blocks, then click the "Add Variable"![](/assets/images/lokahi/image14.png)icon on the connected arrow.
2.  The “Variables” screen appears:

-   A sentence "Please choose the value of "{register's name}" to represent for variables in condition". Underneath, it always has a “TransactionID” field with the “Register” block have a type is different with “UNIT” type and if the type has the first field is “String” type, belong to the status “auto-generate transactionID” or not, the first field can be merge with the “TransactionID” field. For more information about transactionID, go to [Edit Markings](#edit-markings).
-   Inside the form below the “TransactionID” field has the right and left input fields and the sentence in the middle "Represent for". The left inputs will display the name of the type that has been defined from the basic type and the basic type. In the right input is an empty input with the placeholder sentence is "Enter value". Or if the “Register” block of the connection has been added a type, it will add the available variable names which are created based on the name of the field.
-   If it has the condition in the “Guard” and “Expression” of the “Operation” block of the “Register” block points to, a form that contains the textboxes have a condition in Guard, Expression's "IF" textbox of the Operation block. If in Guard, a sentence will appear at the top of Guard's textbox "'{operation's name}" has been added to the condition:". If in "IF" textbox in Expression, it will appear a sentence in the top of Guard's textbox '"{Register's name that Operation points to}" has been added condition:". And cannot enter inside those textboxes.
-   If it doesn’t have any condition in the “Guard” and “Expression” of the “Operation” block of the “Register” block points to, the right inputs are empty and allows a string to enter from the alphabet, a number but after entering at least one alphabet character. Don't allow you to enter a blank space, a string is started from number character and the special characters except "\_" underscore character. If you enter the invalid string, it appears a red error message "Value is invalid!" under the right input.

3.  You can define the variables corresponding with the fields of the “Register” block. With the available variables, you can click the “x” icon of that variable to delete and create a new one by typing on the input and pushing the \[Enter\] key on the keyboard.
4.  Click \[Save\].

Note: With the variables which have the same name are defined at the different places (at the connections of the “Register” blocks point to the same “Operation” block), it will compare their value with each other. If the values are different, it doesn’t allow you to go through the next place.

#### Edit Guard

The “Edit Guard” feature allows you to set the condition for transition of the variables of the message in the Register block. If the messages satisfy the condition of the “Operation” block, it allows those messages to go through.  If the messages aren't satisfied with the condition of the “Operation” block, those messages are still staying at the “Register” block which now contains them.

![](/assets/images/lokahi/image5.png)

Figure 78

Procedure

1.  Open Logit of a project. Drag a “Register” block and an “Operation” block to the workboard. Connect the “Register” block to the “Operation” block. Click on the “Operation” block. Click "Add Guard" ![](/assets/images/lokahi/image22.png) icon on the “Operation” block then choose the “Edit Guard” option.
2.  Once clicked on that “Operation” block and then clicked the "Add Guard" ![](/assets/images/lokahi/image22.png)icon, the "Edit Guard" screen appears with a textbox, the \[Save\], the \[Close\], and \[Help Center\] buttons always enabled.
3.  Enter the condition using the IDs that have been chosen at the “Variables” screen. It has the suggestion feature that when having the variables have been defined at the arrow connected to this "Operation" block, it shows the default values and the variables have been defined. The default values are:

-   Function: isTrue(a), isFalse(a), isEmpty(a).
-   Logical operator: and ; or ; xor; ! - not.
-   Constant variable: True, False, NULL.
-   Mathematical operator: +, -, \*, /, %
-   Comparison operator: > < >= <= = <>

4.  If we don't enter enough for the elements of the expression it has a warning that appears under the text box "It isn't an expression!". If we enter not enough elements of an operator, a warning appears under the text box. Can enter only variables that have or has not been defined.
5.  Click the \[Save\] button, the content inside that textbox has been saved. After opening the "Edit Guard" screen again, the content is still there.
6.  Once you click on the "Help Center" button, a "Help Center" dialog appears that has a "Search" frame and a content recommendation about The Expressions, Writing Expressions, adn Common Functions. Once entered in the "Search" frame, it appears in the other content about Function, Logical Operator, Constant Variable, Mathematical Operator, Comparison Operator, Variable.

Attention: If you do not add any condition to "Edit Guard", it still allows the message to go through.

\[Note:

1.  Once used some variable in Guard of Operation block but haven't defined those variables in the Variables screen of the Register blocks point to that Operation, a recommendation has a title "Remove undefined variables in conditions" with a content is:

\+ in Logit layer: "Our model can not pass through {Operation's name}  if we use undefined variables {list of variables of that Operation block which have not defined} in conditions." and Fix it and Show buttons.

\+ in Element/Contract layer: "Our model can not pass through {Block's name contains that Operation block}  if we use undefined variables {list of variables have not defined of that Operation block} in conditions." and \[Show\] buttons.

\+ Once clicked on \[Show\] button, it will highlight that Operation block on the workplace if in the Logit layer and highlight that block containing that Operation block if in the Element/Contract layer.

\+ Once clicked on the \[Fix it\] button, it will open the Guard of that Operation block.\]

#### Edit Expression

After the message goes through the “Operation” block, the “Edit Expression” feature regulates the output of the “Operation” block, by creating a new message and depending on the condition of the output the type of message can then be created. If the messages satisfy the condition of the Expression screen, it allows those messages to go through. If the messages aren't satisfied with the condition of the Expression screen and there is an “Else” case, those messages go through.  If the messages aren't satisfied with the condition of the Expression screen and there is no “Else” case, those messages disappear at the “Register” block which now contains them.

![](/assets/images/lokahi/image70.png)

Figure 79

Procedure

1.  Open Logit of a project. Drag a “Register” block and an “Operation” blocks to the workboard. Connect the “Operation” block to the “Register” block. Click on the arrow that connects the two blocks. Click "Add Expression"![](/assets/images/lokahi/image20.png) icon.
2.  After clicking on the "Add Expression"![](/assets/images/lokahi/image20.png) icon, the "Edit Expression" screen appears with a combobox with the default value is "Return" option, the \[Add Else\], the \[Save\], the \[Close\], and \[Help Center\] buttons always enabled and one input is {If} if you change the combobox to "If" option, and the quantity of other inputs depend on the type of the arrow head (Register). Each field of the type of the arrow head will have an input in the "Message Then" form and the same input at the "Message Else" form. If the type of the arrow head contains the "UNIT" type, the input is disabled and contains default value is "UNIT". If the type of the arrow head contains anything other than "UNIT" type, the input is enabled. If you click on the \[Add else\] button, there are more available inputs in the "Message Else" form like the "Message Then" form. You can click the \[Delete\] icon button next to the "Message Else" form to close that input.
3.  Enter the condition using the IDs have been chosen on the “Variables” screen. It has the suggestion feature that when having the variables have been defined at the arrow connected to this "Operation" block, it shows the default values and the variables have been defined at the “Register” blocks connected to the “Operation” block which points to this “Register” block. The default values are:

-   Function: isTrue(a), isFalse(a), isEmpty(a).
-   Logical operator: and ; or ; xor; ! - not.
-   Constant variable: True, False, NULL.
-   Mathematical operator: +, -, \*, /, %
-   Comparison operator: > < >= <= = <>

4.  If we don't enter enough for the elements of the expression it has a warning that appears under the text box "It isn't an expression!". If we enter not enough elements of an operator, a warning appears under the text box. Can enter only variables that have or has not been defined.
5.  Or if we let empty some inputs, after clicking the \[Save\] button, a red warning sentence “This input is required!” appears under that input.
6.  Enter the values of the inputs for the new message that belongs to the type of the “Register” block which the Operation block points to. At the first time, if the  “Register” block which the Operation block points to has a type, then the variables will automatically fill in those fields which correspond to each field of the type of that “Register” block.

\[Note: It always has a “TransactionID” field with the “Register” block have a type is different with “UNIT” type and if the type have the first field is “String” type, belong to the status “auto-generate transactionID” or not, the first field can be merge with the “TransactionID” field. For more information about transactionID, go to [Edit Markings](#edit-markings).\]

7.  If you want to use some [Extra API functions](#add-extra-api-function) to execute once you deploy the contract, click the \[Add Extra API\] button and type one API function that you want to use.
8.  Click the \[Save\] button, the content inside that textbox has been saved. After opening the "Edit Expression" screen again, the content is still there.
9.  Once you click on the "Help Center" button, a "Help Center" dialog appears that has a "Search" frame and a content which recommends about The Expressions, Writing Expressions, adn Common Functions. Once entered in the "Search" frame, it appears another contents about Function, Logical Operator, Constant Variable, Mathematical Operator, Comparison Operator, Variable.

Attention: If you do not have any condition in the "Edit Expression" screen, it still returns a response that the messages belong to "Unit" Type.

\[Note:

1.  Once used some variable in "IF" box of Expression screen of Operation block(at Logit and Step 2) but haven't defined those variables in the Variables screen of the Register blocks point to that Operation and not fill in the input field in Expression screen, a recommendation, which appears when finished fixing the recommendation of Guard, has a title "Remove undefined variables in conditions or data sending" with a content is:

\+ in Logit layer: "Our model can not go to {Register's name which is that Operation points to}  if we use undefined variables {list of variables have not defined of that Operation block in the If box} + {list of variables have not defined of that Operation block in the fields of Expression (Display NULL if don't enter in field)}  in conditions or data sending." and Fix it and Show buttons.

\+ in Element/Contract layer: "Our model can not go to {Register's name which is that Operation points to}+ of +{Block's name contains that Operation block}  if we use undefined variables {list of variables have not defined of that Operation block in the If box} + {list of variables have not defined of that Operation block in the fields of Expression (Display NULL if don't enter in field)}  in conditions or data sending." and \[Show\] buttons.

\+ Once clicked on the \[Show\] button, it will highlight that Register block which that Operation points to on the workplace if in Logit layer and highlight that block contains that Operation block if in Element/Contract layer.

\+ Once clicked on the \[Fix it\] button, it will open the Expression screen of that Operation block points to Register.\]

#### Add Extra API Function

The Extra API functions are used in the “Expression”, input and output screen of the “Decision” block to implement the function with the contract once deployed. Example: After you want to deposit your money from your wallet into the contract, you can add a deposit API function on a transaction on the contract.

The Extra API can only be used on the “Add Extra API” input of the “Expression”, input and output screen of the “Decision” block. In the  “Add Extra API” input can use only one  “Extra API” function.

Table of the Extra API function and constant can be used:

No.

Name

Description

1

deposit(value)

an API function will let sender will send a value of money into the contract

2

contractSendTo(spender, amount)

an API function will let the contract will send an amount of WEI to spender (account address)

3

transfer(toAddress, value)

an API function will send a value of money from the sender to the user has the “toAddress” account address

4

transferFrom(fromAddress, toAddress, value)

an API function will send a value of money from a user has “fromAddress” account address to the user has the “toAddress” account address

5

sender

the constant variable will let us know who is manipulating (executing on a transaction contains this API function) on the contract

6

owner

the constant variable will let us know who deployed the contract

7

contractAddress

the constant variable will let us know the address of the contract

8

BLOCK_NUMBER

the constant variable will let us know the current index of a block on the blockchain

9

value

the constant variable will let us know the current value which a user send to contract

Procedure

1.  Open the " Expression" screen, in 2 forms “Message Then” and “Message Else” will have an “Add Extra API” button. Open the “Choose Value Data” screen - the output connection which is pointed from a “Decision” block to a normal block - will have an “Add Extra API” button.
2.  After clicking the “Add Extra API” button, the input will open.
3.  Type in the input, the hint of the Extra API function and the constant variables that can be used in the Extra API function will be listed.
4.  Can only use one Extra API function.

#### Create & Define Hashtags

The “Define Hashtag” feature lets you create and define the hashtags of the “Register” block(s) and “Operation” block(s) on the Logit of a project. Then you can use that hashtag to add to a Logit or Element with the [Manage Hashtags function](#manage-hashtags). When you drag that Logit or Element block into the Element’s or Contract’s workboard, it will require you to connect the Logit or Element block required in order to finish the model. Or you can use the hashtag in checking the model by using [Global and Local Rule](#global-and-local-rule).

![](/assets/images/lokahi/image90.png)

Figure 80

Procedure

1.  The "Define Hashtag" button ![](/assets/images/lokahi/image44.png) appears on the "Add Component" sidebar menu on all layers: Open the  workboard. At the bottom of the “Add Component” sidebar menu, click the “Define Hashtag” button.
2.  After clicking on the "Define Hashtag" button ![](/assets/images/lokahi/image44.png), a screen appears in the middle of the Workboard titled "Define Hashtag" with 2 tables:

3.  The left table is "List Of Hashtag". It has a "Search" frame and a table with 2 columns "Hashtag" and "Description".
4.  The right table is "Define Hashtag". It contains a "Hashtag's name" input field with a placeholder sentence "E.g shipping", a "Hashtag's Description" text input field with a placeholder "Description", and the \[Save\] button is inactive.

5.  Enter in the "Hashtag's name" input field: It allows you to enter the alphabet, and number but have to appear after an alphabet character. If you enter just one valid character, the \[Save\] button will be enabled. But it does not allow you to enter only number characters or the strings have numbers at first, not the special character, and not blank space and maximum 500 characters. If you enter those forbidden cases, a red message below the "Hashtag's name" input announces that "Name Hashtag is invalid!" or "Maximum hashtag is 500 characters" and the \[Save\] button disables.
6.  Once you have entered the name, click the \[Save\] button and in the left table the new Hashtag will appear in the last row, and the "Hashtag's name" input field will be reset to allow for another entry.
7.  If you want to edit a hashtag that has already been defined in the “List of hashtag” table, hover on the row that contains the hashtag, and a group button {Edit; Delete} appears. Click on the \[Delete\] icon button to delete that hashtag. Click on the \[Edit\] icon button to edit that hashtag again.
8.  When you click the \[Edit\] button in the "Define Hashtag" table it allows you to edit the "Hashtag's name" and  "Hashtag’s Description" and you can then \[Save\] or \[Cancel\].
9.  If you click the \[Cancel\] button, it turns the "Define Hashtag" table to the initial state (empty in "Hashtag's name" input field and in the "Description" input field) and the \[Cancel\] button disappears and \[Save\] button is inactive.

Note:  If you enter only a blank space, a red message displays "Name Hashtag is invalid!" and the \[Save\] button disables. If you enter a name that exists already, a red message announces the "Hashtag has existed!" and the \[Save\] button disables.

#### Manage Hashtags

The “Manage Tag” feature allows you to add the hashtags to the “Register” block(s) and/or “Operation” block(s) on the Logit of a project that were added to the project with the [Create & Define Hashtags](#h.9dillg985o1w) function. This feature helps us to build the relationship and check the statement between the Logit blocks.

This setting will require you to connect Logit/Element blocks contain the input or output ports are applied “[Required Hashtags](#configure-port)” to the Logit or Element blocks that have those hashtags in the “Component Hashtags” field at “Manage Tag” screen of block to finish the model. Or to tick the hashtags on the model to use in the [Global and Local Rule](#global-and-local-rule). Or when a “Register” block is added a hashtag at Logit but is not the "Start Register" or "End Register" to create the "Join State Circle Shape" at [Flow Graph](#flow-graph-overview).

The "Manage Tag" screen can be found by clicking on a "Register" or "Operation" block and then clicking on the “Manage tag” icon of that block and selecting “Manage Tags.”

![](/assets/images/lokahi/image11.png)

Figure 81

Procedure of the "Manage Tag" screen on the Logit

1.  Open Logit workboard.
2.  Drag a Register block or Operation block into the workboard.
3.  Click on a block and then Click on the "Manage Tag" icon.
4.  Choose "Manage Tags" to bring up the "Manage Tag" screen with the following options:

\+ The "Component Hashtags" input field.

\+ The \[Save\] button is enabled.

5.  On the "Manage Tag" screen, click on the "Component Hashtags" input and a dropdown list shows all of the hashtags that have been defined or “No Results Found” if none exist. Once you choose a hashtag, it is added to the field with an "x" icon that allows you to easily remove it if desired.
6.  On the "Manage Tag" screen, click on "Required Hashtags" input and a dropdown list shows all of the hashtags that have been defined or “No Results Found” if none exist. Once you choose a hashtag, it is added to the field with an "x" icon that allows you to easily remove it if desired.

Note:

-   The inputs in both “Component Hashtags” and “Required Hashtags” allow you to start typing to search for hashtags with the results displaying that contain that string.
-   For more information about "Required Hashtags" input, see at [Configure Port](#configure-port).

7.  Once you have added all the hashtags you require, click the \[Save\] button.

Procedure of the "Manage Tag" screen at the ["Flow Graph](#flow-graph-overview)" screen

The "Manage Tag" screen can also be found on the Element and Contract on the "Flow Graph" screen as described below, but it will only display the "Component Hashtags" field and doesn't require you to connect all Elements that have a relationship with "Required hashtags".

1.  On the Element or Contract, drag the blocks have a suitable model inside those blocks into the workboard.
2.  Click the \[Flow Graph\] button on the bottom toolbar.
3.  Do 2 cases below:

4.  Case 1. Click on each State shape {"Start state shape"; "End state shape"; "Join state rectangle shape"; "Join state diamond shape"}.
5.  Case 2. Click and push \[Command\] or \[Shift\] buttons on the keyboard at the same time on the "Start state shapes" with a state shape that belongs to one of 3 state shapes {"End state shape"; "Join state rectangle shape"; "Join state diamond shape"}.

6.  Click on {Manage Hashtags} option and a "Manage Tag" screen appears and shows a "Component Hashtags" input field.
7.  On the "Manage Tag" screen, click on "Component Hashtags" input and a dropdown list shows all of the hashtags that have been defined or “No Results Found” if none exist. Once you choose a hashtag, it is added to the field with an "x" icon that allows you to easily remove it if desired.

Note:

-   The inputs for “Component Hashtags” allow you to start typing to search for hashtags with the results displaying that contain that string.

6.  Once you have added all the hashtags you require, click the \[Save\] button.

#### Recommendation Feature

The “Recommendation” feature reminds and guides you to finish the steps on the workboard. Once you complete all of the recommendation steps, you will be ready to deploy.

![](/assets/images/lokahi/image30.png)

Figure 82

Attention: The "Recommendation" feature is only available on the Element/Contract. At Logit, some feature of recommendation will be limited.

Procedure for Recommendations when no hashtags or only “Component hashtags” were added by engineers to the component(s):

1.  Go to the workboard of the Logit/Element/Contract and click on the \[Recommendation\] button in the bottom toolbar in the bottom right of the screen.
2.  Once you click on \[Recommendation\], a sidebar opens on the workboard in the right side of the screen with 2 tabs: "Should Do" and "Should Not Do".  
    \[Note: If the workboard is empty, the initial status of the "Should Do" tab includes a message "Drag at least one Component into the workboard" and "Should Not Do" will be empty.\]
3.  When you drag the block(s) onto the Logit/Element/Contract’s workboard that has no hashtags or only “Component hashtags” then the “Should do” tab in the "Recommendation" sidebar will state "You need to connect all Components together".

\[Note: For more information about “Component Hashtags”, see at [Manage Hashtags](#manage-hashtags) \]

4.  Once you have connected 2 blocks by an arrow, the “Should Do” will change message to "Set the parameters for the connection between {the component at the root of the arrow} with {the component at the end of the arrow}" and a "Fix it" button and "Show" button is enabled.
5.  Once you click on the "Show" button, it highlights the arrow between the 2 blocks on the workboard.
6.  Once you click the "Fix it" button, it automatically opens the ["Step 1: Make your connection"](<#define-a-connection-(make-your-connection)>) screen of the arrow connection between the 2 blocks on the Workboard.
7.  When you have not defined a port for a Logit/Element layer, it appears a recommendation box "Please add at least one port".
8.  Once you finish defining the connections, the requirements for this notification in the "Recommendation" sidebar will disappear and you can move on to other recommendations or if all are done you are ready to deploy.

Procedure for Recommendations when both "Component Hashtags" and "Required Hashtags" were added by engineers to the component(s):

1.  Go to the workboard of the Element/Contract and drag the block that has only "[Required Hashtags](#configure-port)" as a part of the Logit onto the Workboard.
2.  Click on the \[Recommendation\] button in the bottom toolbar and a sidebar will open on the workboard in the right side of the screen with 2 tabs: "Should Do" and "Should Not Do".  
    \[Note:If the workboard is empty, the initial status of the "Should Do" tab includes a message "Drag at least one Component into the workboard" and "Should Not Do" will be empty.\]
3.  The "Should Do" tab will state:

4.  Case 1 The required hashtag in set at input port: A recommendation "Use components relate to one of {the hashtags appear on the "Required Hashtags" input at anywhere of that Logit} You should use any components have relationship with "{the hashtags appear on the "Required Hashtags" input}" at "output ports"" appears with a "Fix it" button below.
5.  Case 2 The required hashtag in set at output port: A recommendation "Use components relate to one of {the hashtags appear on the "Required Hashtags" input at anywhere of that Logit} You should use any components have relationship with "{the hashtags appear on the "Required Hashtags" input}" at "input ports"" appears with a "Fix it" button below.

6.  Once clicked "Fix it" button, it shows a suggestion bar contains the Logit layers have "Required hashtags" in the "[Component Hashtags](#manage-hashtags)" input satisfy:

7.  That "Register" or "Operation" block has "Required hashtags" in the "Component Hashtags" input.
8.  That "Register" or "Operation" block has "Required hashtags" in the "Component Hashtags" input has to set a port.
9.  That "Register" or "Operation" block has "Required hashtags" in the "Component Hashtags" input and has been set to a port which has the right port type with the port of the "Register" or "Operation" has "Required hashtags".
10. The "Operation" cannot be required to connect with the other "Operation", so even if 3 things above are satisfied, the block containing the port satisfied won’t appear in the suggestion bar.

11. Once dragged the block on the suggestion bar, a box has a content "Make Connection for {the component contains only "Required Hashtags"} with {the component contains only "Component Hashtags"} Drag arrow to connect from {the component contains only "Required Hashtags"} to {the component contains only "Component Hashtags"} to make the connection for them" appears and has a "Fix it" button and "Show" button.
12. Click the "Show" button and it will highlight the 2 blocks on the Workboard.
13. If you click the "Fix it" button, it automatically draws an arrow from the block that has "Required hashtags" to the block that has "Component Hashtags" in the workboard.

\[Note: You can also connect yourself by [dragging an arrow](<#connecting-blocks-on-the-workboard-(drag-an-arrow)>) instead of using the “Fix It” button\]

8.  Once the 2 blocks are connected by an arrow, the “Should Do” box changes to "Set the parameters for connection between {the block at the root of the arrow} with {the block at the top of the arrow}". And the "Fix it" button and "Show" button are enabled again.
9.  Once you click on the "Show" button, it highlights the arrow connection between the 2 blocks.
10. Then, you can click the "Fix it" button and it automatically opens the ["Step 1: Make your connection"](<#define-a-connection-(make-your-connection)>) screen of the arrow connection between the 2 blocks on the Element's/Contract’s Workboard.
11. When you have not defined a port for a Logit/Element layer, it appears a recommendation box "Please add at least one port".
12. Once you finish defining the connections, the requirements for this notification in the "Recommendation" sidebar will disappear and you can move on to other recommendations or if all are done you are ready to deploy.

Other Recommendation examples:  
The examples below do not include a comprehensive list of every possible recommendation, but provide some base information for certain examples to provide guidance for how to utilize the recommendation feature.

1.  Once you set the Statement at [Flow Graph](#flow-graph-overview): The system may provide a recommendation after completing the Formal verification process if something is discovered to be wrong, then you would see a notification that states "Update your model to make State ... and State ... are eventually active/exclusive" in the "Recommendation" sidebar.  This lets you know that you have to fix the model (on the Logit/Element) to let the path of messages go to the State you set in the Flow Graph.
2.  If you have dragged a Logit block onto the workboard that has a valid model but doesn't have a Register block to initiate a [“Start State” and “End State”](#flow-graph-overview) into the Element's Workboard, the "Recommendation" sidebar will display 2 messages: "Add at least one Start to complete your model" and "Add at least one End to complete your model".
3.  When a block has an invalid model, "Recommendation" sidebar will display a message: "Update or replace '<Component Name>' Component with a valid Component", '<Component Name>' Component is not a valid model, please update or replace this Component by removing it and using another valid Component."
4.  If you delete the ports used to make a connection between blocks, the "Recommendation" sidebar will display a notification: "Update parameters for connection between "..." and "..." and a message: "This connection's parameters are not valid, please update them."
5.  The statements have set at [“Global Rules” and “Local Rules”](#global-and-local-rule) when get the FALSE value, then in the “Recommendation” will appear a box has the content "Update your model to reach {the statement sentence is False}" requires you to update your model to get the statement as you want. If you don't want to update, just delete that statement on the "Global Rules" or "Local Rules" input at ["Component Port" screen](#configure-port). The result of the statement of “Local Rules” will return and display at “Recommendation” sidebar at the Logit layer when that statement gets the “False” value. The result of the statement of “Global Rules” will return and display at the “Recommendation” sidebar at the Element/Contract layer when that statement gets the “False” value.

#### Flow Graph Overview

The “Flow Graph” feature allows you to configure the flow graph by connecting the lower layers. You can set the statement for your flow graph by clicking on the “Flow Graph” button at the bottom of the workboard. The “Flow Graph” statement is the condition of the shapes on the flow graph that allows those shapes to work and to allow the messages to go into the flow graph.

![](/assets/images/lokahi/image78.png)

Figure 83

Attention:

-   The \[Flow Graph\] button and the "Flow Graph" screen is only available on the Element and Contract. Even if you don't have any blocks on the workboard, the \[Flow Graph\] button will still appear on the bottom toolbar but the flow graph will just be blank when you click on it.

-   Engineering note:  To draw a flow graph, the model has to be a [valid model](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer).

Definition and Features of Flow Graph

The shapes in the flow graph have 3 types which are a circle, a rectangle or a diamond. Those shapes in the flow graph have been called “State”.

![](/assets/images/lokahi/image34.png)

Figure 84

1.  The “Flow Graph” shapes and their attributes are defined in the following manner:

-   The definition of the "Start state shape":  The "Start state shape" is created when a "Register" block only connects and points to the "Operation" block(s).  \[Note: An “Operation block cannot be at the starting point of a model.\]
-   The definition of the "End state shape": The "End state shape” is created when a "Register" block is connected and pointed from the "Operation" block(s).  \[Note: An “Operation block cannot be at the end point of a model.\]
-   The definition of the "Join state rectangle shape": The "Join state rectangle shape" is created when an "Operation" block is connected and pointed from more than 1 "Register" block and that "Operation" block has to connect and point to another "Register" block.
-   The definition of the "Join state diamond shape": The "Join state diamond shape" is created when an "Operation" block connects and points to more than 1 "End state shape" and 1 "Join state rectangle shape" at the same time; or more than 1 "Join state rectangle shape"; or more than 1 "End state shape".
-   The definition of the arrow: An arrow has been created by the “Register” block(s) are not the "Start state shape", "End state shape" and the “Operation” block(s) are not the "Join state rectangle shape", the "Join state diamond shape".
-   The definition of the "Join State Circle Shape":  the "Join State Circle Shape" only appears if the "Register" block is not "Start state shape", "End state shape" and does not point to the "Operation" block(s) are not the "Join state rectangle shape", the "Join state diamond shape" and that "Register" block has to be added a hashtag at Logit layer. This State will disappear once deleted all hashtags of this “Register” block at Logit. \[Note: This "Join State Circle Shape" does not appear if that “Register” block points to the "Operation" block(s) are the "Join state rectangle shape", the "Join state diamond shape", that Register's hashtags will be displayed in the other "Join State" at Flow Graph.\]

2.  The "Statement" box within the “Flow Graph” is created by clicking on the options of a “Statements” menu by highlighting a shape or multiple State shapes in the “Flow Graph”.  Once the “Statements” menu appears in the bottom of the screen you can click on the option you want to select and a “check” symbol appears and a statement appears in the "Statements" sidebar displaying the action.

1)  Case 1: The “Statements” Menu includes 1 option: {Manage Hashtags}

1)  This occurs when you click on one of the “Start State” shapes.
1)  The "Manage Hashtag" option of a “Statements” menu: Once clicked on {Manage Hashtags} option, a "Manage Tag" screen appears and shows a "Component Hashtags" input field. Once clicked on that "Component Hashtags", a dropdown list shows all hashtags have been defined. Once chosen the hashtags for that State or group of suitable State, then click the \[Save\] button on "Manage Tag" screen. Those hashtags will display beside the number of that State.
1)  The hashtags at Flow Graph of which layer belong to that layer and not affect like the hashtags at Logit layer. The hashtags at flow graph don't join to the statement of ["Global Rules" and "Local Rules"](#global-and-local-rule) at the Logit layer. And when adding additional hashtags at the Logit layer, it automatically updates those hashtags on Element/Contract 's Flow graph. It does not update the hashtags at Contract layer's flow graph if add hashtags at Element layer's flow graph.

1)  Case 2: The “Statements” menu has these 2 options: {Manage Hashtags; Eventually Active}

1.  This occurs when you click on one shape that is NOT a Start State shape.
2.  This occurs when you select both a "Start state shape" and another one of the 4 state shapes {"End state shape"; "Join state rectangle shape"; "Join state diamond shape"; “Join State Circle Shape”} at the same time using click and hold \[Command\]/\[Ctrl\] or \[Shift\].
3.  The meaning of the "Eventually Active" option is the message that belongs to the State shape or the one connected to the "Start state shapes" must belong to one of 4 state shapes {"End state shape"; "Join state rectangle shape"; "Join state diamond shape" ; “Join State Circle Shape”}.

![](/assets/images/lokahi/image62.png)

Figure 85

3.  Case 3:  The “Statements” menu has these 3 options: {Eventually All Active; Eventually At Least One Active; Exclusive}

1)  The options for “Eventually All Active”, ”Eventually At Least One Active”, and “Exclusive” appear when you select at least 2 state shapes at the same time that do not include a Start state shape or when you select at least 2 state shapes AND a Start state shape.

2)  The meaning of “Eventually All Active”, “Eventually At Least One Active” and “Exclusive”:

-   "Eventually All Active" option is that messages coming to the group of State shapes must "arrive at the same time".

-   "Eventually At Least One Active" option is the message that comes to the group of State shapes must "arrive at least one state shape of the group of State shapes".

-   "Exclusive" option is the messages come to the group of State shapes must "not arrive at the same time".

4.  Case 4: The “Statements” menu does not show any options

1)  This occurs when you select 2 Start state shapes at the same time with the \[Command\]/\[Ctrl\] or \[Shift\] buttons.

2)  You can select one option or more than one option from the “Statements” menu by ticking the box next to the option(s) you require.

3)  You can click on one or multiple of “Eventually All Active”, ”Eventually At Least One Active”, or “Exclusive”  and a “check” symbol appears and a statement appears in the "Statements" sidebar that displays the number of that state in the flow graph.
    Note:  You can untick the options to delete.  Or you can delete the statements by clicking on the “Delete” icon next to those statements.
4)  Once you tick the radio box, it changes the color from black to orange and in the body of the Flow Graph screen and it will display a combination of the State shapes that have been selected with this option.

    Note:  You are allowed to group State(s) with more than one option of the 3 options {Eventually All Active; Eventually At Least One Active; Exclusive}, but the options in the combination cannot be impacting each other.

5)  Move Feature:  Click and hold at the same time to move in the body of the "Flow Graph" screen:

When clicking on the shape:

a. You can click and hold on a shape to move the entire flow and change the graph to another presentation view. Once you let go of the click, the shape will be placed in the new place on the space of the body of the "Flow Graph" screen.

When clicking on empty space or an arrow:

a. If you click and hold any point in empty space or an arrow, a blurred black circle will appear and it will move the screen view in any direction that you drag. Once you release the click, it will show the new screen view.

5.  The “Flow Graph” \[Zoom in\] and \[Zoom out\] buttons can be used with a mouse or trackpad:

a. The default zoom is set to 100%.

b. Once clicked on "-" Zoom in icon button:

Case 1 in \[10% -> 100%\]: when clicking the "-" icon it decreases 10% will minus in the zoom numbers.

Case 2 in \[100% -> 200%\]: when clicking the "-" icon it decreases 20% will minus in the zoom numbers.

Case 3 in \[200% -> 400%\]: when clicking the "-" icon it decreases 50% will minus in the zoom numbers.

c. Once clicked on "+" Zoom out icon button:

Case 1 in \[10% -> 100%\]: when clicking the "+" icon it increases 10% will plus in the zoom numbers.

Case 2 in \[100% -> 200%\]: when clicking the "+" icon it increases 20% will plus in the zoom numbers.

Case 3 in \[200% -> 400%\]: when clicking the "+" icon it increases 50% will plus in the zoom numbers.

6.  \[Full screen\] button:

a. Once you click on the \[Full screen\] icon in the "Flow Graph" screen, it will close the "Add Component menu" sidebar on the left and the "Recommendation" sidebar on the right (if these sidebars are already opened) and cover the entire workboard.

b. You can then click the \[Full screen\] icon to close full the "Flow Graph" screen and it will open the "Add Component menu" sidebar and "Recommendation" sidebar again (if these sidebars were already opened) and returns to the normal “Flow graph” view (covering the lower part of the workboard).

7.  \[Exit\] button: You can click on the "x" icon of the "Flow Graph" screen to close it entirely. You then have to click the \[Flow Graph\] button to open again.
8.  \[Flow Graph\] button: You can click on the \[Flow Graph\] button to see the State status of the flow graph.
9.  \[Model detail\] button: You can click on the \[Model detail\] button to see the detail status of the flow graph (entire of the net).

“Flow Graph” Procedure:

1.  On the workboard of the Element/Contract, click on \[Flow Graph\] in the bottom toolbar.
2.  Drag the Logit/Element blocks with a model inside into the Element's/Contract's workboard.
3.  Click the \[Flow Graph\] button on the bottom toolbar.
4.  Once you drag the Logit/Element blocks with a model inside onto the Element's/Contract's workboard and click on the \[Flow Graph\] button. A "Flow Graph" screen appears and displays from the bottom toolbar to the middle of the workboard. The "Flow Graph" screen has:

\+ The \[Save\] button disabled, a "Zoom in and Zoom out" button group with the default 100%, a "Full screen" icon button and a "Exit" icon button.

\+ In the body of the "Flow Graph" screen singly placed in the screen.

Note: If you drag the valid blocks onto the workboard and after that you change that model of that block become to [a valid model](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer) and click on the \[Flow Graph\] button, the "Flow Graph" screen will display only the “Start State Shape”.

5.  Connect the the Logit/Element blocks to create an arrow:

Case 1: If the arrow connecting the blocks does not have a defined connection, the flow graph will not display. If we access the “Statements” menu {Eventually Active; Eventually All Active; Eventually At Least One Active; Exclusive}  a warning pop up "! Flow Graph" and state "Your model has not been completed. Please finish all the tasks on the recommendation list to set these statements." This lets us know we have to connect the flow graphs to create a bigger flow graph, then we can set the statements.

Case 2: If the arrow connecting the blocks has a defined connection, then the "Flow graph" screen can display the bigger flow graph and allow us to set these statements in the “Statements” menu {Eventually Active; Eventually All Active; Eventually At Least One Active; Exclusive}.

6.  The statement saves the State of the grouping and sets the options for that group and the statements will appear in the "Statements" sidebar and are arranged with the newest at the bottom of the Statements list. Then the \[Save\] button is enabled.
7.  Once you click the \[Save\] button, it sends the statements in to Lokahi for formal verification to check the rightness of the State of that Flow Graph and updates the New list of Statements into "Statements" sidebar (the older list of statements will be deleted) and at the same time it will send the “Statement” list to save the setting of the entire State shape of that flow graph to the Lokahi server to check the correctness of the statements of the flow graph. Then the \[Save\] button is then disabled.
8.  If the result from the Lokahi Formal verification process is False, a message will appear "Update your model to make State ... and State ... are eventually active/exclusive" in the "Recommendation" sidebar to let you know that you have to fix the model (the model on the Logit/Element) in order to allow the path of messages to go to the State you set in the Flow Graph.

\[Note:  If you update the flow graph again by adding or deleting block(s) to extend or decrease the net but you do not change or delete the statements, then an error warning "Statement error" may display and it won't send those error statements to the Lokahi server. When you hover over an "i" icon in this case, a message shows up with "Statement error because {the Numbers of those States have missed} have been deleted, you should delete this statement".\]

9.  Once you have completed the Flow graph and all of the items in the [Recommendation feature](#recommendation-feature), you are potentially ready to [deploy](#h.3ew3d88u4eb6) from the Contract.

#### Add Data Sidebar

The “Add Data” sidebar allows you to add the data to the “Register” block(s) on the Logit of a project at the Element/Contract’s layer when you don’t have permission to manipulate on the lower layer.

Procedure

1.  If you want to add a message at Element or Contract, you have to tick 2 checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract" on the “[Markings](#edit-markings)” screen of the “Register” block which you want to add.
2.  Open Element/Contract’s workboard.
3.  Drag a valid Logit/Element block into the workboard. A layer is valid when it has a valid model inside. For more information about a valid model, go to [A Logit Flow On Lokahi](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer).
4.  Click on the \[Add Data\] button at the bottom toolbar.
5.  Once dragged some valid blocks into the workplace, even if it has not created a valid model on that layer, it opens on the right side of the workboard page a “Add Data” sidebar. And show the boxes corresponding with all the “Register” blocks are allowed to add data on Element/Contract belonging to the valid model of the Logit/Element block.
6.  Once clicked the box of Logit block on the "Add Data" sidebar of Element, it shows all of the "Register" blocks of Logit block has “Register” blocks have been ticked the "Allow to add data in Element/Contract" checkboxes will be displayed by a box has the name of the "Register" block.
7.  If at Element or Contract has defined connection between 2 “Register” blocks - it means in "Step 2: Define your connection" screen, you have chosen to merge those 2 “Register” blocks have been merged into one “Register” block, it will display the “Register” name has been chosen to represent for both “Register” blocks. Once click on the “Register” box in the “Add Data” sidebar, it shows all “Register” blocks have been merged with at maximum 3 messages in the list of message if it has added and that “Register” box is just only appeared under the Logit box contains that “Register” block has been chosen as a representation, and in the Logit box contains the “Register” block didn't be chosen as a representation will be disappeared.
8.  Once clicked the box of Element block on the "Add Data" sidebar of Contract, it shows all the Logit blocks have “Register” blocks have been ticked the "Allow to add data in Element/Contract" checkboxes will be displayed by a box has the name of the "Register" block.
9.  We can name the “Register” block on the Logit's workplace to display the Register's name in the "Add Data" sidebar. If we don't name the Register block, it will display the name "register".
10. Once click on the box on the "Add Data" sidebar to expand the box, it shows the type of that Register and the first 3 messages of the list of messages of that "Register" blocks and the number of a message in one row. And at the bottom of the box, it has a "Add or show more message" button.
11. It will update the data which is added at Logit on the higher layer at the "Add Data" sidebar if that Logit/Element block has not been added to any data in the higher layer.
12. It won't update the data which is added at Logit on the higher layer at the "Add Data" sidebar if that Logit/Element block has been added data in the higher layer..

Attention: This feature depends on inheritance to avoid the conflict.

13. Once clicked on the "Add or show more message" button, it opens the "Markings" screen of the "Register" block. We can add more messages but can not change the type of that Register.

Note:

-   When you don't choose any Logit/Element block on the Element/Contract's workplace, it shows all boxes of the Register blocks have permission to "allow user to add data".
-   Once you choose a Logit/Element block or select a group, it shows only a box of the Register block has permission to "allow user to add data"  or the group of "Register" blocks on the "Add Data" sidebar.

#### Global and Local Rule

The “Global and Local rules” feature allows you to set the statement for the model to check if the message in the “Register” block can reach the other “Register” on the model or not. If the result of the statement is false, it will let you know you have to fix the model to satisfy your purpose by a recommendation.

![](/assets/images/lokahi/image87.png)

Figure 86

Definition for the Global and Local Rules

1.  The “Global Rules” and “Local Rules” inputs are enabled to enter only at “[Component info](#configure-port)” of Logit layer.
2.  The statements at "Global Rules" input are just affected at Element and Contract. The statements at "Local Rules" input are just affected at Logit.
3.  It will suggest the hashtags have been defined to be like a sensor to set on a “Register” block. The sensor will get “True” value or active if it has the message stays at that “Register” block at a time on the time axis. And the sensor will get a “False” value if it does not have any message at that “Register” block at a time on the time axis.
4.  There are two types of a hashtag can work on this feature: "#is\_" and "#now\_" these are the prefixes of a hashtag could add.

-   "#now\_": when the hashtag containing the prefix “now” is true at a state, it is true only at that state. It means it sets “True” for the hashtag at that “Register” block at a time when having a message at that “Register” block. When you set the hashtag has the prefix “#now”, it is like when you set a sensor to check whether or not the message can go to the “Register” block where the sensor is set. It exists the time that the sensor cannot get true when another “Register” block that the message can go don't set the sensor there in the model or according to the logic of the model the message cannot go to the “Register” block has been set the hashtag with the prefix “#now\_”.
-   "#is\_": when the hashtag containing the prefix “is” is true at a state, it is true for all the states from that point until the end of execution. When you set the hashtag has the prefix “#is”, it is like when you set all sensors are the hashtag has prefix “#now” in the rest of the road which begins from the “Register” block that you set the hashtag has the prefix “#is” to the end “Register” block where the message can go. (Attention: There are some “Register” blocks where the message cannot go if the “Operation” block cannot fire the message to that “Register” block. For more information about how the message can fire through an “Operation” block, see at [A Logic Flow On Lokahi](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer))

\[Note: the normal hashtag corresponds with the hashtag containing prefix “now”. Ex: #a is equal #now_a\]

5.  The hashtag will use the temporal logic and logical operators to make an statement (expression) with the hashtags have prefix:

a. Temporal operators

-   “always”: Want all time in the all time axis. It means:

*   With the “Register” blocks: when you ask all the time the “Register” blocks of the model where the message(s) can reach are active in many ways of the message can go - corresponding with many time axis. If there is at least one time axis the message cannot go to the “Register” block has set a hashtag that it can go, the result of the statement is “False” even if it exists the time axis the token can go to all “Register” blocks.
*   With the statement: those statements always get “True” value.

-   “eventually”: Want a moment in the all time axis. It means

*   With the “Register” blocks: when you ask at least one time the “Register” block of the model where the message(s) can reach are active in many ways the message can go - corresponding with many time axis. If it exists at least one time axis the message cannot go to the “Register” block has set a hashtag that it can go, the result of the statement is “False” even if it exists the time axis the message can go to that “Register” block.
*   With the statement: those statements at least one time get “True” value.

-   “exclusive”: Don't happen at the same time. It means:

*   With the “Register” blocks: at least in one time a “Register” block contains those hashtags or those hashtags are in the different "Register" block, but those hashtags are active at the same time in the time axis.
*   With the statement: those statements get “False” value at the same time at least one time in the time axis.

\[Note: + The time axis is a case which is started from the first movement action of the message at the "Start Register" starts until the time which is all messages cannot go to any Register)

\+ A point of time is an action in the model that has the messages move from one Register to another Register.\]

b. The logical operators

-   and
-   or
-   not
-   imply:

\- Common format of “imply” operator: {clause A imply clause B}. It means when clause A is False, don’t care about clause B, the result of the statement is True. The statement is only False when clause A is True and clause B is False.

\- Example for “imply” operator: (#is_payment is always active) imply (#is_shipping is eventually active):

-   The meaning of the statement above is: If #is_payment always active, then #is_shipping will be active at some time in the future (at least one).
-   This statement gets a “false” value if #is_payment is always active and #is_shipping is always inactive.
-   This statement gets a “true” value:

-   if #is_payment is active at some points (but not all points) and #is_shipping is always inactive.
-   if #is_payment is always active and #is_shipping will be active at some time in the future (at least one).

\- This statement: “#is_payment imply (eventually active #is_shipping)” requires when the previous hashtag happened, the next hashtag has to happen after that in the time axis.

\[Note: The “Start Register” block can affect the result of the statement of the model. If that “Register” block is a “Start Register” block so when you set the hashtags contain prefix “#is\_” or “#now\_” there, those hashtags will get “True” value or active. For more information about the “Start Register” block, see [A Logit Flow On Lokahi](#definition-basic-of-the-unit-block-and-the-logic-flow-on-the-lowest-layer) \]

6.  It suggests the key words to connect the hashtags to create a statement: is, not, is not, are, are not, implies, imply, eventually active, always active, and, or.
7.  Some rules when enter in the “Global Rules” and “Local Rules” inputs:

8.  “is” = “are”
9.  “is not” = “are not”
10. “imply” = “implies”
11. “if {clause A} then {clause B}” = “{clause A} imply {clause B}”.

\=> So we can use the verbs above don’t worry about grammar.

5.  The chain of hashtag is the hashtags are connected by “and” or “or” operator. Ex: #a and #b or #c.
6.  Only allowing separating the chain of hashtag clauses becomes a group of the hashtag by "()". Ex: #a and (#x or #d). A group of hashtag is (hashtag + {and, or} + hashtag + {and, or} hashtag .....) .
7.  Do not allow separating the clauses by “()”. Ex: ((#a is eventually active) and (#b is eventually active)) is not always active; => Cannot enter in the “Global Rules” and “Local Rules” inputs.
8.  Just at the end of the hashtag chain is an object clause {" is/ are” + “eventually / always active"} to create a complete clause. A clause is a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}. Ex: (#a and #b or #c) are eventually active
9.  An object clause is “Exclusive”, and has to have more than one group of hashtags connect together by “and” operator. Ex: (#a or #b) and (#c and #d) are exclusive
10. You have to use the hashtag that has been defined at “[Define Hashtags](#h.9dillg985o1w)” screen.
11. Have to separate the statement by ";". Ex: #a are eventually active ; (#b or #c) are eventually active
12. When not entering enough the elements of an expression format, it warns "Wrong Expression".

13. Some representative expression formats:

14. a hashtag + verb{is, is not, are, are not} + object{eventually active, always active}; . Ex: #is_a is always active; #now_a is eventually active; #a and #b are not always active;
15. a hashtag + {and, or} + a hashtag + {and, or} + a hashtag .... + verb{is, is not, are, are not} + object{eventually active, always active, exclusive}; . Ex: #is_a and #now_b are not always active; #a or #b are eventually active; #now_a and #now_b are exclusive;
16. a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}+ {and, or} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active} + ...{more clause} ; . Ex: #a is eventually active and #b is always active;
17. a group of hashtag + {imply, implies} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active, exclusive}; . Ex: #a implies #b is eventually active;
18. a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}) + …{more clause} + {imply, implies} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active} + ….{more clause} ; . Ex: #a is eventually active imply #b is always active;
19. (a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active} + {imply, implies} + a group of hashtag + verb{is, is not, are, are not} + object{eventually active, always active}) + verb{is, is not, are, are not} + object{eventually active, always active} ; . Ex: (#a is eventually active imply #b is always active) is eventually active;
20. object{eventually active, always active} + a group of hashtag; . Ex: always active #a; eventually active #a;
21. object{eventually active, always active} + (hashtag + {and} + hashtag + {or} hashtag .....); . Ex: eventually active #now_a or #now_b;
22. object{eventually active, always active} +(hashtag + {imply, implies} + hashtag); . Ex: eventually active #now_a imply #now_b;
23. ( a group of hashtag / a hashtag + {imply} + a group of hashtag / a hashtag ) + {and} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag / a hashtag ) + {and} + .....  + object{exclusive}; . Ex: (#now_a and #now_c) and #now_b exclusive; #now_a imply #now_c and #now_a imply #now_b exclusive ; #now_a and #now_a imply #now_b exclusive ;
24. ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + .....  + verb{is,are} + object{exclusive}; . Ex: (#now_a and #now_c) and (#now_b or #now_d) are exclusive; #now_a imply #now_c and #now_a imply #now_b are exclusive ; #now_a and #now_a imply #now_b are exclusive ;
25. object{exclusive} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + ( a group of hashtag / a hashtag + {imply} + a group of hashtag /a hashtag ) + {and} + .....; . Ex: exclusive (#now_a and #now_c) and #now_b;
26. if {clause A} then {clause B}. Ex: if #a is eventually active then #now_b is eventually active;
27. \+ a group of hashtag + {imply, implies} + (eventually/always active + a group of hashtag ); . Ex: #a imply (eventually active #b); (This statement requires when the previous hashtag happened, the next hashtag has to happen after that in the time axis).

28. Example:

![](/assets/images/lokahi/image85.png)

Figure 87

Valid statements:

-   If #is_payment is true at “Register” block 1, then #is_payment is true at “Register” block 2, 3, 4 and is false at “Register” block 0.
-   If #is_payment is true at “Register” block 1, then #now_payment is true at “Register” block 1, 2, 3, 4 and is false at “Register” block 0.
-   If #now_payment is true at “Register” block 1, then #now_payment is true at “Register” block 1 and is false at “Register” block 0, 2, 3, 4.
-   If #now_payment is true at “Register” block 1, then #is_payment is true at “Register” block 1 and is false at “Register” block 0, 2, 3, 4.

Procedure

1.  Define the hashtag with the prefix #is\_ and #now\_ for a hashtag.
2.  Add those hashtags in the "Component Hashtags" input of "[Manage Tag](#manage-hashtags)" once clicked on a “Register” block of model then click "Manage Tags" icon.
3.  At Logit, click on "Edit" at the "Add Component" sidebar.
4.  Goto "Component Info" tab, then add the statement in the "Global Rules" input if you want to check the statement at the Element or Contract layer and add in the "Local Rules" input if you want to check the statement at the Logit layer.
5.  Depending on the model, the statement will return the result is TRUE or FALSE value. If the statement is FALSE, in the “Recommendation” sidebar will appear a box with the content "Update your model to reach {the statement sentence is False}" requires you to update your model to get the statement as you want. If you don't want to update, just delete that statement on the "Global Rules" or "Local Rules" input at "Component Port" screen.
6.  The statement contains only the hashtag does not add in the model or The statement contain the hashtag does not add in the model combines with the hashtag is added in the model and the result of that statement is False, in Recommendation sidebar appears a box with the title: "Add the hashtags "{the hashtag does not add in the model}" to your components", body: "These hashtags are not existed in your components so we can not reach "{the statements in this case}". Note: the statement has the same hashtag is not added and the statement is False, it will combine the statement in one recommendation for one hashtag.

Example:  "#a is eventually/always active". If the hashtag #a is not added, the statement is False => So it warns.

7.  The statement containing the hashtag does not add in the model combined with the hashtag is added in the model and the result of that statement is True, it suppose that statement containing the hashtag does not add in the model does not exist.

Example: "#a eventually active or #b eventually active". If #a eventually active of these statement is true, we pass them even #b does not exist.

\[Note: The result of the statement of “Local Rules” will return and display at the “Recommendation” sidebar at the Logit layer when that statement is “False” value. The result of the statement of “Global Rules” will return and display at “Recommendation” sidebar at Element/Contract layer when that statement is “False” value.\]

#### Decision Block

“Decision” block is a function block that is created by dragging only 2 "[Operation](<#definition-of-a-register-and-operation-block-(at-logit-layer)>)" blocks on the Logit's workplace to use at the Element layer and dragging only one "Decision" block on the Element's workplace to use at the Contract layer.

“Decision” block is used to transfer the value data of one block to another block if one of the values of the input block satisfies the condition is set at that Decision block.

The purpose of limiting the data can go to the next step of the model.

![](/assets/images/lokahi/image80.png)

Figure 88

Procedure for creating a Decision block at Logit layer

1.  Create a new Logit layer. Go to the workboard of that Logit layer.
2.  Drag only 2 "Operation" blocks on the Logit's workplace.

\[

-   Note: Ignore the announcement at the “[Recommendation](#recommendation-feature)” button and sidebar.

-   Attention:

-   If you drag only "[Operation](<#definition-of-a-register-and-operation-block-(at-logit-layer)>)" blocks but more than 2 blocks, it does not create a “Decision” block, even a valid block.
-   If you drag only 2 "Operation" blocks but you make a valid Logit layer by connecting with another “[Register](<#definition-of-a-register-and-operation-block-(at-logit-layer)>)” block and adding some ports for that Logit layer, it will create a normal Logit block and won’t have the functions of a “Decision” block on the Element layer.

\].

3.  Goto Element layer, on the “Add Component” sidebar, appears that the “Decision” block is active and has changed the icon from the normal icon (“Logit”  icon) to the “Decision” icon![](/assets/images/lokahi/image59.png).

![](/assets/images/lokahi/image65.png)

Figure 89

Procedure for creating a Decision block at Element layer

1.  After you have created a “Decision” block. Create a new Element layer. Go to the workboard of that Element layer.
2.  Drag only 1 "Decision" block on the Element's workplace.

\[

-   Note: Ignore the announcement at the “Recommendation” button and sidebar.

-   Attention:

-   If you drag only "Decision" blocks but more than 2 blocks, it does not create a “Decision” block, even a valid block.
-   If you drag only 1 "Decision" block but you make a valid Element layer by connecting with another valid Layer block and adding some ports for that Element layer, it will create a normal Element block and won’t have the functions of a “Decision” block on the Contract layer.

\].

3.  Click on that Decision block, and click on the “Edit Decision” icon. The “Edit Decision” screen appears and types a name.

\[Attention: You have to enter a string to name for the representation variable that will appear in the condition of this Decision block at the Contract layer. Because if you don’t, when you in the Contract layer and click on the Decision block and open the “Edit Decision” screen, a warning is “Please update this {Decision block’s name}” will announce you have to update this Decision block so you can use this Decision block to finish the procedure to connect the Decision block on the model.\]

4.  Goto the Contract layer, on the “Add Component” sidebar, appears that the “Decision” block is active and has changed the icon from the normal icon (“Element”  icon) to the “Decision” icon.

Procedure to connect a Decision block into the model

Note: This procedure is used at the Element and Contract layer.

Attention:

These rules below are used to create a valid block that contains the Decision blocks:

1.  A Decision block has to have at least one input block is a normal block by dragging from the normal block to the Decision block (Recognize by an arrow appears and start from the normal block to the Decision block).
2.  A Decision block should have at least one output block is a normal block by dragging from the Decision block to the normal block (Recognize by an arrow appears and start from the Decision block to the normal block).
3.  If the layer contains a Decision block that doesn’t have the output block of that Decision, it still creates a valid block that can be used on the higher layer or deploy successfully.
4.  If the layer contains a Decision block that doesn’t have the input block of that Decision, it cannot create a valid block and that block cannot use at the higher layer or deploy successfully.
5.  Decision blocks can connect with each other.
6.  Only one connection can be created between the blocks on the Element and Contract layer. And only one direction of an arrow can create between a Decision block and another block.
7.  The block is an input block of the Decision block that has to contain at least one “Register” block or “Operation” block that has set the [output port](#configure-port).
8.  The block is an output block of the Decision block that has to contain at least one “Register” block or “Operation” block has set the input port.
9.  The Decision blocks can connect with each other, but like the rule when you connect a Decision block with the normal block, just only create a direction from this Decision block to the other Decision block.
10. With the chain of the Decision blocks, the variables representing the field of the Register block connected with the input port of the first Decision block are rendered at the "Variable" frame of all the "Edit Decision" screens of the Decision blocks.
11. And all conditions of those Decision blocks will be merged with each other by the "and" operator.

Step 1: Procedure to connect the input block for the Decision blocks

1.  Drag a valid block contains at least one “Register” block or “Operation” block that has set an output port. And drag a Decision block into the workplace.
2.  Connect from the normal block to the Decision block.
3.  A recommendation will appear on the “Recommendation” sidebar to require you to define the connection.
4.  Click on the “Fix it” button at that recommendation or click directly on that arrow and click on the “\$” icon to open the “Choose Represent Value Data” screen.
5.  In the “Choose Represent Value Data” screen”, it requires you to name the fields as representation variables of the “Register” blocks or just choose the “Operation” blocks that are set as an output port of the input block of the Decision.
6.  Choose a name of the “Register” blocks or “Operation” blocks (that “Register” block or “Operation” block is set an output port) in the select box underneath of the sentence “Select Port in {the input block} which you want to connect with {Decision’s name}”.
7.  If the Register block is chosen in the selection box under 'Select Port in "{the input block's name}" which you want to connect with "Decision block name" label, there are:

\+ A disabled field contains the default variable is "transactionID"

\+ The next, on the left, are the fields of the type of that Register block. Each field will display the name of the type which is defined from the basic type and the name of the basic type.

\+ On the right are the inputs that are filled by a name of the type of that Register block. You can change those variables' names by yourself. Or you can let that input empty. Those fields are used to set up the representation variables.

8.  If the Operation block is chosen in the selection box under 'Select Port in "{the input block's name}" which you want to connect with the "Decision block name" label, there is nothing.

\[Attention: Besides the variables have the basic type which is one of basic types {ADDRESS, STRING, INT, BOOL, UNIT, SENDER, BLOCK_NUMBER}, depending on that variable’s type, let choose exactly what comparison operator and value to compare at the “Edit Decision” screen.\]

9.  Click the \[Save\] button of the “Choose Represent Value Data” screen.
10. Once defined successfully, the connection changes from yellow to gray and the recommendation will disappear.

Step 2: Procedure to connect the Decision blocks with the output blocks

1.  Drag a valid block contains at least one “Register” block or “Operation” block that has set an input port. And drag a Decision block into the workplace.
2.  Connect from the normal block to the Decision block.
3.  A recommendation will appear on the “Recommendation” sidebar to require you to define the connection.
4.  Click on the “Fix it” button at that recommendation or click directly on that arrow and click on the “Choose Status” icon to open the “Choose Status and Choose Value Data” screen.
5.  In the “1 Choose Status” screen, it requires you to choose one of both statuses are “No” or “Yes” by clicking on one of both radios. Click \[Next\] button to go to the second step.

\[Note:

-   If you choose the “No” option when the condition at the “Edit Decision” screen is False, the value data will assign to the output block on this “No” branch. The same with the “Yes” option.
-   Can create many branches “No” and “Yes”.

\]

6.  In the “2 Choose Value Data” screen, if the “Decision” block doesn’t have any input block, it will require you to connect the “Decision” block with an input block or another “Decision” block.
7.  Choose a name of the “Register” blocks or “Operation” blocks (that “Register” block or “Operation” block is set an input port) in the select box underneath of the sentence “Select Port in {the output block} which you want to connect with {Decision’s name}”.
8.  The next step, you will enter the expression or variables in the input fields.
9.  If the Register block is an input block that is connected with the Decision block, those fields of that “Register” block will be assigned the variables. Then we can choose which variables of the input block are assigned to which field of the output block of the “Decision” block if the “Register” block is chosen at the output block. Or we just only choose which “Operation” block of the output block to send the variables to.
10. If the “Operation” block is an input block that is connected with the “Decision” block, those variables of the “Register” block point that “Operation” block will be rendered to the output block. Then we can choose which variables of the input block are assigned to which field of the output block of the “Decision” block if the “Register” block is chosen at the output block. Or we just only choose which “Operation” block of the output block to send the variables to.

\[Attention: The variables have the basic type which is one of 6 basic types { STRING, INT, BOOL, ADDRESS, BLOCK_NUMBER, SENDER} except UNIT, depend on that variable’s type, it will filter which variable in the right side is valid. \]

11. If you want to use some [Extra API functions](#add-extra-api-function) to execute once you deploy the contract, click the \[Add Extra API\] button and type one API function that you want to use.
12. Once you choose a value for all variables or not, the \[Save\] button is still enabled to click. Click the \[Save\] button of the “Choose Value Data” screen.
13. Once defined successfully, the connection changes from yellow to gray and the recommendation will disappear. And if you choose the “No” option, the “No” icon will display on that connection, which happens the same when choosing the “Yes” option.

Procedure to connect the Decision blocks with each other in the model

1.  Drag the Decision blocks into the workplace.
2.  Connect the Decision blocks with each other. \[Note: Only create one \]
3.  A recommendation will appear on the “Recommendation” sidebar to require you to define the connection.
4.  Click on the “Fix it” button at that recommendation or click directly on that arrow and click on the “Choose Status” icon to open the “Choose Status and Choose Represent Value Data” screen.
5.  In the “Choose Status” screen, it requires you to choose one of both statuses are “No” or “Yes” by clicking on one of both radios. Click \[Next\] button to go to the second step.  
    \[Note:

-   If you choose the “No” option when the condition at the “Edit Decision” screen is False, the value data will assign to the output block on this “No” branch. The same with the “Yes” option.
-   Can create many branches “No” and “Yes”.

\]

6.  Click the \[Save\] button in the “Edit Decision” screen.
7.  Once defined successfully, the connection changes from yellow to gray and the recommendation will disappear.

Procedure to edit the Decision block

1.  Click on the Decision block into the workplace.
2.  Click the “Edit Decision” icon.
3.  When you haven't connected any input block with the Decision block, in the “Edit Decision” screen the variable frame is empty input. Allow entering the alphabet and number but the number cannot be first.
4.  If the “Decision” block has the input block which has a “Register” block connected with that “Decision” block, the combo box at the “Variable” frame will suggest the variables that were defined at the input connection of the “Decision” block.
5.  If the “Decision” block has the input block which has an “Operation” block connected with that “Decision” block, the combo box at the “Variable” frame will suggest the variables of the “Register” block connected with that “Operation” block at the Logit layer.
6.  The “Edit Decision” screen will display a select box displaying "Number" for the first time. There are 4 options {Number, String, True or False, Customize}:

-   If you choose the "Number" option, after clicking on the frame, it only allows entering the real number on the frame. It cannot enter any alphabet and special character. The operators in the operator select box can use are {>, <, =, >=, <=, <>}.
-   If you choose the "True or False" option, the input frame changes to a select box with 2 options are "True" and "False". The operators in the operator select box can use are {=, <>}.
-   If you choose the "String" option, it allows entering the number, alphabet, and some special character. When entered the wrong some character it will appear a red warning line below the frame: ‘"Value cannot contain some characters like (space, ~, @, #, ') !"’. The operators in the operator select box can use are {=, <>}.
-   "Customize": Allow to type an Expression contains the Variables of Extra API: (blockNumber, sender, contractAddress, value, owner) and the variables and the operator (+, -, \*, /). Allow typing only variables. Don't allow typing the function, boolean expression, a string not an expression.

7.  In the input under type a value or expression that you want to compare with the representation variable you have chosen.
8.  Click the \[Save\] button in the “Edit Decision” screen.

### Dapp

Dapp is an interface to use smart-contract from Lokahi. Dapp displays the information of a contract after deploying successfully on a blockchain. It will inform us about the contract’s information, provide the interface for the account deployed, that contract can add more data, can execute methods, and track the flow of the message in the model. Each manipulation on the interface will require the blockchain, so you have to sign in with an account address through the Meta Mask with the right blockchain.

![](/assets/images/lokahi/image41.png)

Figure 90

Procedure for deploying a contract

1.  Go to the workboard of a Contract layer. Then click the \[Deploy\] button of the toolbar.
2.  Choose the blockchain {Ethereum} which you want to deploy the current Contract on.
3.  Enter in the “Deployment” form the name and version of the Contract will deploy.
4.  Connect with your blockchain that you want to deploy on. To know more please access to [Deploy A Contract From The Workboard](#deploy-a-contract-from-the-workboard).
5.  Once entered and connected with your account, click the \[Deploy\] button on the “Deployment” form.
6.  Click on the [“Transaction history” button](#transaction-icon) next to the \[Deploy\] button at the toolbar.
7.  You can see your contract is now deploying.
8.  After deploying successfully, click on the name of the contract at [“Transactions” screen](#view-deployment-history-of-a-contract-on-the-dashboard) to go to the interface of the Dapp.

Procedure on the Dapp interface

1.  Once clicked on the contract name in the “Transaction” screen, if the contract deploys successfully, it will access the “Choose Transaction ID for use Smart Contract” screen of the Dapp page where you can see all of the transactionID of the contract which you’ve just clicked on the name.

\[Note: With each TransactionID - which you add in the first of each message at the “[Marking](#edit-markings)” screen of each “Register” block - it will only show the messages belong to that transactionID in the model.\]

2.  The first time you access the Dapp interface, you should look on the top of the screen. If there is no need to connect with the blockchain network, it displays the \[Network Configure\] button. If they are connected with the network even if success or failure, it displays \[Network Connected\] status button.
3.  When the connection with the blockchain fails, a red pop up will show and in that pop up have the "Back to Contracts Page" button.
4.  After clicking on the "Back to Contracts Page" button, it will load the "Smart Contracts Projects" page.
5.  When clicking on \[Network Configure\], a form will display underneath of the button:

\+ A switch "Configure with Metamask"

\+ When switching ON, underneath that switch is a form that shows "Notifications Please open metamask to set up network." if you already connected the browser with [Metamask](#configure-the-metamask-and-connect-the-metamask-with-lokahi).

\+ When switching OFF, underneath that switch is a form that shows the "URL blockchain’s network" with the input has the "URL" word.

\+ A \[Submit to fetch contract\] button

6.  When clicking \[Submit to fetch contract\] button:

\+ if the switch "Configure with Metamask" is ON, a green pop up "Fetching contract’s information successfully" appears and the \[Network Configure\] changes to  \[Network Connected\] status.

\+ if the switch "Configure with Metamask" is ON, but have installed Metamask on the browser, a \[Connect with MetaMask\] button appears under the switch. Once clicked on the \[Connect with MetaMask\] button, it will open the Extension page to install MetaMask (can install in Chrome, Opera, FireFox),

\+ if the switch "Configure with Metamask" is OFF, and don't enter any URL or invalid URL in the "URL blockchain’s network" input, once clicked \[Submit to fetch contract\] button a red pop up shows "RPC_URL invalid!

7.  Click on a transactionID is listed on the screen or you can create a new one by clicking on the \[Create New Transaction ID\] button.
8.  It opens a screen to create a Transaction ID. Enter a name for a new Transaction ID and click \[Add\] button.
9.  Once clicked on the Transaction ID, it accesses the “Dashboard” tab of the Dapp page.
10. In the toolbar of Dapp page, if you click on the Menu icon in the left, it will show you 3 options:

11. Go to Project: it will access the Workboard page of the project.
12. Change Project: it will access the “Smart Contract Project” page where all of the projects have the contracts have been deployed successfully.
13. Back to Dashboard: it will access the Dashboard page.

14. If you click on the “Smart Contract” dropdown list, you can see all versions of contract have deployed successfully and you can change alternatively between those contracts’ Dapp interface.
15. The Dashboard tab will show:

\+ A direction link "Smart Contract/{contract's name}": Can click on Smart contract to return the "Smart Contract Project" screen and can choose the other project that has the deployed contract.

\+ Overview frame will show: Contract address frame with copy button and the frame shows the balance and currency and blockchain's name.

\+ Number of viewers can see this contract.

\+ Number of TransactionID of this contract.

13. The Users tab has a table that has a "Users" column showing all viewers can see this contract. The owner can add the viewer in the Contract by clicking the \[Add User\] button to open the "Add User Or Organization To Contract" dialog. In this dialog, you can search the user or organization to add.

\[Note:

-   Only the user has deployed that contract or the user or organization has ["Write" or "Delete" access](#projects) (include add collaborator and transfer case) can see the "Add User" button and can add user or organization for that contract.
-   The User or Organization has "Read" access (they can see the project and all the contracts of that project) only see how many users or organizations, cannot see the "Add User" button.

\]

14. When you have deployed the contract on Ethereum, then at “Sign in” form after clicking \[Sign in\] button, you choose your account address on the “Account” input and “Private Key” then click \[Send to Access\] or just choose one of 10 unlocked account which that you used to deploy your contract.
15. In the “Contract” tab you can execute and add the message on your model. The Contract tab will show:

\+ A left table shows the TransactionID button, you can click to open the TransactionID screen and below it shows all the "CONTRACT INFORMATION", show the Register as nested list:

~ Element name

~ Logit name

~ Register name 1

~ Register name 2

~  …

You can click to open the nested list or click to close.

\+ A right table shows the columns corresponding with the fields of the type of that Register block and a \[Add + {Register's name}\] button. But if the “Register” block doesn't allow you to add data, you cannot see the \[Add + {Register's name}\] button. And if that “Register” block is [allowed to add data](#edit-markings) and your account address doesn’t be allowed to add message (it means that your account address has to have the [permission to add data](#add-permission-to-add-data-for-an-account-on-blockchain) in that “Register” block), you can see the \[Add + {Register's name}\] button but the button will be disabled.

16. After clicking on the \[Add + {Register name}\] button, it will appear in the "Add New {Register name}" frame. Here you can enter values for each type of input. You can add the message by clicking on the \[Add\] button.

\[Note: + When you are not the one who deployed the contract, then you cannot add data in the Dapp interface of that contract. You have to have permission to add data which is provided by the user who deployed the contract, [add permission](#add-permission-to-add-data-for-an-account-on-blockchain) for your address in that “Register” block.\]

17. Once clicked the \[Add\] button in the “Register” form, wait for the transaction to execute successfully to see the message appear on the “Register” form.
18. After that the message will be executed through the transaction which is the “Operation” block on the model. And depending on your model, that message will go to the “Register” which it can reach.
19. There is the “Transaction Activities” sidebar after you click on the Bell icon, it will display all transactions of the contract that are working.

\+ When there are no announcements, it will be displayed "No notifications right now

When you start working on contract, we’ll show the notifications here".

\+ "Hide success transaction" button has two ON_OFF states.

20. After doing a Transaction or Add a message, the "Transaction Activity" column will appear:

\+ "Transaction Successful" box contains a content:

Your transaction has been complete! Please check the "Contract Information" column to track your contract status!

-   "Pending Transaction" box contains a content:

Your transaction is executing, please wait until that transaction is complete!

-   "Pending Transaction for Approval" box contains a content:

Your transaction is waiting for your approval. Please approve or dismiss before doing a new transaction!

With the \[Approve\] and \[Dismiss\] button

-   "Transaction Failed" box contains a content:

Your transaction has been failed! Please check again your contract before doing a new transaction!

21. With the “Pending Transaction” box, you can see the “Operation” name and 2 fields of the expression fields of the “Operation”. Click the “See all data in Transaction” link button to open the details of this transaction.

\[Note:

\+ With the transaction has the [Extra API Function](#add-extra-api-function), once you click the \[Approve\] button on the “Pending Transaction” box, that Extra API function will be done.

\+ With the “deposit” Extra API function, it will appear on the “Pending Transaction” box an input to let you enter the amount of the money that you want to send to the contract address.\]

22. When clicking the \[Approve\] button of the "Pending Transaction" box, it changes to the "Pending Transaction" box. After the transaction is done, the "Pending Transaction" box changes to the  "Transaction Successful" box or "Transaction Failed" box.
23. If the account address is not allowed to execute the transaction, when you click the \[Approve\] button, a red pop up says "Approve transaction failure!" will show.

\[Note: + When you deploy in a blockchain A and there is a transaction need to approve but then you change to the blockchain B, then once clicked \[Approve\] button on the Pending box at "Transaction Activity" sidebar at Dapp page, a dialog "Approve transaction" appears and give a warning is "We found your current blockchain network ID is not equal to this contract network ID. Are you sure you want to approve?".\]

#### Add Permission to Add Data For An Account On Blockchain

The “Add Permission” allows you to add the user’s address account on the blockchain into the “Register” block(s) which have permission “Allow to add data” on the Logit of a project. Then except the user who owns the contract, the user's address account can have permission to add data on the contract’s [Dapp](#h.932d6iw0gppo) interface page.

Note:

-   The user who has deployed the contract will be added data on the contract’s [Dapp](#h.932d6iw0gppo) interface page even if that user’s address has not added the permission.
-   You have to tick 2 checkboxes are "Allow user to add data in Element" and "Allow user to add data in Contract" on the “[Markings](#edit-markings)” screen of the “Register” block before you add some account’s address to have permission to add data. Because when you don’t allow to add data, even if the account’s address has been added permission, they cannot add data.

Procedure add permission for at Logit layer

![](/assets/images/lokahi/image54.png)

Figure 91

1.  On the Logit layer, click on the “Register” block. Click on the “Add Permission”![](/assets/images/lokahi/image68.png) icon.
2.  The "Add Permission" screen appears and has 2 tables.

\+ The left table is "List Of Address". It has a "Search" frame and a table that has 1 column is "Address".

\+ The right table is "Add User Address". It has a blank "Address" textbox with placeholder is "E.g 0x45a61BD2E494f78Aa73bD7C1BF8EFF470799d14C", the \[Close\] button enables, and the \[Add\] button disables.

3.  Enter the address in the “Address” textbox.

\[Note:

-   The “Address” textbox allows entering the letters, the number, if enter just one valid character, the \[Save\] button will be enabled. But don't allow only blank space. If enter only blank space, special character, interrupting in the new line and entering blank space, a red message below the "Address" input announces that "Address is invalid!" and \[Add\] button disables.
-   The address is entered in the "Address" input should be a string has the letters are started  from "a" to "f" or from "A" to "F" and "x" and the number is started from "0” to "9" and has exactly 42 characters and right format "0x....". Ex: 0x72D9Ca808747b01e97c38C9Fc95E99FdC0a8Ab1b.
-   When you add the addresses that aren't right with the address format, once clicked \[Deploy\] button, it will display a red warning at the "[Deployment](#h.3ew3d88u4eb6)" form is "Deployed failed. Try again later!".\]

4.  The \[Add\] button is enabled to click.
5.  The address will appear on the left table. You can copy, edit or delete the addresses by hovering on each row, in the right side of the "Address" column, appear a group button {Copy; Edit; Delete}.

\[Note: In the "Lock" state: you can click on the “Add Permission”![](/assets/images/lokahi/image68.png) icon to open the "Add Permission" screen and manipulate on this screen. But after you reload the page, it does not save anything that you have just edited.\]

#### Add Permission For Contract Has Been Deployed

Once you deploy a contract at Workboard, in the “[Transactions](#view-deployment-history-of-a-contract-on-the-dashboard)” screen, as an owner of that contract you can add the user or organization as a member can see the information of the contracts that have been deployed.

![](/assets/images/lokahi/image100.png)

Figure 92

Attention:

1\. Only the user has deployed that contract or the user or organization has ["Write" or "Delete" access](#projects) (include the cases that the user or organization has been added collaborator or transferred the project) can see the icon "Add User" and can add the other user or organization for that contract.

2\. The User or Organization has "Read" access, they can see the project and all the contracts of that project. They only see how many users or organizations and can only see on that contract at the Contracts page and Dapp interface, but they can execute or add data if that user has the account address on the blockchain of the user who has deployed that contract. For more information about the Access ("Read" or "Write" or "Delete"), goto [Projects](#projects).

3\. With the user or organization are added on the contract, they only see how many users or organizations and only can see on that contract at the Contracts page and [Dapp](#dapp) interface, but they can execute or add data if that user has the account address on the blockchain of the user who has deployed that contract.

Procedure to add viewer for the deployed contract

1.  Go to the workboard of a Contract layer. Then click the \[Transaction\] button in the toolbar.
2.  Enter in the “Deployment” form the name and version of the Contract will deploy.
3.  Click on the icon "Add User" at the "Manage Users" column of the “the name of the contract at the “Transactions” screen.
4.  The "Add User or Organization To Contract" dialog appears. The "Add User To Contract" dialog has the list of users or organizations that can see the contract. It will show the label "Owner" is next to the user who owns the contract in the list of users or organizations of the "Add User To Contract" dialog.
5.  The "ADD USER OR ORGANIZATION TO CONTRACT" form contains the input "Search and select Users or Organizations". Type on the input. You can search by email, username, and organization’s name.
6.  Once clicked on the user or organization option, it disappears on the dropdown list and appears a label button has the name of that user or organization in the input Combobox. And the \[Add\] button is enabled.
7.  Once clicked \[Add\] button, those users or organizations in the input Combobox will appear on the list of the "Add User To Contract" dialog.
8.  Now, the users or organizations can manipulate that contract.

## REGISTRATION

9

### User Account Sign Up

You can register an account at the user level on the “Sign Up” page of Lokahi by accessing the “Login” page and then click on the “Sign up” link below the \[Login\] button.

![](/assets/images/lokahi/image40.png)

Figure 93

#### Creating An Account

1.  Enter in “Username” field: Use the alphabet or numbers to type a name for your account but do not use blank spaces and special characters (the only special characters allowed are ".", "\_", "@" or "-"). The username must include at least 3 characters and less than 128 characters.
2.  Enter in the “Email” field: Use a valid email to register. This email will be used to verify your account to complete the registration process.
3.  Enter in the “Password” field: Your password must be at least 8 characters and can use the alphabet, numbers, special characters, and blank spaces.
4.  Enter in the “Confirm Password” field: Type exactly the same string typed in “Password” field to verify that password will be used to log in.
5.  Check the checkbox "I accept and confirm that I have read and agree to the End-User License Agreement (EULA) of Lokahi".
6.  After entering enough information into the 4 required fields and checking the “I accept” checkbox, the \[Create new Account\] button will be enabled for you to click on to register your account.
7.  Upon clicking \[Create new Account\] check your email inbox and you will see an email has been sent from Lokahi. Open that mail and click on the link to complete the registration. The link will open the “Login” page on Lokahi and a green pop-up will appear that says "The account has been verified!", allowing you to use your account.

Note:         The email verification link will no longer be valid until you click on that link. You can resend the verification email by logging in again, and a dialog box will appear after you click on the \[Login\] button with information to let you resend the verification email.  Please use the resend button instead of re-registering, as you will have to wait 30 minutes to use the same email to register again.

#### Logging Into An Account

You can log into an account on the “Login” page of Lokahi by using your username or your verified email address along with the password chosen during registration.

![](/assets/images/lokahi/image81.png)

Figure 94

Procedure

1.  Enter in the “Username” field: type your username or the email address used to register and verify your account in Lokahi.
2.  Enter in the “Password” field: type the password for your account.
3.  After entering enough information into these two fields, the \[Login\] button will be enabled for you to click and login to your account. After logging in, it will load the Dashboard page.

Note:        If you used an account that was registered but has not been verified via your email address, you will see a ‘Login Failed’ caution dialog box stating "Your email is not valid. Please check your inbox to verify email confirmation. Don't see the email? RESEND EMAIL."

#### Change An Account’s Password

You can change an account’s password by accessing the “Login” page of Lokahi then click on the “Forgot Password?” link below the \[Login\] button. It will access the “Reset Password” page.

![](/assets/images/lokahi/image24.png)

Figure 95

Procedure

1.  Enter in the “Email” field: type your email used to register and verify your account in Lokahi.
2.  After entering a valid email in the “Email” field, the \[Reset Password\] button will be enabled for you to click on to begin the resetting of the password process.
3.  After clicking the \[Reset Password\] button, you can login to your email and you will see a mail has been sent from Lokahi. Open that mail and click on the link to complete the resetting password process.
4.  Once clicked on the “Change Password” link, it accesses the “Reset Your Password” page. Now, you can enter a new password.
5.  Once clicked \[Submit\] button, it announces to you that “Your changes have been saved! Now you can Log in with the new password". And an email is sent to your email with the content "This is a confirmation that the password for your account {your email address} has just been changed.".

Note:        The email link will only be valid for 1 hour.

## LAYER LEVELS & USER PERMISSIONS

10

### Contract

-   Contract is what gets created in the Contract layer.
-   Contract is the highest layer and can be deployed to the blockchain.
-   Contract uses the Elements have been configured to create the model.
-   All user levels could use this layer.

### Element

-   Element is what gets created in the Element Layer.
-   Element is the medium layer and the layer provides directly to the Contract layer to create a model.
-   Element uses the Logits have been configured to create the model.
-   Administrator, Engineer and Advanced user level could use this layer.

### Logit

-   Logit - is what gets created in the Logit layer.
-   Logit is the lowest layer and the layer provides directly to the Element layer to create a model.
-   Logit uses the register and transaction blocks to create the model.
-   Administrator and Engineer user level could use this layer.

### The Roles And The Functions Of Each User: User Permissions

There are 4 roles in Lokahi, with a Business User account, Advanced user account, Engineer and Administrator each having different levels of user permissions within the platform.

#### 1\. Administrator

-   An administrator can authorize and grant rights to users and has access to all permission and abilities  of an engineer, advanced user, and Business User account.
-   As an administrator you can create, view, manage, manipulate, deploy and edit the Logit, Element and Contracts of all projects in your organization. An administrator can access all layers (Logit, Element and Contract) from a project‘s layer list on the dashboard, and on the “Layer” dropdown menu on the workboard.

#### 2\. Engineer

-   As an Engineer your permissions include the ability to create, view, manage, manipulate, deploy and edit the Logit, Element and Contracts.  The engineer has access to all these levels of layers for projects created by the engineer themselves, or those projects created by other engineers, Business Users and advanced users that have been assigned or granted permission, and has all of the abilities listed in the advanced user and Business User permissions.
-   The Engineer has the ability to create and configure the Logit and Elements to promote Elements up a level for use on the layers above in contracts created by standard and advanced users to which the engineer is assigned or granted permission.
-   An engineer can access the lower layers (Logit and Element) from the dashboard of the project or on the workboard in a project‘s layer dropdown list.

![](/assets/images/lokahi/image63.png)

Figure 96

-   In addition, from the Contract workboard you can access the Element below easily by double clicking on any Element icon on the workboard. You can use the same action in the Element workboard, to go down into the Logit by double clicking on the Element icon on the workboard.

\[insert video of clicking through layers\]

#### 3\. Advanced User

-   As an advanced user, you can create, view, manage, manipulate, deploy and edit the Element and Contracts of all of the projects you have created and any projects you have been granted permission.  Advanced users also have all the abilities listed in the Business User permissions as well.
-   Advanced users can access the Element below from the project menu on the dashboard, and in the project‘s layer dropdown list on the workboard.
-   In Contract’s workboard, you can go into An Element by double clicking on the Element icon on the workboard.
-   You are able to create and configure the Element as an advanced user, but you need the Logit Elements to be created by an engineer or administrator account, and you may have to request Elements if the ones required are not available in your Element tray.

#### 4\. Business User

-   As a Business User, you can create, view, manage, manipulate the Contracts of all of project you have created or have been assigned.
-   In Contract’s workboard, you can not go into An Element.
-   You are able to create and configure the Contract as a Business User, but you need the Logit and Element to be created by an advanced user, engineer or administrator account, and you may have to request Elements if the ones required are not available in your Element tray.

## ABOUT LOKAHI

11

### Introduction: Lokahi Web Application

The “Lokahi” web application guideline describes how to use the Lokahi web application to create and manipulate projects and contracts, the methods utilized to build Components and promote them between the Logit, Element and Contract components for use in projects on the workboard and the manner in which to determine administrator authority and disseminate permissions across a subset of users.

In addition, this guideline provides an introductory overview of the tasks that can be performed within the Lokahi system and includes rudimentary instructions that describe each of the tasks.

The documentation focuses on guiding the implementation of the tasks through defined roles of each user managing the projects and contracts, including the following information:

-   Registration of an account
-   Login and changing Password
-   Introducing the levels of components, projects and contracts
-   The tasks and manipulations of projects and contracts via the Dashboard
-   The roles and administrative functions of each account in managing projects and collaborations
-   The tasks and manipulations on the Workboard
-   Guidance on how to deploy Contracts

#### What is Lokahi?

Lokahi is a new breed of tool that uses a customizable and easy to learn visual language to design software. The application was built to simplify Blockchain, IoT, and Web Services integrations but can also be used to simplify a broad range of system development requirements.

Lokahi does not require someone to know how to program in a language such as Java, Python, etc. as it has mathematically based instruction sets that can be interpreted by decoders on blockchain, IoT devices, and web servers. The instruction sets are not compiled or interpreted code, since code contains bugs even after long testing cycles.

#### Visual Language

Lokahi supports a visual language that allows users to build out complex requirements by dragging and dropping components on a workboard. The work is almost entirely done with the mouse and requires almost no typing. The visual language uses custom and stock components to represent data and Logic flows.

#### Collaborative Environment

Lokahi has full support for collaboration and has built-in support for agile methodologies. This is ideal for the development of complex systems where Contract knowledge is spread across more than one Contract and system experts. Transfer of knowledge from business to technical teams is often fraught with the potential for errors through miscommunication. Lokahi addresses this danger by allowing requirements to be entered into the tool by the person most familiar with the requirements. Ferdon’s team of engineers can collaborate with the onsite team to add custom capabilities to the Contract language.

#### Rapid Application Development of Custom Elements

Lokahi uses meta-modeling to create an assembly line for the creation of building blocks, making it possible to scale the rapid development of custom Contract languages through a process of component development and refinement. Thus existing building blocks are used to build higher-level building blocks that abstract away more of the technology and align more with business requirements.

Ferdon supports its customers by using Lokahi for Rapid Application Development (RAD) of custom Contract components. These components can then be remotely added to augment the customers' Contract language. Turnaround times for assembling custom Contract components is usually a matter of a few days.

#### Highest Levels of Reliability

Because Lokahi does not generate code, programmer error doesn’t exist. Errors of mistakes in Logic can still occur but are much less frequent because we are not double and triple handling requirements with programmers and software testers. Lokahi’s execution language was designed around formal methods including automatic theorem proving and model checking. Lokahi uses the same kinds of formal verification processes used in the development of mission critical applications such as software used in an airport control room or software built for medical devices. Deep analysis are continuously performed on the design during development and reports can be generated and reviewed that highlight design flaws.

#### Simulation Instead of Deployment and Testing

Lokahi allows entire sub-systems that may include blockchain, IoT and web services to be designed in one place. The subsystems can be simulated to provide deep insights into how the application would function. Simulation can be done in minutes allowing the several variations of a solution to be tried at a low cost. Problems that are identified and isolated during simulation can be fixed quickly and at low cost. Long develop, deploy, and test cycles are no longer needed.

#### Deployment Plans

Lokahi design is at the Logical layer. Deployment plans allow the same Logical design to be deployed to various blockchain technologies, IoT devices and web servers. This means that the same design could be deployed across several systems running different hardware, or different flavors of blockchain or instance. Technology changes down the road are painless and often only require a redeployment.

#### Immutable Deployments and Hardware Pinning IoT and Blockchain

Lokahi is often used to model Logit for combination of blockchain smart contracts, IoT devices, and web services. These components can be configured with security credentials that pin the components to specific hardware devices and to specific versions of other components. This is useful when designing for multi-party applications where the parties don’t completely trust each other. For instance, an IoT device that registered the arrival of packages on a blockchain might be used for billing purposes. In this case both parties could approve the design of the system and the components would then be deployed to an immutable status so neither party could modify any part of the system without all parties knowing.
