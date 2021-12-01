import React from "react"
import classnames from "clsx"

import * as styles from "./community-section.module.scss"

import { Paragraph } from "@watheia/base-ui.atoms.paragraph"
import { Grid } from "@watheia/base-ui.layout.grid-component"
import { alignItems, marginCenter } from "@watheia/base-ui.layout.align"
import { textColumn } from "@watheia/base-ui.layout.page-frame"
import { PossibleSizes } from "@watheia/base-ui.theme.sizes"

import { GithubLink } from "@watheia/design.molecules.community-links.github-link"
import { links } from "@watheia/design.data.links"
import { SlackLink } from "@watheia/design.molecules.community-links.slack-link"
import { H2 } from "@watheia/base-ui.atoms.heading"
import { TwitterLink } from "@watheia/design.molecules.community-links.twitter-link"
import { TwitterCard } from "@watheia/design.molecules.twitter-card"

export type CommunitySectionProps = {
  /**
   * Show Github star count next to the Repository link.
   */
  githubStars?: number
} & React.HTMLAttributes<HTMLDivElement>

/**
 * @name CommunitySection
 * @description
 * A section providing links to various bit communities, such as Twitter, Slack and Github.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function CommunitySection(props: CommunitySectionProps) {
  const { githubStars, ...rest } = props

  return (
    <Grid
      {...rest}
      colL={2}
      className={classnames(props.className, styles.communitySection, alignItems.center)}
    >
      <div className={styles.cta}>
        <div className={classnames(textColumn, marginCenter)}>
          <H2 className={styles.title} size={PossibleSizes.sm}>
            Join the community
          </H2>
          <Paragraph className={styles.text} size={PossibleSizes.md}>
            Join over 200,000 developers around the world to share and build components
            together. Enjoy the world’s largest open-source component community with over
            60,000 components and growing. Come join us.
          </Paragraph>

          <div className={styles.links}>
            <GithubLink href={links.github} starCount={githubStars} />
            <SlackLink href={links.slack} />
            <TwitterLink href={links.twitter} />
          </div>
        </div>
      </div>

      <div className={styles.tweets}>
        <TwitterCard
          className={styles.tweet}
          title="@Sketch2R"
          image="homepage-bit/tweets/sketch2r.jpg"
          verified
          titleId="twitterTitle0"
          textId="twitterText0"
        >
          Great news! We just published our first Stratos components to http://bit.dev!
        </TwitterCard>
        <TwitterCard
          className={styles.tweet}
          title="@TheNextWeb"
          image="homepage/join-fold/tnw.png"
          verified
          titleId="twitterTitle0"
          textId="twitterText0"
        >
          Build software like Lego with this smart new developer tool.
        </TwitterCard>
        <TwitterCard
          className={styles.tweet}
          title="@smashingmag"
          image="homepage/join-fold/smashing.png"
          verified
          titleId="twitterTitle1"
          textId="twitterText2"
        >
          Bit, a distributed virtual component repository for projects built in a modular
          way.
        </TwitterCard>
      </div>
    </Grid>
  )
}
