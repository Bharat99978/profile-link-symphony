import { useState } from "react"
import { Youtube, Instagram, Twitter, Phone } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface SocialMedia {
  platform: "youtube" | "instagram" | "x" | "whatsapp"
  url: string
  personalUrl: string
}

interface Props {
  socials: SocialMedia[]
  onSave: (platform: string, url: string, personalUrl: string) => void
}

export const SocialMediaWheel = ({ socials, onSave }: Props) => {
  const [editingPlatform, setEditingPlatform] = useState<string | null>(null)
  const [editUrl, setEditUrl] = useState("")
  const [editPersonalUrl, setEditPersonalUrl] = useState("")

  const getIcon = (platform: string) => {
    switch (platform) {
      case "youtube":
        return <Youtube className="w-6 h-6" />
      case "instagram":
        return <Instagram className="w-6 h-6" />
      case "x":
        return <Twitter className="w-6 h-6" />
      case "whatsapp":
        return <Phone className="w-6 h-6" />
      default:
        return null
    }
  }

  const handleEdit = (social: SocialMedia) => {
    setEditingPlatform(social.platform)
    setEditUrl(social.url)
    setEditPersonalUrl(social.personalUrl)
  }

  const handleSave = () => {
    if (editingPlatform) {
      onSave(editingPlatform, editUrl, editPersonalUrl)
      setEditingPlatform(null)
    }
  }

  return (
    <div className="social-wheel">
      {socials.map((social, index) => {
        const angle = (index * 360) / socials.length
        const radius = 160 // Distance from center
        const x = Math.cos((angle * Math.PI) / 180) * radius
        const y = Math.sin((angle * Math.PI) / 180) * radius

        return (
          <Dialog key={social.platform}>
            <DialogTrigger asChild>
              <button
                className="social-icon"
                style={{
                  transform: `translate(${x + 160}px, ${y + 160}px)`,
                }}
                onClick={() => handleEdit(social)}
              >
                {getIcon(social.platform)}
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="capitalize">{social.platform} Links</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Platform URL</label>
                  <Input
                    value={editUrl}
                    onChange={(e) => setEditUrl(e.target.value)}
                    placeholder={`Enter ${social.platform} URL`}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Personal URL</label>
                  <Input
                    value={editPersonalUrl}
                    onChange={(e) => setEditPersonalUrl(e.target.value)}
                    placeholder={`Enter your ${social.platform} profile URL`}
                  />
                </div>
                <Button onClick={handleSave} className="w-full">
                  Save
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        )
      })}
    </div>
  )
}