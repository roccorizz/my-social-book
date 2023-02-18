import Story from "../public/storyPhotos/story.jpg"
import Story2 from "../public/storyPhotos/story2.jpg"
import Story3 from "../public/storyPhotos/story3.jpg"
import Story4 from "../public/storyPhotos/story4.jpg"

import Profile from "../public/profileimage.jpg"
import Profile2 from "../public/storyPhotos/profile2.jpg"
import Profile3 from "../public/storyPhotos/profile3.jpg"
import Profile4 from "../public/storyPhotos/profile4.jpg"
import StoryCard from "./StoryCard"
const stories = [
    {
        name: "SK Rizvi",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676627550/story_h5urfp.jpg",
        profile: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676629763/profileimage_iwzfrb.jpg"
    },
    {
        name: "Adah Sharma",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676627551/story2_f2fja0.jpg",
        profile: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676627550/profile2_scycgm.jpg"
    },
    {
        name: "Hossain Sohan",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676627551/story3_kukvpz.jpg",
        profile: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676634494/profile3_rftj6h.jpg"
    },
    {
        name: "Kamal Ahmed",
        src: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676627551/story4_ex84mx.jpg",
        profile: "https://res.cloudinary.com/dtzwecnp5/image/upload/v1676634189/profile4_dn4vny.jpg"
    }
]
function Stories() {
    return <div className="flex justify-center space-x-3 mx-auto
    ">
        {stories.map(story => (
            <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
        ))}
    </div>
}
export default Stories;