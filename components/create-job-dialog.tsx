"use client"

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

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
                                    <Input id="salary" placeholder="e.g. , $100k-$150k" required/>
                                </div>
                        </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="jobUrl">Job Urls </Label>
                            <Input id="jobUrl" placeholder="https://...." required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags(comma seperated)</Label>
                            <Input id="tags" placeholder="React,Tailwind" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea rows={3} id="description" placeholder="Description of the job" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea rows={4} id="notes"required/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline">Cancel</Button>
                        <Button type="submit">Add Application</Button>
                    </DialogFooter>


                </form>
            </DialogContent>
        </Dialog>
        
    )
}