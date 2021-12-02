import React, { HTMLAttributes } from "react"
import classNames from "clsx"

import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"
import { text } from "@watheia/base-ui.layout.align"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { mutedText } from "@watheia/base-ui.atoms.styled-text"

import { H2 } from "@watheia/base-ui.atoms.heading"
import { Image } from "@watheia/base-ui.atoms.image"
import { Icon } from "@watheia/base-ui.atoms.icon"
import { links } from "@watheia/design.data.links"

import * as styles from "./support-channels.module.scss"
import { SlackLink } from "@watheia/design.molecules.community-links.slack-link"
import { GithubLink } from "@watheia/design.molecules.community-links.github-link"
import { CommunityLink } from "@watheia/design.atoms.community-link"
import { ChannelButtonCta } from "./support-channel-cta"

type SupportChannelsProps = HTMLAttributes<HTMLElement>

/**
 * Support channels section for specifying all the ways to contact Bit's support.
 * @name SupportChannels
 */
export function SupportChannels(props: SupportChannelsProps) {
  const { className, ...rest } = props
  const channelsData = [
    {
      title: "Slack",
      subTitle: "Chat with the team and the community on Slack.",
      button: <SlackLink className={styles.channelButton} href={links.slack} />
    },
    {
      title: "Email",
      subTitle: "Open a support ticket and we’ll respond quickly.",
      icon: "email",
      button: (
        <CommunityLink
          className={classNames(styles.channelButton, styles.email)}
          href="/support"
        >
          <Icon of="email" className={styles.emailIcon} />
          Contact support
        </CommunityLink>
      )
    },
    {
      title: "GitHub",
      subTitle: "Open an issue or contribute OSS on GitHub.",
      button: <GithubLink className={styles.channelButton} href={links.github} />
    }
  ]

  return (
    <Grid
      colMd={2}
      {...rest}
      className={classNames(className, text.center, text.md.left, styles.mainGrid)}
    >
      <div className={classNames(styles.content)}>
        <H2 size={PossibleSizes.sm}>Any way you choose</H2>
        <Paragraph
          size={PossibleSizes.lg}
          className={classNames(mutedText, styles.mainParagraph)}
        >
          Get help quickly in Slack, Email, GitHub or any other way. Our team is here to
          help you any way you choose.
        </Paragraph>

        <div>
          {channelsData.map((channel, index) => (
            <ChannelButtonCta title={channel.title} key={index} subTitle={channel.subTitle}>
              {channel.button}
            </ChannelButtonCta>
          ))}
        </div>
      </div>
      <Image
        className={styles.image}
        alt={"alt"}
        src={"support-page/Illustrations/channels-section.svg"}
      />
    </Grid>
  )
}
