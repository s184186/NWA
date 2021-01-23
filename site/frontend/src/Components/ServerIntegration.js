import React from "react";
import { Button } from "reactstrap";
import { NavLink as RouterNavLink, Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import ToolDescription from "./ToolDescription.js";
import { useTranslation, Trans } from "react-i18next";

const ServerIntegration = props => {
  var stack = props.stackStatus;
  const { t } = useTranslation("server_v1-"+stack);

  if (stack === "chirpstack"){

  return (
    <div>
      <h1>
        {t("integration.title")}
        <span style={{ color: "grey", fontSize: "40%" }}>v1.0</span>
      </h1>
      <p>{t("integration.intro")}</p>
      <hr />
      <h3>{t("integration.jar.title")}</h3>
      <p>
        <Trans i18nKey="server_v1-chirpstack:integration.jar.intro">
          To run the server program as an application you need to compile it into a runnable
          <ToolDescription id="jar" name="JAR-file" description={t("integration.jar.tooltip")} /> To do so perfom the
          following steps in the terminal while in the following directory:
        </Trans>
      </p>
      <Breadcrumb>
        <BreadcrumbItem active>Neighbourhood-Watch/Chirpstack/server/</BreadcrumbItem>
      </Breadcrumb>
      <p>{t("integration.jar.install")} {t("integration.jar.package")}</p>
      <Breadcrumb>
      <BreadcrumbItem>
      <p>
       mvn install:install-file -Dfile=$PWD/SimpleHash.jar -DgroupId=test.com.sipHash -DartifactId=sipHash -Dversion=1.0 -Dpackaging=jar -DgeneratePom=true <br/>
       <br/>
       mvn package
      </p>
      </BreadcrumbItem>
      </Breadcrumb>
      <p>
        <Trans i18nKey="server_v1-chirpstack-chirpstack:integration.file.acces">
          To grant acces to the bash file <code>send_sms.sh</code> - which is necessary for the SMS capabilities - type
          in the command:
        </Trans>
      </p>
      <Breadcrumb>
        <BreadcrumbItem active>$chmod +x ./send_sms.sh</BreadcrumbItem>
      </Breadcrumb>
      {t("integration.file.check")}
      <Breadcrumb>
        <BreadcrumbItem active>$./send_sms.sh &lt;your_number&gt; &lt;content&gt;</BreadcrumbItem>
      </Breadcrumb>
      <p>{t("integration.file.result")}</p>
      <h3>{t("integration.server.title")}</h3>
      <p>
        <Trans i18nKey="server_v1-chirpstack:integration.server.run">
          Run the JAR file with the command below.
        </Trans>
      </p>
      <Breadcrumb>
        <BreadcrumbItem active>$java -jar target/AlarmSystemREST-thorntail.jar</BreadcrumbItem>
      </Breadcrumb>
      <Button className="float-right" tag={RouterNavLink} to="/server/chirpstack/webinterface" color="danger">
        {t("integration.next")}
      </Button>
    </div>
  );
};

  return (
    <div>
      <h1>
        {t("integration.title")}
        <span style={{ color: "grey", fontSize: "40%" }}>v1.0</span>
      </h1>
      <p>{t("integration.intro")}</p>
      <hr />
      <h3>{t("integration.jar.title")}</h3>
      <p>
        <Trans i18nKey="server_v1:integration.jar.intro">
          To run the server program as an application you need to compile it into a runnable
          <ToolDescription id="jar" name="JAR-file" description={t("integration.jar.tooltip")} /> To do so perfom the
          following steps in Eclipse:
        </Trans>
      </p>
      <Breadcrumb>
        <BreadcrumbItem active>File -> Export -> Java/Runnable Jar file</BreadcrumbItem>
      </Breadcrumb>
      <p>{t("integration.jar.export")}</p>
      <h3>{t("integration.file.title")}</h3>
      <p>
        <Trans i18nKey="server_v1:integration.file.intro">
          Once the JAR file has been succesfully compiled, proceed to transfer it using SCP as described in the{" "}
          <Link to="/server/os" className="alert-link">
            raspberry pi setup
          </Link>
          section alongside the files "send_sms.sh", "database_component.txt", "database_house.txt",
          "database_phone.txt" located in the root server folder. The files can be placed anywhere, but NWA recommends
          "Desktop" for convinience. Remember to retransfer the database files every time they are updated!
        </Trans>
      </p>
      <p>{t("integration.file.move")}</p>
      <Breadcrumb>
        <BreadcrumbItem active>$cd Desktop</BreadcrumbItem>
      </Breadcrumb>
      <p>
        <Trans i18nKey="server_v1:integration.file.acces">
          To grant acces to the bash file <code>send_sms.sh</code> - which is necessary for the SMS capabilities - type
          in the command:
        </Trans>
      </p>
      <Breadcrumb>
        <BreadcrumbItem active>$chmod +x ./send_sms.sh</BreadcrumbItem>
      </Breadcrumb>
      <p>{t("integration.file.check")}</p>
      <Breadcrumb>
        <BreadcrumbItem active>$./send_sms.sh &lt;your_number&gt; &lt;content&gt;</BreadcrumbItem>
      </Breadcrumb>
      <p>{t("integration.file.result")}</p>
      <h3>{t("integration.server.title")}</h3>
      <p>
        <Trans i18nKey="server_v1:integration.server.run">
          Run the JAR file with the command below. If everything works, you should again be promted with the message "
          <b>connected to the backend...</b>".
        </Trans>
      </p>
      <Breadcrumb>
        <BreadcrumbItem active>$java -jar server.jar</BreadcrumbItem>
      </Breadcrumb>
      <Button className="float-right" tag={RouterNavLink} to="/server" color="danger">
        {t("integration.next")}
      </Button>
    </div>
  );

}

export default ServerIntegration;
