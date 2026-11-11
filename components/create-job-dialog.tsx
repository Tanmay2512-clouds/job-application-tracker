"use client"

import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import React, { useState } from "react";

interface CreateJobApplicationDialogProps{
    columnId:string;
    boardId:string;
}

export default function CreateJobApplicationDialog({columnId,boardId}:CreateJobApplicationDialogProps){
    const [open,setOpen] = useState<boolean>(false)
    const [formData,setFormData] = useState({
        company:"",
        position:"",
        location:"",
        notes:"",
        salary:"",
        jobUrl:"",
        tags:"",
        description:""
    });

    async function handleSubmit(e:React.FormEvent) {
        e.preventDefault()

        try{

        }catch(err){
            console.error(err)
        }
    }
    return(
        <Dialog open={open} onOpenChange={setOpen}>
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div  className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="company">Company *</Label>
                                <Input value={formData.company} id="company" required onChange={(e)=>setFormData({...formData,company:e.target.value})}/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="position">Position *</Label>
                                <Input value={formData.position} onChange={(e)=>setFormData({...formData,position:e.target.value})} id="position" required/>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="location">Location </Label>
                                    <Input value={formData.location} onChange={(e)=>setFormData({...formData,location:e.target.value})}  id="location" required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="salary">Salary </Label>
                                    <Input value={formData.salary} onChange={(e)=>setFormData({...formData,salary:e.target.value})} id="salary" placeholder="e.g. , $100k-$150k" required/>
                                </div>
                        </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="jobUrl">Job Urls </Label>
                            <Input value={formData.jobUrl} onChange={(e)=>setFormData({...formData,jobUrl:e.target.value})} id="jobUrl" placeholder="https://...." required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags(comma seperated)</Label>
                            <Input value={formData.tags} onChange={(e)=>setFormData({...formData,tags:e.target.value})} id="tags" placeholder="React,Tailwind" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea value={formData.description} onChange={(e)=>setFormData({...formData,description:e.target.value})} rows={3} id="description" placeholder="Description of the job" required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="notes">Notes</Label>
                            <Textarea value={formData.notes} onChange={(e)=>setFormData({...formData,notes:e.target.value})} rows={4} id="notes"required/>
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="button" variant="outline" onClick={()=>setOpen(false)}>Cancel</Button>
                        <Button type="submit">Add Application</Button>
                    </DialogFooter>


                </form>
            </DialogContent>
        </Dialog>
        
    )
}