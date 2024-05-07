import { QuartzFilterPlugin } from "../types"

export const ExplicitPublish: QuartzFilterPlugin = () => ({
  name: "ExplicitPublish",
  shouldPublish(_ctx, [_tree, vfile]) {
    const publishValue = vfile.data?.frontmatter?.publish ?? false;
    return publishValue === true || 
           (typeof publishValue === 'string' && publishValue.toLowerCase() === "true");
  },
})
