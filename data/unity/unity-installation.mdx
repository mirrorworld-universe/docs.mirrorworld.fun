# Mirror World Unity SDK

>Mirror World's Official Unity SDK  

## Getting started
1. You should have a MirrorWorld developer account,you can register for it at [our official site](https://app.mirrorworld.fun).
2. You need to prepare an APIKey. If you don't have one,you can acquire it `following Home->Create Project` and create a new project for yourself.

## Import SDK

1. One way,download assets [Mirror World Unity SDK](https://github.com/mirrorworld-universe/mirrorworld-sdk-unity/releases).  
import it to your project `Assets > Import Package > Custom Package` and select the package you just downloaded.
2. Besides, you can also search for the package in Unity Assets Store with the key word "com.mirror.sdk" and import it.

## Usage
### Configration
#### Config with prefab
![image](https://github.com/mirrorworld-universe/mirrorworld-sdk-unity/blob/master/CaseImage/case_prefab_example.jpg)

Explanation of beyond image:
- Api Key
Input your aky key which requested on https://docs.mirrorworld.fun/ .  
- Debug Mode
If checking this, you could see all the flow and error notice on console.
- Environment
Choose the environment you want to use.
- Debug Email and Password
In pre-release beta, you can only login SDK with this function. Input your email and password on https://docs.mirrorworld.fun/ .

#### Configration dynamic
If you don't want to add a game object to your scene,you can init Mirror World SDK with the following code:  
```cs
GameObject mirrorObj = new GameObject("MirrorSDK", typeof(MirrorSDK));
string apiKey = "your api key";
bool debugMode = true;
Environment environment = Environment.StagingDevnet;

MirrorSDK.InitSDK(apiKey, mirrorObj, debugMode, environment);
```

### Login
And then,if you want to call some API of SDK in your app,you should lead users to login first.

1. Call up login page  

If you want him to login(or again), you can use the following code:
```cs
MirrorSDK.StartLogin();
```

And if you want to do something after the logining is successful,you can pass an action to it as follows code:
```cs
MirrorSDK.StartLogin((isSuccess)=>{
    if(isSuccess){
        Debug.Log("Login success!");
    }else{
        Debug.Log("Login failed!");
    }
});
```

2. Check if use needs to login.
When a user opens your app, you may want to know whether this user has logged in before,instead of letting him login every time, you can call the following code to know that.

```cs
MirrorSDK.IsLoggedIn((isLoggedIn) => {
    Debug.Log("If he is logged in:" + isLoggedIn);
});
```

### Open wallet
User may want to check their wallet in your app,you can open their wallet by following code:

```cs
Action logoutAction = ()=> {
    MirrorWrapper.Instance.LogFlow("Wallet logout.");
}

MirrorSDK.OpenWalletPage(logoutAction);
```
If you don't need to do anything if user clicked logout button in wallet page,passing 'logoutAction' to this function would be ok.

### Confirmation
When we call some API of SDK, you are allowed to pass a param named 'confirmation' to it.
You can use all the confirmation we provide in 'Confirmation' enum. Here is an explanation for every kind of them:
- `Default`: If you pass this kind of confirmation to an API,it will use a default confirmation to handle this call,most of the time,it equals 'Confirmed'.
- `Finalized`: If you use this, API will wait for Solana to confirm the transaction before returning the HTTP response to you.
So the time will be longer more or less.
- `Confirmed`: It is a fairly quick response to the user and is a reasonable promise that the transaction if processed, will be eventually finalized after a certain number of confirmations by the validator network.
- `Processed`: The node will query its most recent block. Note that the block may still be skipped by the cluster.

### Package
You need to do some configuation if you want to package your app.

#### Android

**Switch to Android platform**
Find File -> Build and settings -> Choose Android platform (If you are not) -> Click switch platform button.`

**Edit Androidmanifest.xml**
Find:File->Build and settings->Player Settings->Publishing Settins->Build->Custom Main Manifest

Check it, and you may see the path of this file.Let's edit it.

**Add permission of internet.**
```xml
<uses-permission android:name="android.permission.INTERNET" />
<queries>
    <intent>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="https"/>
    </intent>
</queries>
```

**Register this activity**
```xml
<activity
    android:name="com.mirror.sdk.activities.RedirectActivity"
    android:exported="true">

    <intent-filter>
        <action android:name="android.intent.action.VIEW"/>
        <category android:name="android.intent.category.DEFAULT"/>
        <category android:name="android.intent.category.BROWSABLE"/>
        <data android:scheme="mwsdk"/>
    </intent-filter>
</activity>
```

So, the finnaly file would looked as this:
```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools"
    package="com.mirror.mirrorworld_sdk_android">

    <uses-permission android:name="android.permission.INTERNET" />
    <queries>
        <intent>
            <action android:name="android.intent.action.VIEW" />
            <category android:name="android.intent.category.BROWSABLE" />
            <data android:scheme="https"/>
        </intent>
    </queries>

    <application
        android:allowBackup="true"
        android:dataExtractionRules="@xml/data_extraction_rules"
        android:fullBackupContent="@xml/backup_rules"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:networkSecurityConfig="@xml/network_security_config"

        android:roundIcon="@mipmap/ic_launcher_round"
        android:supportsRtl="true"
        android:theme="@style/Theme.Mirrorworldsdkandroid"
        tools:targetApi="31">
        <activity
            android:name=".MainActivity"
            android:launchMode="singleTask"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>


        <activity
            android:name="com.mirror.sdk.activities.RedirectActivity"
            android:exported="true">

            <intent-filter>
                <action android:name="android.intent.action.VIEW"/>
                <category android:name="android.intent.category.DEFAULT"/>
                <category android:name="android.intent.category.BROWSABLE"/>
                <data android:scheme="mwsdk"/>
            </intent-filter>
        </activity>
    </application>

</manifest>
```

**Edit laucherTemplate.gradle**
Use the same function to open your laucherTemplate.gradle file.
Add this to dependencies:
```xml
implementation 'androidx.browser:browser:1.3.0'
```

So the finnal dependencies may like this:
```xml
apply plugin: 'com.android.application'

dependencies {
    implementation project(':unityLibrary')
    implementation 'androidx.browser:browser:1.3.0'
}
```

**Edit gradleTemplate.properties**
Add these to the end of the file:
```
android.useAndroidX=true
android.enableJetifier=true
```

**Besides, you can refer to Android Document to get more information.**

#### iOS
**Build your xCode project**
Find File->Build and settings->iOS->Switch Platform->Build

**Add Mirror World Framework**
Open the build xCode project.
Select your project root->TARGETS/Unity-iPhone->Build pharses->Copy Files
Change the destination to "Frameworks" and click "+" button to add MirrorWorldSDK.framework to your project.

**Edit UnityAppController.mm**
First, add this import to head of the file:
```swift
#import <MirrorWorldSDK/MirrorWorldSDK-Swift.h>
```

Second, add this to openUrl function:
```swift
[[MirrorWorldSDK share] handleOpenWithUrl:url];
```

So, finnaly your openUrl function may looked like this:
```swift
- (BOOL)application:(UIApplication*)app openURL:(NSURL*)url options:(NSDictionary<NSString*, id>*)options
{
    id sourceApplication = options[UIApplicationOpenURLOptionsSourceApplicationKey], annotation = options[UIApplicationOpenURLOptionsAnnotationKey];

    NSMutableDictionary<NSString*, id>* notifData = [NSMutableDictionary dictionaryWithCapacity: 3];
    if (url)
    {
        notifData[@"url"] = url;
        UnitySetAbsoluteURL(url.absoluteString.UTF8String);
    }
    if (sourceApplication) notifData[@"sourceApplication"] = sourceApplication;
    if (annotation) notifData[@"annotation"] = annotation;

    AppController_SendNotificationWithArg(kUnityOnOpenURL, notifData);
    [[MirrorWorldSDK share] handleOpenWithUrl:url];
    return YES;
}
```

## Full API Documentation
You can view the documentation for Mirror World SDK for Mobile on [our Official Documentation Site](https://docs.mirrorworld.fun/unity/unity-api)
