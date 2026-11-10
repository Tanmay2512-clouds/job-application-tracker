import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

interface CreateJobApplicationDialogProps{
    columnId:string;
    boardId:string;
}

export default function CreateJobApplicationDialog({columnId,boardId}:CreateJobApplicationDialogProps){
    return(
        <Dialog>
            <DialogTrigger>
                <Button variant="outline">
                    <Plus/>
                    Add Job
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Job Application</DialogTitle>
                    <DialogDescription>Track a new job application</DialogDescription>
                </DialogHeader>
                <form action="">
                    <div  className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="company">Company *</Label>
                                <Input id="company" required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="position">Position *</Label>
                                <Input id="position" required/>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location </Label>
                                    <Input id="location" required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="salary">Salary </Label>
                                    <Input id="salary" required/>
                                </div>
                        </div>
                        </div>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
        
    )
}